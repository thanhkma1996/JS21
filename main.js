// Return in js

function cong(a,b) {
    return a + b;
}

console.log(cong(4,5));

// Ddijnh nghia ham trong ham

function showMessage() {
    function showMessage2(){
        console.log('messgae 2')
    }

    showMessage2()
}

showMessage();

/**
 *  các loại function
 *          1.Declaration function
 *          2. Expression function
 *          3. Arrow function
 */

// *          1.Declaration function

    var myObject = {
        myfunction: function () {
            
        }
    }

/**
 *  Polyfill 
 */