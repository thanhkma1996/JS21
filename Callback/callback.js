// Callback?

// La ham duoc truyen qua doi so khi goi ham khac


// function myFunction(param) {
//     if(typeof param == 'function') {
//         param('Hoc lap trinh')
//     }
// }

// function myCallback(value){
//     console.log('Value:',value);
// }

// myFunction(myCallback);

// Call back Phan 2
var courses = [
    'PHP',
    'Javascript',
    'Nodejs'
]
// Cach hoat dong cua callback
Array.prototype.map2 = function(callback){ // Dinh nghia function map2 su dung prototype
    var output= [];
    var arrayLength = this.length;
    for(i=0 ; i < arrayLength ; i++) {
        var result = callback(this[i],i);
        // console.log('result:',result);
        output.push(result);
    }

    return output;
}

var htmls = courses.map2(function(course){
    return `<h2>${course}</h2>`
    // return course;
});


// var htmls = courses.map(function(course){
//     return `<h2>${course}</h2>`
// });

console.log(htmls.join(''));

//======================== MAP =============================
var courses=["node js", "PHP", "Java core", "HTML"];

//map method 

Array.prototype.map3=function(callBack){
    let arr=[];
    for (let i=0; i<this.length; i++){
        arr.push(callBack(this[i], i));
    }
    return arr;
}
const ht=courses.map3( function(value, index){
    return value;
})
console.log("(MAP) Aray's Element: ",ht);



//================ forEach ============================

Array.prototype.forEach2 = function (callBack){
    for (let i=0; i<this.length; i++){
        callBack(this[i], i);
    }
}
console.log("forEach output all element and index");
courses.forEach2( function(element, index){
    console.log(element, index);
})




//======================= reduce2 ================================
var coursePrice = [10, 9, 8, 7,6,5,4,3,2,1]

Array.prototype.reduce2=function(callBack, first_Number){
    let len =this.length;
    for (let i=0; i<len; i++){
        first_Number=callBack(first_Number, this[i], i, this); // <=> first_Number = first_Number+ this[i];
    }
    return first_Number;
}
const SUM = coursePrice.reduce2( function(start_value, element, index, all){
    return start_value+element;
}, 0)

console.log("Sum by reduce: ",SUM);

// ======================== EVERY & FIND & FILLTER ===================================
var Dog =[
    {
        name: "Đông",
        age: 19,
        gender: "male"
    },
    {
        name: "Phương",
        age: 14,
        gender: "female"
    },
    {
        name: "Phòng", 
        age: 20,
        gender: "male"
    },
    {
        name: "Quyết",
        age: 17,
        gender: "male"
    },
    {
        name: "Hường",
        age: 19,
        gender: "female"
    }
]
// //every2: trả về true nếu tất cả cùng thỏa mãn 1 điều kiện: đã test thấy oke nhưng cần người test lại(chưa tự tin)
Array.prototype.every2 =function (callBack){
    let len =this.length; 
    for (let i=0; i< len; i++){
        if (!callBack(this[i], i)) return false;
    }
    return true;
}
var valueOfCheck =  Dog.every2( (Element)=> Element.age===19);
console.log("all member is 19? ", valueOfCheck);



// //some2: trả về true nếu có ít nhất 1 phần tử thỏa mãn điều kiện: đã test nhưng k biết có đúng k
Array.prototype.some2=function(callBack){
    let len = this.length;
    for (let i=0; i<len; i++){
        if (callBack(this[i], i)) return true ;
    }
    return false;
}
const checkSome= Dog.some2( function( element, index ) {
    return element.age===14;
})
console.log("the Element satisfies the condition: ", checkSome);



// find2: trả về phần tử đầu tiên thỏa mãn điều kiện, các phần tử phía sau cho dù thỏa mãn nhưng sẽ bị bỏ qua: done, đã oke
Array.prototype.find2=function (callBack){
    let len=this.length;
    for (let i=0; i< len ; i++){
        if (callBack(this[i], i)) {
            return this[i];
        }    
    }
}
var check = Dog.find2( function(item, index){
    return item.age===14;
})
console.log("Find: ", check);



//fillter: trả về tất cả các phần tử thỏa mãn điều kiện

Array.prototype.fillter2=function(callBack){
    let lenArray=this.length;
    let arrayTemp=[];
    for (let i=0; i<lenArray; i++){
        if(callBack(this[i], i))
        arrayTemp.push(this[i]);
    }
    // return arrayTemp;
    return arrayTemp.length>0? arrayTemp: 'undefine';
}
var listFill = Dog.fillter2( function (element){
    return element.age<19;
})
console.log("List fillter: " , listFill);