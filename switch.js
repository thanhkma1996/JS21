// Cau lenh re nhanh switch

var date = 9 ;

switch(date) {
    case 2:
        console.log("Home nat laf thu 2");
        break;
    case 3:
        console.log("Home nat laf thu 3");
        break;

    case 4:
        console.log("Home nat laf thu 4");
        break;

    case 5:
        console.log("Home nat laf thu 5");
        break;

    default:
        console.log("Khong ton tai");
}

// Toan tu 3 ngoi
// Cach 1

var course = {
    name: 'Javascriptt',
    coin: 250
};

if(course.coin > 0) {
    console.log(`${course.coin} coins`);
}else {
    console.log('mien phi');
}

var result = course.coin > 0 ? `${course.coin} coins` : "Mien phi";
console.log(result);