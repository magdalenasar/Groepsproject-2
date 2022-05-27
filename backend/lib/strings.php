<?php
function DBText2Textarea ( $dbtext )
{
    $retval = str_replace("<br>", chr(13) . chr(10), $dbtext );
    $retval = html_entity_decode($retval, ENT_QUOTES) ;
    return $retval;
}

function Textarea2DBText ( $text )
{
    $retval = $text;
    $retval = strip_tags ( $text );
    $retval = htmlentities( $retval, ENT_QUOTES );
    $retval = str_replace( chr(13) . chr(10), "<br>", $retval);
    return $retval;
}

function RandomString( $length )
{
    $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $randstring = '';
    for ($i = 0; $i < $length ; $i++) {
        $randstring .= $characters[rand(0, strlen($characters))];
    }
    return $randstring;
}

function CInputText( $text )
{
    return htmlentities( iconv("UTF-8", "ISO-8859-1//TRANSLIT", $text ), ENT_QUOTES );
}

function COutputText( $text )
{
    return html_entity_decode( iconv( "ISO-8859-1", 'UTF-8//IGNORE', $text ), ENT_QUOTES );
}