<?php 
    try 
    {
        $bdd = new PDO("mysql:host=mysql-cesialternancerouen.alwaysdata.net;dbname=cesialternancerouen_mcavelie;charset=utf8", "165269_mcavelie", "dr12Vv~Bj.HN");
    }
    catch(Exception $e)
    {
        die('Erreur : '.$e->getMessage());
    }