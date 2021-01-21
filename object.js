/// Obejct trong js
var emaillookkey = 'emaillook';
var mykey = 'address';


var myInfor = {
    name: 'Thanh nguyen',
    age: 18,
    address: 'Ha Noi',
    [emaillookkey]:'thanh.nguyen@gdigitaloutloock',
    getName: function() {
        return this.name;
    }

}

myInfor.email = 'nguyendthanh@gmail.com';
myInfor['my-gmail'] = 'nguyendthanh@gmail.com';

// xoa 1 key value
delete myInfor.age;


console.log(myInfor);
console.log(myInfor.getName());

// trong TH function se duoc goi la phuong thuc
// casc th con lai goi la thuoc tinh

// lay thong tin tu object

// console.log(myInfor.address);
// console.log(myInfor[mykey]);


// Bai 2 Object constructor
// mo ta thieu ke cua doi tuong
function User(firstName,lastName,avatar){
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;

    this.getName = function(){
        return `${this.firstName} ${this.lastName}`
    }
}

// gia tri doi tuong
var author = new User('Son','Nguyen','avatar');
var user = new User('Thanh','Minh','Avatar');

// them thuoc tinh cho rieng doi tuong

author.title = 'Chia se dao';
user.comment = 'Bai Hoc nay hay qua';

console.log(author);
console.log(user);

console.log(author.getName());
console.log(user.getName());



