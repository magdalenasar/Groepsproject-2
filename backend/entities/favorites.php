<?php
require_once "lib/bootstrap.php";
setlocale(LC_CTYPE, 'nl_BE.utf8');

function ApiGetFavorites( $id = null)
{
    global $conn;

    $fields = array();
    $fields[] = "usr_act_id";
    $fields[] = "act_naam as naam";
    $fields[] = "usr_act_favorite as favorite";

    $sql = "select  DISTINCT " . implode(",", $fields ) . " from usr_act ua" .
                " INNER JOIN activities a ON ua.act_id=a.act_id " .
                " INNER JOIN users ON usr_id=usr_id";
    if ( $id > 0 ) $sql .= " WHERE users.usr_id = $id " ;

    $ds = new DataSet($sql, $conn, true);

    //Ang�lique Barbier en zo
    foreach( $ds->rows as $key => $row )
    {
        $ds->rows[$key]['naam'] = COutputText( $row['naam'] );
        $ds->rows[$key]['voornaam'] = COutputText( $row['voornaam'] );
    }

    ReturnResults($ds->rows);
}