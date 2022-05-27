<?php
require_once "lib/bootstrap.php";
setlocale(LC_CTYPE, 'nl_BE.utf8');

function ApiGetCategories()
{
    global $conn;

    $fields = array();
    $fields[] = "typ_id as id";
    $fields[] = "typ_naam as naam";

    $sql = "select  DISTINCT " . implode(",", $fields ) . " from types";

    $dsCategory = new DataSet($sql, $conn, true);

    foreach( $dsCategory->rows as $row )
    {
        $row['id'] = COutputText( $row['id'] );
        $row['naam'] = COutputText( $row['naam'] );
    }

    ReturnResults($dsCategory->rows);
}
