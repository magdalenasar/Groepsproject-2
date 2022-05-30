<?php
//Allow access from outside
header("Access-Control-Allow-Origin: *");

//Allow GET, POST, PUT, DELETE, OPTIONS http methods
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");

//Allow some types of headers
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");

//Set response content type and character set
header("Content-Type: application/json; charset=UTF-8");

/*
//Basic Authentication controle
if ( $_SERVER['PHP_AUTH_USER'] !== "root" OR $_SERVER['PHP_AUTH_PW'] !== "" )
{
    //als er geen juiste credentials doorgegeven worden, afbreken met code 401 Unauthorized
    header('WWW-Authenticate: Basic realm="Provide your username and password for the API"');
    header('HTTP/1.0 401 Unauthorized');
    exit;
}
*/