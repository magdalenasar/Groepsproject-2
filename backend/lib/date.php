<?php
function Ts2DateString( $timestamp )
{
    setlocale (LC_TIME, "Dutch");
    return strftime("%A %#d %B %Y", $timestamp);
}
function Ts2DateString_MySQL( $timestamp )
{
    setlocale (LC_TIME, "Dutch");
    return strftime("%Y-%m-%#d", $timestamp);
}
function Ts2Array( $timestamp )
{
    return getdate($timestamp);
}
function TsAdd ( $timestamp, $aantal, $eenheid )
{
    $d = Ts2Array( $timestamp );
    switch ( $eenheid )
    {
        case "d": $d[mday] += $aantal; break;
        case "w": $d[mday] += ( $aantal * 7); break;
        case "m": $d[mon] += $aantal; break;
    }
    return Array2Ts( $d );
}

function Array2Ts( $arr )
{
    return mktime( $arr[hours], $arr[minutes], $arr[seconds], $arr[mon], $arr[mday], $arr[year]);
}
function EndOfMonthTs ( $jaar, $maand )
{
    return mktime( 0,0,0, $maand + 1, 0, $jaar);
}

function strDMY2strYMD ( $strdatum, $shortyear = false )
{
    if ( strpos($strdatum,"/") > 0 ) $parts=explode("/",$strdatum);
    elseif ( strpos($strdatum,"-") > 0) $parts=explode("-",$strdatum);

    if ( $shortyear ) return $parts[2] . "-" . $parts[1] . "-" . substr($parts[0],2,2) ;
    else return $parts[2] . "-" . $parts[1] . "-" . $parts[0] ;
}

function strYMD2strDMY ( $strdatum, $shortyear = false )
{
    if ( $strdatum == "0000-00-00" || $strdatum == "") return "";
    else
    {
        if ( strpos($strdatum,"/") > 0) $parts=explode("/",$strdatum);
        elseif ( strpos($strdatum,"-") > 0) $parts=explode("-",$strdatum);

        if ( $shortyear ) return $parts[2] . "/" . $parts[1] . "/" . substr($parts[0],2,2) ;
        else return $parts[2] . "/" . $parts[1] . "/" . $parts[0] ;
    }
}

?>