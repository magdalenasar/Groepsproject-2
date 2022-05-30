<?php
$request = $_SERVER["REQUEST_URI"];
$method = $_SERVER["REQUEST_METHOD"];
$route_found = false;

$parts = explode("/", $request);
//var_dump($parts);
$route = $parts[4];
if(count($parts) > 4) $params = $parts[5];
if(count($parts) > 5) $subroute = $parts[6];

$subroute = "";

//als er een querystring opgenomen is in de subroute, deze eraf knippen
if ( $subroute > "" AND strpos($subroute, "?") !== false )
{
    $subroute_parts = explode("?", $subroute);
    $subroute = $subroute_parts[0];
}

switch( $route )
{
    case "users":               if ( $method == "GET" ) {  $route_found=true; ApiGetUsers();   }   //lijst van all users
                                        break;
    case "user":                if ( $method == "GET" AND  $params > 0 ) { $route_found=true; ApiGetUsers($params); }  //details van 1 user
                                if ( $method == "POST") { $route_found=true; ApiCreateUser(); }  //user aanmaken
                                if ( $method == "PUT" AND  $params > 0 ) { $route_found=true; ApiUpdateUser($params); }  //user wijzigen
                                if ( $method == "DELETE" AND  $params > 0 ) { $route_found=true; ApiDeleteUser($params); }  //user deleten
                                        break;

    case "user_activities":     //show activities for 1 user
                                if( $method == "GET" AND $params > 0) { $route_found=true; ApiGetUserActivities($params); }
                                // create activity for 1 user
                                if ( $method == "POST" AND $params > 0) {  $route_found=true; ApiCreateUserActivity($params);   }
                                // update activity for 1 user
                                if ( $method == "PUT" AND $params > 0) {  $route_found=true; ApiUpdateUserActivity($params);   }
                                //delete activity for 1 user
                                if ( $method == "DELETE" AND $params > 0) {  $route_found=true; ApiDeleteUserActivity($params);   }
                                        break;

    case "user_favorites":      //show favorites for 1 user
                                if ( $method == "GET" AND $params > 0) {  $route_found=true; ApiGetFavorites($params);   }
                                //create user favorite
                                if ( $method == "POST" AND $params > 0) {  $route_found=true; ApiCreateFavorite($params);   }
                                //delete user favorite
                                if ( $method == "DELETE" AND $params > 0) {  $route_found=true; ApiDeleteFavorite($params);   }
                                        break;

    case "activities":          if ( $method == "GET" ) {  $route_found=true; ApiGetActivities();   }   //lijst van alle activities
                                if ( $method == "POST") { $route_found=true; ApiCreateActivity(); } //maak activity aan
                                        break;

    case "activity":            if ( $method == "GET" AND  $params > 0 ) { $route_found=true; ApiGetActivities($params); } //detail 1 activity
                                        break;

    case "favorites":           if ( $method == "GET" ) {  $route_found=true; ApiGetFavorites(); } //lijst van alle favorites
                                        break;

    case "categories":          if ( $method == "GET" ) {  $route_found=true; ApiGetCategories(); } //lijst van alle categories
                                        break;

    default:                            break;
}

if ( ! $route_found ) OngeldigeRoute();

function OngeldigeRoute()
{
    ErrorMessageAndExit("Ongeldige route of ongeldige parameters");
}