// Aray map va reduce in array
// Phương thức map() giúp tạo ra một mảng mới 
// với các phần tử là kết quả từ việc thực thi một hàm lên từng phần tử của mảng được gọi.

var course = [
    {
        id: 1,
        name: 'Javascript',
        coin: 1
    },

    {
        id: 2,
        name: 'PHP',
        coin: 12
    },


    {
        id: 3,
        name: 'Ruby',
        coin: 20
    },


    {
        id: 4,
        name: 'React',
        coin: 30
    }

];

function courseHandle(course, index , originArray){
    // console.log(course);
    return {
        id: course.id,
        name: `Khao hoc: ${course.name}`,
        coin: course.coin,
        coinText: `Gia: ${course.coin}`,
        index: index,
        originArray: originArray
    }
}

var newCouser = course.map(courseHandle);

console.log(newCouser);

// reduce 

// tính tổng bang cach thong thuong k dung reduce

// Biến lưu trữ
var totalCoin = 0;

for( var coincourse of  course) {
    totalCoin += coincourse.coin;
}

console.log(totalCoin);

// sử dụng reduce
// var i = 0;

function coinTotal(accumulator, currentValue , currentIndex, originArray){
    //  i++;

     var total = accumulator + currentValue.coin;

    //  console.table({
    //         'luot chay' : i,
    //         'Bien tich chu' : accumulator,
    //         'Gia khoa hoc' : currentValue.coin,
    //         'Tich chu duoc' : total
    //  });

    //  console.log(currentValue);

     return total;
}

var totalCoins = course.reduce(coinTotal,0); // O là giá trị khởi tạo và luôn luôn phải có
console.log(totalCoins);

// example reduce P2
// viet gon lai nhu sau
var totalCoins = course.reduce(function(total,course){
    return total + course.coin;
},0);

console.log(totalCoins);

// VD1: Flat - "Làm phẩng " mảng từ Depth aray - "Mảng sâu"
var depthArray = [1,2,[3,4],5,6,[7,8,9]];
// Dau tien khoi tao 1 mag rong sau do tinh thong
var ArrayFlat = depthArray.reduce(function(ArrayFlatOutput,itemDepth){
        return ArrayFlatOutput.concat(itemDepth);
},[]);

console.log(ArrayFlat);

var totalFlat = ArrayFlat.reduce(function(total,ArrayFlat){
        return total + ArrayFlat;
},0);

console.log(totalFlat);


// vd2: laasy ra các khóa học đưa vào 1 mảng mới
var topics = [
    {
        topic: "Font-end",
        courses : [
            {
                id: 1,
                title: "HTML,CSS"
            },
            {
                id:2,
                title:"JS"
            }
        ]
    },

    {
        topic: "Back-end",
        courses : [
            {
                id: 1,
                title: "PHP"
            },
            {
                id:2,
                title:"Python"
            }
        ]
    }
]

var newCourse = topics.reduce(function(courses,topic){
    return courses.concat(topic.courses);
},[]);

console.log(newCourse);

var htmls = newCourse.map(function(course){
    return `
        <div>
            <h2>${course.title}</h2>
            <p>ID: ${course.id}</p>
        </div>
    `;
});

// console.log(htmls);
console.log(htmls.join(''));