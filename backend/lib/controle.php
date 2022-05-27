<?php
function ControleIntegerGT0( $int )
{
    $int = intval($int);
    if ( is_integer($int) AND $int > 0 ) return true;
    else     return false;
}

function ControleDatum( $datum )
{
    list($year, $month, $day) = explode("-", $datum); //datum
    if ( ! (checkdate($month, $day, $year)) ) return false;

    if ($datum > date("Y-m-d")) return false;

    return true;
}

function ControleTime( $time )
{
    $parts = explode(":", $time);
    $uur = intval($parts[0]);
    $min = intval($parts[1]);

    if ( ($uur >= 0 AND $uur <= 24) AND  ($min >= 0 AND $min <= 59) ) return true;

    return false;
}

function ControleVerplaatsing($aweb_id, $medewerker, $datum, $tea_id, $vervoermiddel, $km, $ww_inbegr, $km_zonder, $kost_km, $kost_ov, $kost_pa, $kost_tot, $client_ids, $duur, $datum_goed, $teamcoach, $mode ) //controle verplichte velden
{
    global $conn;

    if ( ! ControleDatum( $datum ) ) ErrorMessageAndExit( "Datum $datum is ongeldig" ); //vpl_datum
    if ( ! ControleDatum( $datum_goed ) ) ErrorMessageAndExit( "Datum goedkeuring $datum_goed is ongeldig" ); //vpl_datum_goedkeuring



    if ( ! ControleTime( $duur ) ) ErrorMessageAndExit( "Duur $duur is ongeldig " ); //vpl_duur

    if ( ! ($aweb_id > 0) ) ErrorMessageAndExit( "Verplaatsing ID ontbreekt " ); //vpl_id
    if ( ! ($medewerker > 0) ) ErrorMessageAndExit( "Medewerker id ontbreekt " ); //vpl_med_id
    if ( ! ($vervoermiddel > 0) ) ErrorMessageAndExit( "Vervoersmiddel id ontbreekt " ); //vpl_vvm_id
    if ( ! ($client_ids > 0) ) ErrorMessageAndExit( "Client id ontbreekt " ); //client_id
    if ( ! ($teamcoach > 0) ) ErrorMessageAndExit( "Teamcoach id ontbreekt " ); //teamcoach
    if ( ! ($tea_id > 0) ) ErrorMessageAndExit( "Team id ontbreekt " ); //tea_id

    if ( $ww_inbegr <> 1 AND $ww_inbegr <> 0 ) ErrorMessageAndExit( "woonwerkverkeer moet 0 of 1 zijn " ); //ww_inbegr

    $aantal_verplaatsingen = TelVerplaatsingen( $aweb_id );

    //bij creatie mag de activiteit nog niet bestaan, en ook het contact niet
    if ( $mode == "insert" AND $aantal_verplaatsingen > 0 )
    {
        $msg = "De verplaatsing met ID $aweb_id bestaat al. Creatie is niet mogelijk, update eventueel wel.";
        ErrorMessageAndExit( $msg );
    }

    //bij update moet de verplaatsing
    if ( $mode == "update" AND $aantal_verplaatsingen == 0 )
    {
        $msg = "De verplaatsing met ID $aweb_id bestaat niet. Update is niet mogelijk, creatie eventueel wel.";
        ErrorMessageAndExit( $msg );
    }
}