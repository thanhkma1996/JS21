// Json laf mootj ddijnh dajng duwx lieeuj ( chuooxi ) 
// Javscript Obiject Notation
// 3. JSON : Number , Boolean  Null , Array
// Object

// Parse : Tu JSON -> Javascript
var a = '1';

console.log(JSON.parse(a));

 // Stringify chuyen du lieu cua js sang json

 // Cài đặt JSON server : FAKE API server / Mock API
//  https://github.com/typicode/json-server

var couserAPI = "http://localhost:3000/posts";

fetch(couserAPI)
    .then(function(response){
        return response.json();
    })

    .then(function(post){
        console.log(post);
    })

// Sử dụng POSTMAN làm việc với REST API
// Fetch :
    // + CRUD 
    //     - Create: Tạo mới _> POST
    //     - Read: Lấy dữ liệu -> GET
    //     - Update: Chỉnh sửa -> PUT/PATCH
    //     - Delete: Xóa -> DELETE

// POSTMAN
