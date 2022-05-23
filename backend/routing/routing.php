<?php
$request = $_SERVER["REQUEST_URI"];
$method = $_SERVER["REQUEST_METHOD"];
$route_found = false;

$parts = explode("/", $request);
//var_dump($parts);
$route = $parts[2];
if(count($parts) > 3) $params = $parts[3];
if(count($parts) > 4) $subroute = $parts[4];

$subroute = "";

//als er een querystring opgenomen is in de subroute, deze eraf knippen
if ( $subroute > "" AND strpos($subroute, "?") !== false )
{
    $subroute_parts = explode("?", $subroute);
    $subroute = $subroute_parts[0];
}

switch( $route )
{
/*
    case "verplaatsing":        if ( $subroute == "begeleiders" )
                                        {
                                            if ( ! $params > 0 ) break;

                                            //begeleider toevoegen aan verplaatsing
                                            if ( $method == "POST" ) {  $route_found=true; ApiBegeleiderToevoegen($params);   }
                                            //begeleider verwijderen uit verplaatsing
                                            if ( $method == "DELETE" ) {  $route_found=true; ApiBegeleiderVerwijderen($params);   }
                                        }
                                        elseif ( $subroute == "clienten" )
                                        {
                                            if ( ! $params > 0 ) break;
                                            //client toevoegen aan verplaatsing
                                            if ( $method == "POST" ) {  $route_found=true; ApiClientToevoegen($params);   }
                                            //client verwijderen uit verplaatsing
                                            if ( $method == "DELETE" ) {  $route_found=true; ApiClientVerwijderen($params);   }
                                        }
                                        elseif ( $subroute == "" OR $subroute == null )
                                        {
                                                //verplaatsing wijzigen
                                                if ($method == "PUT" and $params > 0) {
                                                    $route_found = true;
                                                    ApiUpdateVerplaatsing($params);
                                                }
                                                //verplaatsing verwijderen
                                                if ($method == "DELETE" and $params > 0) {
                                                    $route_found = true;
                                                    ApiDeleteVerplaatsing($params);
                                                }
                                        }

                                        break;
*/

    case "users":          if ( $method == "GET" ) {  $route_found=true; ApiGetUsers();   }   //lijst van users
                                        break;

    case "user":            if ( $method == "GET" AND  $params > 0 ) { $route_found=true; ApiGetUsers($params); }  //details van 1 user
                            if ( $method == "PUT" AND  $params > 0 ) { $route_found=true; ApiUpdateUser($params); }  //user wijzigen
                            if ( $method == "DELETE" AND  $params > 0 ) { $route_found=true; ApiDeleteUser($params); }  //user deleten

                            if ( $subroute == "activities" )
                            {
                                if ( ! $params > 0 ) break;

                                //show activities for 1 user
                                if( $method == "GET") { $route_found=true; ApiGetUserActivities($params); }
                                // update activity for 1 user
                                if ( $method == "POST" ) {  $route_found=true; ApiAddUserActivity($params);   }
                                //delete activity for 1 user
                                if ( $method == "DELETE" ) {  $route_found=true; ApiDeleteUserActivity($params);   }
                            }
                            elseif ( $subroute == "favorites" )
                            {
                                if ( ! $params > 0 ) break;

                                //show favorites for 1 user
                                if ( $method == "GET" ) {  $route_found=true; ApiGetUserFavorites($params);   }
                                //delete user favorite
                                if ( $method == "DELETE" ) {  $route_found=true; ApiDeleteUserFavorite($params);   }
                            }

                            break;

    case "favorites":       if ( $method == "GET" ) {  $route_found=true; ApiGetFavorites(); } //lijst van favorites
                                break;

    case "categories":       if ( $method == "GET" ) {  $route_found=true; ApiGetCategories(); } //lijst van categories
        break;

    default:                    break;
}

if ( ! $route_found ) OngeldigeRoute();

function OngeldigeRoute()
{
    ErrorMessageAndExit("Ongeldige route of ongeldige parameters");
}