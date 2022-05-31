<?php
//toegang tot API controleren
require_once "lib/access_control.php";

require_once "lib/database_functions.php";
require_once "lib/controle.php";
require_once "lib/messages.php";
require_once "lib/strings.php";

require_once "entities/activities.php";
require_once "entities/users.php";
require_once "entities/favorites.php";
require_once "entities/categories.php";
require_once "entities/mail.php";

//routing als laatste houden! alle functies die daarin opgeroepen worden moeten gekend zijn
require_once "routing/routing.php";