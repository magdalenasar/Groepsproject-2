<?php

//---------------------------------------------------------
function TelVerplaatsingen( $aweb_id )
{
    global $conn;

    $sql = "select count(*) as aantal from ccd_verplaatsing where vpl_id=$aweb_id" ;
    $dsVpl = new DataSet($sql, $conn, true);
    return $dsVpl->rows[0]["aantal"] ;
}

//---------------------------------------------------------
function TelContacten( $aweb_id )
{
    global $conn;

    $sql = "select count(*) as aantal from ccd_contact where con_aweb_id=$aweb_id" ;
    $dsCon = new DataSet($sql, $conn, true);
    return $dsCon->rows[0]["aantal"] ;
}

//---------------------------------------------------------
function GetNextDagboekVolgnummer( $dgb_id, $jaar )
{
    $dgb_volgnr = 1;

    $sql = " select max(kas_dgb_volgnr) as laatste from ccd_kas where kas_dgb_id=$dgb_id " .
                " AND YEAR(kas_datum)=" . $jaar;
    $rs=getrs($sql);

    if ( $rs->getNumberOfRows() > 0 )
    {
        $row = $rs->next();
        if ($row[laatste] > 0)  $dgb_volgnr = $row["laatste"] + 1;
    }

    return $dgb_volgnr;
}

//-----------------------------------------------------------------
// id en omschrijving van een activiteit ophalen ahv aweb_id
//-----------------------------------------------------------------
function GetVerplaatsingDetails( $aweb_id )
{
    $vpl_id = 0;
    $omschr = "Deelname verplaatsing";

    $sql = " select * from cdd_verplaatsing where vpl_id=$aweb_id";
    $rs=getrs($sql);

    if ( $rs->getNumberOfRows() > 0 )
    {
        $row = $rs->next();
        //$omschr = "Deelname verplaatsing op " . strYMD2strDMY($row["act_date"]) . " - " . $row["act_titel"];
        $omschr = strYMD2strDMY($row["vpl_datum"]) . " - " . $row["vpl_omschr"];
        $vpl_id = $row["vpl_id"];
    }

    return array($vpl_id, $omschr);
}
