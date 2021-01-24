// Callback?

// La ham duoc truyen qua doi so khi goi ham khac


function myFunction(param) {
    if(typeof param == 'function') {
        param('Hoc lap trinh')
    }
}

function myCallback(value){
    console.log('Value:',value);
}

myFunction(myCallback);

