<?php
require_once "lib/bootstrap.php";
setlocale(LC_CTYPE, 'nl_BE.utf8');

function ApiGetCategories( $id = null)
{
    global $conn;

    $fields = array();
    $fields[] = "typ_id as id";
    $fields[] = "typ_naam as naam";

    $sql = "select  DISTINCT " . implode(",", $fields ) . " from types";
    if ( $id > 0 ) $sql .= " WHERE med_id = $id " ;

    $ds = new DataSet($sql, $conn, true);

    foreach( $ds->rows as $key => $row )
    {
        $ds->rows[$key]['id'] = COutputText( $row['id'] );
        $ds->rows[$key]['naam'] = COutputText( $row['naam'] );
    }

    ReturnResults($ds->rows);
}
