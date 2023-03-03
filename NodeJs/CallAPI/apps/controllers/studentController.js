var express = require("express");
var router = express.Router();
var Student = require("./../models/student");

var studentList = new Array();
for(var i = 0; i < 5; i++){
    var student = new Student();
    student.Id = i;
    student.Name = "Name " + i;
    student.Faculty = "Faculty " + i;
    studentList.push(student);
}

router.get("/", function(req,res){
    res.render("student/index.ejs");
});

router.get("/getAllStudents", function(req,res){
    res.json(studentList);
});

router.get("/findStudent/:Id", function(req,res){
    var findStudent = studentList.find(studentList => studentList.Id === parseInt(req.params.Id))
    if(!findStudent) res.status(404).json("Id không tồn tại!")
    res.json(findStudent);
});

router.post("/addStudent", function(req,res){
    var addStudent = new Student();
    student.Id = req.body.Id;
    student.Name = req.body.Name;
    student.Faculty = req.body.Faculty;
    // cách 2
    // var addStudent = {
    //     Id : req.body.Id,
    //     Name : req.body.Name,
    //     Faculty : req.body.Faculty,
    // }
    studentList.push(addStudent);
    res.send(JSON.stringify({
        success : true,
        notice :  "Đã thêm thành công",
        data : studentList
    }));
});

router.put("/editStudent/:Id", function(req,res){
    var findStudent = studentList.find(studentList => studentList.Id === parseInt(req.params.Id))
    console.log(findStudent);
    var data = req.body;
    findStudent.Name = req.body.Name;
    findStudent.Faculty = req.body.Faculty;
    res.send(JSON.stringify({
        success : true,
        notice :  "Đã sửa thành công",
        data : studentList
    }));
    
});

router.delete('/deleteStudent/:Id', (req, res) => {
    var findStudent = studentList.find(studentList => studentList.Id === parseInt(req.params.Id))
    let index = studentList.indexOf(findStudent);
    studentList.splice(index,1);
    res.send(JSON.stringify({
        success : true,
        notice: "Đã xóa thành công",
        data : studentList
    }));
});

module.exports = router;