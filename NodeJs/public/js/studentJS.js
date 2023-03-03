// function getAllStudents(){
//     fetch("http://localhost:3000/student/getAllStudents")
//         .then(function(res){
//             return res.json();
//         })
//         .then(function(data){
//             var htmls = "";
//             htmls += "<li>"
//             htmls += "<h3>" + data. + "</h3>"
//             htmls += "<h3>" + + "</h3>"
//             htmls += "<h3>" + + "</h3>"
//             htmls += "</li>"

//         })
//         .catch(function(error)  { console.log("Lỗi: ", error);})
// }

// getAllStudents(renderStudent);
// function getAllStudents(callBack){
//     fetch("http://localhost:3000/student/getAllStudents")
//         .then(function(res){
//             return res.json();
//         })
//         .then(callBack)
//         .catch(function(error)  { console.log("Lỗi: ", error);})
// }

// function renderStudent(datas){
//     var listStudents = document.querySelector('#list-students');
//     var htmls = data.map(function(data){
//         return `
//             <li>
//                 <h3>${data.Id}</h3>
//                 <h3>${data.Name}</h3>
//                 <h3>${data.Faculty}</h3>
//             </li>`;
//     })
//     for (i in datas) {
//         let motuser = datas[i];
//         str +=  "<p>"+  motuser. + " " + motuser.ten  +"</p>";
//     }
//     listStudents.innerHTML = htmls;
// }