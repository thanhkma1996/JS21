// Cac noi dung can hoc trong javascript ES6
// 1. LET , CONST
// 2. Template literals 
// 3. Multi-line string 
// 4. Arrow function
// 5. Classes
// 6. Default parameter values
// 7. Destructuring
// 8. Rest parameters
// 9. Spread
// 10. Enhanced object literals 
// 11. Tagged template literal 
// 12 Modules

// Bai 1 : Let and const
// phaan bieewtj val / let , const scope,hosting

// hosting 

// Khi code thuần thì dùng var
// Khi dùng babel thì dùng const, let
// .. Khi định nghĩa biến và không gán lại biến đó : const 
// Khi cần gán lại giá trị cho biến thì dùng : let

// ví dụ

// let success = false 
// if () {
//     success = true
// }

// Bài 2 : arrow function 

//CACH VIET
const logger = (log) => {
    console.log(log)
};

logger("Test arrow function");


const sum = (a,b) => a + b;
console.log(sum(6,7));


const course = {
    name: " Javascript co ban",
    getName: function () {
        return this;
    }
};

console.log(course.getName());

// chu y arrow function k the su dung khi tao 1 constructor trong js

const gender = function(name,price) {
    this.name = name;
    this.price = price;
};

// Bai 3 Multiline string
const nameTest = "thanh";
const description = `Counse name: ${nameTest} \\ template string noi suy voi : \${}`;

console.log(description);

// Bài 4 classes trong JS ES6
// Khoi tao 1 constructor bang casch su dung classes
class Couser {
    constructor(name1,price1){
        this.name1 = name1;
        this.price1 = price1;
    }

    getName1() {
        return this.name1;
    }

}

const phpCourse = new  Couser('Thanh','12000');

console.log(phpCourse);

// Bài 5 Enhanced object literals
// 1. định nghĩa key: value cho object 
    var name = "Javascript";
    var price = 12400;
    
    var course_tesst = {
        name,
        price,
        // 2. định nghĩa method cho object
        getName(){
            return name;
        }
    }

    console.log(course_tesst.getName());



//  3. định nghĩa key cho object dưới dạng biến
var fieldName = "new-name";
var fieldPrice = "price";

const course_test_ad = {
    [fieldName] : "test-thanh",
    [fieldPrice] : 12000
}

console.log(course_test_ad);

// 4.Default parameter 
function logger_test(log,type='log'){
    console[type](log);
}

logger_test('Messge...','error');

// 5.Destructuring 
// rest oparemeters laays ra nhuwnxg phaafn cofn lai trong mang

var array = ['Thanh','Ha','2021']

var [a,b, ...rest] = array;

console.log(a);
console.log(rest);

/// Optional chaining (?.)
const user = this.props
const field = user?.data?.attributes?.field // 🙌 Horray!!!