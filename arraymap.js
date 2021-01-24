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