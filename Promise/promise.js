// Promise 
    // + Sync Đồng bộ
    // + Async bất đồng bộ

// Sync đồng bộ
// + Thằng nào viết trước thì chạy trước 

// những thằng sử dụng trong bất đồng bộ setTimout , setInterval , fetch , XMLHttpRequest , đọc file
/*
    Request animation frame 
    đây là những thao tác bất đồng bộ
    Trong thao tascf bất đồng bộ sẽ sử dụng callback
*/

//Callback hell
// Pyramid of doom

// Ly thuyet va cach hoat dong
// 03 trạng thái của Promise:

// 1. Pendding (đang chờ) xảy ra khi chưa gọi đến resolve hoặc reject
// 2. Fulfilled (hoàn thành) xảy ra khi gọi resolve
// 3. Reject (thất bại)  xay ra khi gọi reject

// Promise được sinh ra để giải quyết vấn đề cho thao tác bất đồng bộ (async)
// trước khi có Promise ta sẽ dùng CallBack, nhưng callBack sẽ xảy ra tình trạng callBack Hell (code khó nhìn, khó hiểu)
// Promise dc sinh ra để khắc phục tình trạng callBack Hell giúp code sẽ đọc, dễ hiểu hơn.


var promise = new Promise(
    // resolve - thah cong , reject that bai
    // Executor
    function (resolve,reject) {
        resolve([ 
            {
                id: ' 1',
                name: "'Javscript"
            }
        ]);
        // reject(123);
    }
);

// khi promise nếu resilve được gọi thì call back của then sẽ được gọi 
// Khi promise nếu reject được gọi thì callback của .catch sẽ được gọi

promise

    .then(function name(course) {
       return 1;
    })

    .then(function name(course) {
        console.log(course);
    })
   
    .catch(function name(error) {
        console.log(error);
    })

    .finally(function name() {
        console.log("Done");
    })

// Example promise methods
// Promise.resolve , promise.reject , promise.all

// cach viet 1
    // var promise_test = new Promise(
    //     function (resolve,reject) {
    //         // resolve("Thanh cong roi")
    //         reject("connect fail");
    //     }
    // );
// cach viet 2
    var promise_test = Promise.resolve("Connect thanh cong");
    var promise_test = Promise.reject("Connect that bai");

    promise_test
        .then(function (result_done) {
            console.log("Ket qua: ",result_done);
        })

        .catch(function (error) {
            console.log("loi roi nhe: ",error);
        })


// Promise all

    var promise_test1 = new Promise(
        function (resolve) {
            setTimeout(function() {
                 resolve([1,2]);
            },2000)
        }
    )

    var promise_test2 = new Promise(
        function (resolve) {
            setTimeout(function() {
                 resolve([3,4]);
            },6000)
        }
    )

    Promise.all([promise_test1,promise_test2])
        .then(function([result1,result2]){
            console.log(result1.concat(result2));
        })