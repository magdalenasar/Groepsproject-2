<?php
function ErrorMessageAndExit( $msg )
{
    $results[] = array("FOUT" => $msg );
    print json_encode( $results, JSON_PARTIAL_OUTPUT_ON_ERROR );
    exit;
}

function ReturnOKMessage( $msg )
{
    $results[] = array("OK" => $msg );
    print json_encode( $results, JSON_PARTIAL_OUTPUT_ON_ERROR );
}

function ReturnResults( $results )
{
    print iconv( "ISO-8859-1", 'UTF-8//IGNORE', json_encode( $results, JSON_PARTIAL_OUTPUT_ON_ERROR ));
}