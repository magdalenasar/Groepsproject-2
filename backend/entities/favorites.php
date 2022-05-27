<?php
require_once "lib/bootstrap.php";
setlocale(LC_CTYPE, 'nl_BE.utf8');

function ApiGetFavorites( $id = null)
{
    global $conn;
    $results = array();

    $fields = array();
    $fields[] = "usr_act_id";
    $fields[] = "act_title as title";
    $fields[] = "usr_name as name";
    $fields[] = "usr_surname as surname";
    $fields[] = "usr_act_favorite";

    $sql = "select  DISTINCT " . implode(",", $fields ) . " from usr_act ua" .
                " INNER JOIN activities a ON ua.act_id=a.act_id " .
                " INNER JOIN user u ON ua.usr_id=u.usr_id" .
                " where ua.usr_act_favorite='1'";
    if ($id) {
        if (! is_numeric($id) ) $results = array( "FOUT" => "Ongeldig id opgegeven" );
        $sql .= " AND ua.usr_id=$id";
    }

    $dsFavorites = new DataSet($sql, $conn, true);

    foreach ( $dsFavorites->rows as $row )
    {
        $row['name'] = COutputText( $row['name'] );
        $row['surname'] = COutputText( $row['surname'] );
        $row['title'] = COutputText( $row['title'] );
        $row['title'] = COutputText( $row['title'] );

        $results[] = $row;
    }

    ReturnResults( $results );
}

function ApiCreateFavorite($id)
{
    global $conn;

    //doorgestuurde data ophalen
    $contents = json_decode( file_get_contents("php://input") );
    $act_id = $contents->act_id;
    $favorite = $contents->favorite;

    //favorite ophalen
    $sql = "select usr_act_id from usr_act WHERE usr_id=$id AND act_id=$act_id";
    $dsFavorite = new DataSet($sql, $conn, true);

    if ( count($dsFavorite) > 0 ) ErrorMessageAndExit( "Favorite for activity $act_id already exists" );

    //insert statement maken
    $ins = " INSERT INTO usr_act SET" .
        "act_id='$act_id', " .
        "usr_id='$id', " .
        "usr_act_favorite='$favorite'";

    $cmd = new SQLCommand($ins, $conn, true);

    ReturnOKMessage("New favorite created");
}

function ApiDeleteFavorite( $id )
{
    global $conn;

    //doorgestuurde data ophalen
    $contents = json_decode( file_get_contents("php://input") );
    $act_id = $contents->act_id;

    //favorite ophalen
    $sql = "select usr_id, usr_name, usr_surname from user WHERE usr_id=$id";
    $dsFavorite = new DataSet($sql, $conn, true);

    if ( count($dsFavorite) == 0 ) ErrorMessageAndExit( "Didnt find favorite with user '$id'. " );

    //delete statement maken
    $del = " delete from usr_act WHERE usr_id=$id AND act_id=$act_id";
    $cmd = new SQLCommand($del, $conn, true);

    ReturnOKMessage("Data of favorite was deleted");
}