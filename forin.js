// vong lap for/in
var myInfor = {
    name: 'Thanh nguyen',
    age : 18,
    address: 'DInh thon My dinh HN'
}

for(var key in myInfor) {
    console.log(key);
    console.log(myInfor[key]);
}
// for/in in array

var language = [
    'Javascript',
    'PHP',
    'Python'
]

for(var test in language){
    console.log(test);
    console.log(language[test]);

}

// For of lay 1 phan tu cua mang

for (var value of language){
    console.log(value);
}