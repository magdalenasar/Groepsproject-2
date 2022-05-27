<?php
function Bootstrap_Form_Fields( $field_array )
{
    $form = "";

    foreach($field_array as $label => $dbfield_extended)
    {
        $parts = explode("|", $dbfield_extended);
        $dbfield = $parts[0];
        $ui_type = "text";
        if ( isset($parts[1]) ) $ui_type = $parts[1] ;

        $form .= '
        <div class="form-group">
        <label class="control-label col-sm-3" for=' . $dbfield . '>' . $label . '</label>
        <div class="col-sm-8">
        <input type="' . $ui_type . '" class="form-control" id="' . $dbfield . '" 
        name="' . $dbfield . '">
        </div>
        </div>';
    }

    return $form;
}

function BT_AddButton( $caption, $id, $short_class = "primary" )
{
    return '<button class="btn btn-' . $short_class .
            '" id="' . $id . '">' . $caption . '</button>';
}