<?php
    $connection = mysqli_connect('localhost','root','','testdb');

    
    if ($connection->connect_error) 
    {
     die("Connection failed: " . $connection->connect_error);
    }
    else
    {
        echo "conection successfull";
        mysqli_close($connection);
    }
?>