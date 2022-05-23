<?php
session_start();
require_once("connection.php");

class DataSet
{
    var $sql;
    var $conn;
    var $rows = array();

    function __construct( $sql, $conn, $load = false )
    {
        $this->sql = $sql ;
        $this->conn = $conn ;

        if ( $load ) $this->Load();
    }
    function Load()
    {
        $result = $this->conn->query($this->sql);
        if ($result->num_rows > 0) //werd er een geldige resultset gemaakt?
        {
            while( $row = $result->fetch_assoc() )  //rij per rij uit de resultset opvragen en afhandelen
            {
                $this->rows[] = $row;
            }
        }
    }
}

class SQLCommand
{
    var $sql;
    var $conn;
    var $result;
    var $new_id;

    function __construct( $sql, $conn, $execute = false )
    {
        $this->sql = $sql ;
        $this->conn = $conn ;

        if ( $execute ) $this->Execute();
    }
    function Execute()
    {
        $result = $this->conn->query($this->sql);
        if ( $result !== false ) //is de uitvoering van het commando gelukt?
        {
            $this->result = $result;
            $this->new_id = $this->conn->insert_id ;
        }
        else
        {
            $this->result = false;
            //echo $this->sql . ": returns false";
            //echo $this->conn->error ;
        }
    }
}
?>