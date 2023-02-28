<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="author" content="DAZK">
    <link rel="stylesheet" href="/LAB2/site.css">
    <title>OOP PHP</title>
</head>

<body>
    <div id="wrapper">
        <?php //IDEA:
        require_once("userclass.php");
        $XuanDoan = new User('Xuan Doan', 'kanpitest@gmail.com');
        echo "<h2>---User INFO---</h2>";
        echo "UserID: " . $XuanDoan->GetUserID() . "<br/>";
        echo "UserName: " . $XuanDoan->GetUserName() . "<br/>";

        $XuanDoanMore = new User("Phung Xuan Doan", "youremail@gmail.com");
        echo "<h2>---More user---</h2>";
        echo "UserID: " . $XuanDoanMore->GetUserID() . "<br/>";
        echo "UserName: " . $XuanDoanMore->GetUserName() . "<br/>";
        include("employeeclass.php");
        $person_a = new Person("Tran Cong Minh", 1234);
        echo "<h2> MORE OOP PHP </h2>";
        echo "Person Name: " . $person_a->GetName() . "</br>";
        echo "Person ID: " . $person_a->GetNationalID() . "</br>";
        echo "<h2>Employee</h2>";
        $employee_a = new Employee("Phung Xuan Doan", 5678, "Security");
        echo "Employee ID: " . $employee_a->GetEmployeeID() . "</br>";
        echo "Employee Name: " . $employee_a->GetName() . "</br>";
        echo "Employee Department: " . $employee_a->GetDepartment() . "</br>";
        echo "<h2>More Employee</h2>";
        $employee_a = new Employee("Huynh Hai Dang", 112233, "Offical");
        echo "Employee ID: " . $employee_a->GetEmployeeID() . "</br>";
        echo "Employee Name: " . $employee_a->GetName() . "</br>";
        echo "Employee Department: " . $employee_a->GetDepartment() . "</br>";
        ?>
    </div>
    <footer>
        &#169; 2023 - Dazk Phung - Hardtech technology security (HUTECH)
    </footer>

</body>

</html>