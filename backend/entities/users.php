<?php
require_once "lib/bootstrap.php";
setlocale(LC_CTYPE, 'nl_BE.utf8');

//---------------------------------------------------------
function ApiGetUsers($id = null)
{
    global $conn;
    $results = array();

    //alle users
    $sql = "select usr_id, usr_name as name, usr_surname as surname, usr_email as email, usr_password as pass from user";
    if ($id) {
        if (! is_numeric($id) ) $results = array( "FOUT" => "Ongeldig id opgegeven" );
        $sql .= " where usr_id=$id";
    }
    $dsUsers = new DataSet($sql, $conn, true);

    foreach ( $dsUsers->rows as $row )
    {
        $row['name'] = COutputText( $row['name'] );
        $row['surname'] = COutputText( $row['surname'] );
        $row['email'] = COutputText( $row['email'] );
        $row['pass'] = COutputText( $row['pass'] );

        $results[] = $row;
    }

    ReturnResults( $results );
}

//---------------------------------------------------------
function ApiCreateUser()
{
    global $conn;

    //doorgestuurde data ophalen
    $contents = json_decode( file_get_contents("php://input") );
    $name = $contents->name;
    $surname = $contents->surname;
    $email = $contents->email;
    $password = $contents->password;

    //insert statement maken
    $ins = " INSERT INTO user SET" .
            "usr_name='$name', " .
            "usr_surname='$surname', " .
            "usr_email='$email', " .
            "usr_password='$password'";

    $cmd = new SQLCommand($ins, $conn, true);

    ReturnOKMessage("New user created");
}

//---------------------------------------------------------
function ApiUpdateUser( $id )
{
    global $conn;

    //doorgestuurde data ophalen
    $contents = json_decode( file_get_contents("php://input") );
    $name = $contents->name;
    $surname = $contents->surname;
    $email = $contents->email;
    $password = $contents->password;

    //naam van de user ophalen
    $sql = "select usr_id, usr_name, usr_surname from user WHERE usr_id=$id";
    $dsUsers = new DataSet($sql, $conn, true);

    if ( count($dsUsers) == 0 ) ErrorMessageAndExit( "Didnt find user with id '$id'. " );

    //update statement maken
    $upd = " update user SET usr_name='$name', usr_surname='$surname', usr_email='$email', usr_password='$password' " .
        " where usr_id=$id";

    $cmd = new SQLCommand($upd, $conn, true);

    ReturnOKMessage("Data of user $id was send for modification");
}

//------------------------------------------------------------------
function ApiDeleteUser( $id )
{
    global $conn;

    //naam van de user ophalen
    $sql = "select usr_id, usr_name, usr_surname from user WHERE usr_id=$id";
    $dsUsers = new DataSet($sql, $conn, true);

    if ( count($dsUsers) == 0 ) ErrorMessageAndExit( "Didnt find user with id '$id'. " );

    //delete statement maken
    $del = " delete from user WHERE usr_id='$id'";
    $cmd = new SQLCommand($del, $conn, true);

    ReturnOKMessage("Data of user $id was deleted");
}