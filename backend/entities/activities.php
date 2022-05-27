<?php
require_once "lib/bootstrap.php";
setlocale(LC_CTYPE, 'nl_BE.utf8');

//---------------------------------------------------------

function ApiGetActivities($id = null) {
    global $conn;
    $results = array();

    //alle activiteiten
    $sql = "select * " .
        " from activities";
    if ($id) {
        if (! is_numeric($id) ) $results = array( "FOUT" => "Ongeldig id opgegeven" );
        $sql .= " where act_id=$id";
    }
    $dsActivities = new DataSet($sql, $conn, true);

    foreach ( $dsActivities->rows as $row )
    {
        $row['act_id'] = COutputText( $row['act_id'] );
        $row['act_title'] = COutputText( $row['act_title'] );
        $row['act_availability'] = COutputText( $row['act_availability'] );
        $row['act_type'] = COutputText( $row['act_type'] );
        $row['act_participants'] = COutputText( $row['act_participants'] );
        $row['act_activity'] = COutputText( $row['act_activity'] );
        $row['act_accessibility'] = COutputText( $row['act_accessibility'] );
        $row['act_duration'] = COutputText( $row['act_duration'] );
        $row['act_kidfriendly'] = COutputText( $row['act_kidfriendly'] );
        $row['act_link'] = COutputText( $row['act_link'] );
        $row['act_price'] = COutputText( $row['act_price'] );

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
    $act_title = CInputText($contents->act_title);
    $act_type = $contents->vpl_datum;
    $act_activity = CInputText($contents->vpl_tea_id);
    $act_duration = $contents->vpl_vvm_id;
    $act_participants = $contents->vpl_omschr;

    //activiteit cre�ren
    $ins = " INSERT INTO activities SET " .
                " act_title='$act_title' ," .
                " act_type='$act_type' ," .
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
        $row['act_availlability'] = COutputText( $row['act_availlability'] );
        $row['act_type'] = COutputText( $row['act_type'] );
        $row['act_participants'] = COutputText( $row['act_participants'] );
        $row['act_activity'] = COutputText( $row['act_activity'] );
        $row['act_accessibility'] = COutputText( $row['act_accessibility'] );
        $row['act_duration'] = COutputText( $row['act_duration'] );
        $row['act_kidfriendly'] = COutputText( $row['act_kidfriendly'] );
        $row['act_link'] = COutputText( $row['act_link'] );
        $row['act_price'] = COutputText( $row['act_price'] );

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
    $act_title = CInputText($contents->act_title);
    $act_type = $contents->vpl_datum;
    $act_activity = CInputText($contents->vpl_tea_id);
    $act_duration = $contents->vpl_vvm_id;
    $act_participants = $contents->vpl_omschr;

    if ($id) {
        if (! is_numeric($id) ) $results = array( "FOUT" => "Ongeldig id opgegeven" );
    }

    //activiteit cre�ren
    $ins = " INSERT INTO activities SET " .
        " act_title='$act_title' ," .
        " act_type='$act_type' ," .
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
    $act_id = $contents->act_id;
    $act_title = CInputText($contents->act_title);
    $act_type = $contents->act_type;
    $act_activity = CInputText($contents->act_activity);
    $act_duration = $contents->act_duration;
    $act_participants = $contents->act_participants;

    if ($id) {
        if (! is_numeric($id) ) $results = array( "FOUT" => "Ongeldig id opgegeven" );
    }

    //activiteit cre�ren
    $upd = " UPDATE activities a SET " .
        " act_title='$act_title' ," .
        " act_type='$act_type' ," .
        " act_activity='$act_activity' ," .
        " act_duration='$act_duration' ," .
        " act_participants='$act_participants'" .
        " INNER JOIN usr_act ua ON a.act_id=ua.act_id" .
        " where ua.usr_id=$id AND ua.act_id=$act_id";

    $cmd = new SQLCommand($upd, $conn, true);

    ReturnOKMessage("Activiteit $act_id aangemaakt voor user $id");
}

//---------------------------------------------------------

function ApiDeleteUserActivity( $id )
{
    global $conn;

    //doorgestuurde data ophalen
    $contents = json_decode( file_get_contents("php://input") );

    //doorgestuurde gegevens aannemen
    $act_id = $contents->act_id;

    //delete statement maken
    $del = " delete from activities a INNER JOIN usr_act ua ON a.act_id=ua.act_id WHERE ua.usr_id='$id' AND ua.act_id=$act_id";
    $cmd = new SQLCommand($del, $conn, true);

    ReturnOKMessage("Data of activity $act_id was deleted");
}