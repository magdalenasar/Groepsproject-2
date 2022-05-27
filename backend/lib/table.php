<?php
function MakeTableFromRows( $trows )
{
    //make table
    $out =  "<table class='table table-bordered'>";
    foreach( $trows as $key => $value)
    {
        $out .=  "<tr><td>" . $key . "</td><td>" . $value . "</td></tr>";
    }
    $out .= "</table>";

    //return table
    return $out;
}
?>