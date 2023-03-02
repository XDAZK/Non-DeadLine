<?php
    $strSQL = "INSERT INTO entity (ID,NAME,PRICE) VALUES ('3','DOAN','1220') ";
    mysql_query($strSQL);
?>

<?php
    $strSQL = "SELECT * FROM entity";
    $result = mysqli($strSQL);


    // Check connection

    if ($conn->connect_error) 
    {
     die("Connection failed: " . $conn->connect_error);
    }
    else
    {
        echo "conection successfull";
        mysqli_close($conn);
    }
?>