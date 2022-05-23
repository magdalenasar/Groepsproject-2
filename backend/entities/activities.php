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
function ApiCreateActivities()
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
function ApiUpdateVerplaatsing($id)
{
    global $conn;
    $results = array();

    //doorgestuurde data ophalen
    $contents = json_decode( file_get_contents("php://input") );

    //doorgestuurde gegevens aannemen
    $medewerker = $contents->vpl_med_id;
    $datum = $contents->vpl_datum;
    $tea_id = $contents->vpl_tea_id;
    $vervoermiddel = $contents->vpl_vvm_id;
    $omschr = CInputText($contents->vpl_omschr);
    $km = $contents->vpl_km;
    $ww_inbegr = $contents->vpl_ww_in; //bool, keuzevak
    $km_zonder = $contents->vpl_km;
    $kost_km = $contents->vpl_kost_km;
    $kost_ov = $contents->vpl_kost_ov;
    $kost_pa = $contents->vpl_kost_pa;
    $kost_tot = $contents->vpl_kost_tot;
    $client_ids = $contents->ccd_id;
    $duur = $contents->vpl_duur;
    $datum_goed = $contents->vpl_datum_goedkeuring;
    $teamcoach = $contents->vpl_tec_id;

    //activiteit updaten
    $upd = " UPDATE ccd_verplaatsing SET " .
        " vpl_datum='$datum' ," .
        " vpl_med_id='$medewerker' ," .
        " vpl_tea_id='$tea_id' ," .
        " vpl_vvm_id='$vervoermiddel' ," .
        " vpl_omschr='$omschr' ," .
        " vpl_ww_in='$ww_inbegr' ," .
        " vpl_kost_km='$kost_km' ," .
        " vpl_km_totaal='$km' ," .
        " vpl_km='$km_zonder' ," .
        " vpl_kost_ov='$kost_ov' ," .
        " vpl_kost_pa='$kost_pa' ," .
        " vpl_kost_tot='$kost_tot' ," .
        " vpl_datum_goedkeuring='$datum_goed' ," .
        " vpl_tec_id='$teamcoach'";
    $upd .= " WHERE vpl_id=$aweb_id";
    $cmd = new SQLCommand($upd, $conn, true);

    ReturnOKMessage("Verplaatsing $aweb_id is gewijzigd");
}
//---------------------------------------------------------
function ApiClientToevoegen( $vpl_id, $ccd_id = null)
{
    global $conn;

    if (!$ccd_id) {
        //doorgestuurde data ophalen
        $contents = json_decode(file_get_contents("php://input"));
        //doorgestuurde gegevens aannemen
        $ccd_id = $contents->ccd_id;
    }

    if ( ! ControleIntegerGT0( $ccd_id ) ) ErrorMessageAndExit( "Gelieve een geldige client ID op te geven" );
    if ( ! ControleIntegerGT0( $vpl_id ) ) ErrorMessageAndExit( "Gelieve een geldige vpl_id op te geven" );

    // ophalen
    $sql = "select ccd_id from ccd WHERE ccd_id= $ccd_id";
    $dsClient = new DataSet($sql, $conn, true);

    if ( $dsClient->rows[0]["ccd_id"] > 0 )
    {
        $ccd_id = $dsClient->rows[0]["ccd_id"];

        //client toevoegen
        $ins = "INSERT INTO ccd_verplaatsing_client SET" .
            " vcc_ccd_id=$ccd_id ," .
            "vcc_vpl_id=$vpl_id";
        $cmd = new SQLCommand($ins, $conn, true);
    }
    else
    {
        ErrorMessageAndExit( "Client niet gevonden met ID $ccd_id" );
    }

    ReturnOKMessage("Client " . $ccd_id . " toegevoegd aan verplaatsing");
}

//---------------------------------------------------------
function ApiClientVerwijderen( $vpl_id, $ccd_id = null )
{
    global $conn;

    if (!$ccd_id) {
        //doorgestuurde data ophalen
        $contents = json_decode(file_get_contents("php://input"));

        //doorgestuurde data aannemen
        $ccd_id = $contents->ccd_id;
    }

    if ( ! ControleIntegerGT0( $vpl_id ) ) ErrorMessageAndExit( "Gelieve een geldig ID op te geven" );
    if ( ! ControleIntegerGT0( $ccd_id ) ) ErrorMessageAndExit( "Gelieve een geldige ccd_id op te geven" );

    //ccd_id ophalen
    $sql = "select vcc_id from ccd_verplaatsing_client WHERE vcc_vpl_id=$vpl_id AND vcc_vpl_id=$vpl_id";
    $dsContact = new DataSet($sql, $conn, true);

    if ( $dsContact->rows[0]["vcc_id"] > 0 )
    {
        $vcc_id = $dsContact->rows[0]["vcc_id"];

        //client verwijderen
        $del = "DELETE FROM ccd_verplaatsing_client WHERE vcc_id=$vcc_id";
        $cmd = new SQLCommand($del, $conn, true);

        //client verwijderen
        $del = "DELETE FROM ccd_verplaatsing WHERE vpl_id=$vpl_id";
        $cmd = new SQLCommand($del, $conn, true);
    }
    else
    {
        ErrorMessageAndExit( "Client niet gevonden met ID $ccd_id" );
    }

    ReturnOKMessage("Client $ccd_id is verwijderd uit verplaatsing");
}

//---------------------------------------------------------

function ApiBegeleiderToevoegen( $vpl_id)
{
    global $conn;

    //doorgestuurde data ophalen
    $contents = json_decode( file_get_contents("php://input") );

    //doorgestuurde gegevens aannemen
    $med_id = $contents->med_id;

    if ( ! ControleIntegerGT0( $med_id ) ) ErrorMessageAndExit( "Gelieve een geldige begeleider ID op te geven" );
    if ( ! ControleIntegerGT0( $vpl_id ) ) ErrorMessageAndExit( "Gelieve een geldige vpl_id op te geven" );

    // ophalen
    $sql = "select med_id from medewerkers WHERE med_id= $med_id";
    $dsClient = new DataSet($sql, $conn, true);

    if ( $dsClient->rows[0]["med_id"] > 0 )
    {
        $med_id = $dsClient->rows[0]["med_id"];

        //begeleider toevoegen
        $ins = "INSERT INTO ccd_verplaatsing SET" .
            " vcc_ccd_id=$med_id ," .
            "vcc_vpl_id=$vpl_id";
        $cmd = new SQLCommand($ins, $conn, true);
    }
    else
    {
        ErrorMessageAndExit( "Begeleider niet gevonden met ID $med_id" );
    }

    ReturnOKMessage("Begeleider " . $med_id . " toegevoegd aan verplaatsing");
}

//---------------------------------------------------------

function ApiBegeleiderVerwijderen( $vpl_id )
{
    global $conn;

    //doorgestuurde data ophalen
    $contents = json_decode( file_get_contents("php://input") );

    //doorgestuurde data aannemen
    $med_id = $contents->med_id;

    if ( ! ControleIntegerGT0( $vpl_id ) ) ErrorMessageAndExit( "Gelieve een geldig ID op te geven" );
    if ( ! ControleIntegerGT0( $med_id ) ) ErrorMessageAndExit( "Gelieve een geldige med_id op te geven" );

    //ccd_id ophalen
    $sql = "select vpl_id from ccd_verplaatsing WHERE vpl_id=$vpl_id AND vpl_med_id=$med_id";
    $dsContact = new DataSet($sql, $conn, true);

    if ( $dsContact->rows[0]["vcc_id"] > 0 )
    {
        $vpl_id = $dsContact->rows[0]["vcc_id"];

        //client verwijderen
        $del = "DELETE FROM ccd_verplaatsing WHERE vpl_id=$vpl_id";
        $cmd = new SQLCommand($del, $conn, true);
    }
    else
    {
        ErrorMessageAndExit( "Begeleider niet gevonden met ID $med_id" );
    }

    ReturnOKMessage("Begeleider $med_id is verwijderd uit verplaatsing");
}
