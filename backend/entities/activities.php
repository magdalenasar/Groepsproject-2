<?php
require_once "lib/bootstrap.php";
setlocale(LC_CTYPE, 'nl_BE.utf8');

//---------------------------------------------------------

function ApiGetActivities($id = null) {
    global $conn;
    $results = array();

    $fields = array();
    $fields[] = "act_id";
    $fields[] = "act_title";
    $fields[] = "typ_name";
    $fields[] = "act_participants";
    $fields[] = "act_activity";
    $fields[] = "act_accessibility";
    $fields[] = "act_duration";
    $fields[] = "act_kidfriendly";
    $fields[] = "act_link";

    //alle activiteiten
    $sql = "select  DISTINCT " . implode(",", $fields ) . " from activities " . 
    "INNER JOIN types ON act_typ_id=typ_id";
    if ($id) {
        if (! is_numeric($id) ) $results = array( "FOUT" => "Ongeldig id opgegeven" );
        $sql .= " where act_id=$id";
    }
    $dsActivities = new DataSet($sql, $conn, true);

    foreach ( $dsActivities->rows as $row )
    {
        $row['act_id'] = COutputText( $row['act_id'] );
        $row['act_title'] = COutputText( $row['act_title'] );
        $row['typ_name'] = COutputText( $row['typ_name'] );
        $row['act_participants'] = COutputText( $row['act_participants'] );
        $row['act_activity'] = COutputText( $row['act_activity'] );
        $row['act_accessibility'] = COutputText( $row['act_accessibility'] );
        $row['act_duration'] = COutputText( $row['act_duration'] );
        $row['act_kidfriendly'] = COutputText( $row['act_kidfriendly'] );
        $row['act_link'] = COutputText( $row['act_link'] );

        $results[] = $row;
    }

    ReturnResults( $results );
}

//---------------------------------------------------------
function ApiCreateActivity()
{
    global $conn;
    $results = array();

    //doorgestuurde data ophalen
    $contents = json_decode( file_get_contents("php://input") );

    //doorgestuurde gegevens aannemen
    $act_title = CInputText($contents->title);
    $act_typ_id = $contents->type;
    $act_activity = CInputText($contents->activity);
    $act_duration = $contents->duration;
    $act_participants = $contents->participants;

    //activiteit cre�ren
    $ins = " INSERT INTO activities SET " .
                " act_title='$act_title' ," .
                " act_typ_id='$act_typ_id' ," .
                " act_activity='$act_activity' ," .
                " act_duration='$act_duration' ," .
                " act_participants='$act_participants'";

    $cmd = new SQLCommand($ins, $conn, true);
    $act_id = $cmd->new_id;

    ReturnOKMessage("Activiteit $act_id aangemaakt");
}

//---------------------------------------------------------
function ApiGetUserActivities($id)
{
    global $conn;
    $results = array();

    //alle activiteiten
    $sql = "select * from activities a" .
        " INNER JOIN usr_act ua ON a.act_id= ua.act_id";
    if ($id) {
        if (! is_numeric($id) ) $results = array( "FOUT" => "Ongeldig id opgegeven" );
        $sql .= " where ua.usr_id=$id";
    }
    $dsUsrActivity = new DataSet($sql, $conn, true);

    foreach ( $dsUsrActivity->rows as $row )
    {
        $row['act_id'] = COutputText( $row['act_id'] );
        $row['act_title'] = COutputText( $row['act_title'] );
        $row['act_typ_id'] = COutputText( $row['act_typ_id'] );
        $row['act_participants'] = COutputText( $row['act_participants'] );
        $row['act_activity'] = COutputText( $row['act_activity'] );
        $row['act_accessibility'] = COutputText( $row['act_accessibility'] );
        $row['act_duration'] = COutputText( $row['act_duration'] );
        $row['act_kidfriendly'] = COutputText( $row['act_kidfriendly'] );
        $row['act_link'] = COutputText( $row['act_link'] );

        $results[] = $row;
    }

    ReturnResults( $results );
}
//---------------------------------------------------------
function ApiCreateUserActivity( $id )
{
    global $conn;

    //doorgestuurde data ophalen
    $contents = json_decode( file_get_contents("php://input") );

    //doorgestuurde gegevens aannemen
    $act_title = CInputText($contents->title);
    $act_typ_id = $contents->type;
    $act_activity = CInputText($contents->activity);
    $act_duration = $contents->duration;
    $act_participants = $contents->participants;

    if ($id) {
        if (! is_numeric($id) ) $results = array( "FOUT" => "Ongeldig id opgegeven" );
    }

    //activiteit cre�ren
    $ins = " INSERT INTO activities SET " .
        " act_title='$act_title' ," .
        " act_typ_id='$act_typ_id' ," .
        " act_activity='$act_activity' ," .
        " act_duration='$act_duration' ," .
        " act_participants='$act_participants'";

    $cmd = new SQLCommand($ins, $conn, true);
    $act_id = $cmd->new_id;

    //activiteit linken met user
    $ins = " INSERT INTO usr_act SET " .
        " act_id='$act_id' ," .
        " usr_id='$id'";

    $cmd = new SQLCommand($ins, $conn, true);

    ReturnOKMessage("Activiteit $act_id aangemaakt voor user $id");
}

//---------------------------------------------------------
function ApiUpdateUserActivity( $id )
{
    global $conn;

    //doorgestuurde data ophalen
    $contents = json_decode( file_get_contents("php://input") );

    //doorgestuurde gegevens aannemen
    $act_id = $contents->id;
    $act_title = CInputText($contents->title);
    $act_typ_id = $contents->type;
    $act_activity = CInputText($contents->activity);
    $act_duration = $contents->duration;
    $act_participants = $contents->participants;

    if ($id) {
        if (! is_numeric($id) ) $results = array( "FOUT" => "Ongeldig id opgegeven" );
    }

    //activiteit cre�ren
    $upd = " UPDATE activities a SET " .
        " act_title='$act_title' ," .
        " act_typ_id='$act_typ_id' ," .
        " act_activity='$act_activity' ," .
        " act_duration='$act_duration' ," .
        " act_participants='$act_participants'" .
        " INNER JOIN usr_act ua ON a.act_id=ua.act_id" .
        " where ua.usr_id=$id AND ua.act_id=$act_id";

    $cmd = new SQLCommand($upd, $conn, true);

    ReturnOKMessage("Activiteit $act_id aangepast voor user $id");
}

//---------------------------------------------------------

function ApiDeleteUserActivity( $id )
{
    global $conn;

    //doorgestuurde data ophalen
    $contents = json_decode( file_get_contents("php://input") );

    //doorgestuurde gegevens aannemen
    $act_id = $contents->id;

    //delete statement maken
    /*
    $del = " delete from activities a INNER JOIN usr_act ua ON a.act_id=ua.act_id WHERE ua.usr_id='$id' AND ua.act_id=$act_id";
    $cmd = new SQLCommand($del, $conn, true);
    */

    $del = " delete from usr_act ua WHERE ua.usr_id='$id' AND ua.act_id=$act_id";
    $cmd = new SQLCommand($del, $conn, true);

    ReturnOKMessage("Data of activity $act_id was deleted");
}