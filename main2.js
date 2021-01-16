/**
 *      Toán tử 3 ngôi
 */

 var couser = {
        name:'javascript',
        coin: 250
 }

 if(couser.coin > 0){
    console.log(`${couser.coin} coins`);
 }else {
     console.log('Mien phi')
 }

 // su dung toan tu 3 ngoi
 var result = couser.coin > 0 ? `${couser.coin} coins` : 'Mien phi';
 console.log(result);

 var a = 1;
 var b = 2;
 var c = a > b ? a:b
 console.log(c);

/**
 *     Callback
 */