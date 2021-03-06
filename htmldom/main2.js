//========================== Event listener =============================
// 1. DoM event / Event listener
// 2. JSON
// 3. Fetch
// 4. DOM location
// 5. Local Storage
// 6. Session Storage
// 7. Codeing convetion
// 8. Best Practices 
// 9. Mistakes
// 10. Performance

// 1. sử lý nhiều việc khi 1 vent xảy ra
// 2. Lắng nghe / huyer bỏ lắng nge
// DOM event
// var btnclick = document.getElementById('btn-click');

// btnclick.onclick = function() {
//     console.log('Viec 1');

//     console.log('Viec 2');


//     console.log('Viec 3');

// }

// setTimeout(function(){
//     btnclick.onclick = function(){
//     }
// },3000);


// Event listiner
    var btnclick = document.getElementById('btn-click');
    function vieccanlam(){
        console.log('viec can lam')
    }

    function vieccanlam2(){
        console.log('viec 2 can phai lam')
    }

    btnclick.addEventListener('click',vieccanlam);

    btnclick.addEventListener('click',vieccanlam2);


    setTimeout(function(){
        btnclick.removeEventListener('click',vieccanlam);
    },3000);
