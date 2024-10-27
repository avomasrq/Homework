//1.
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
  
delay(3000).then(() => alert('выполнилось через 3 секунды'));
  
//////////////////////////////

//2.
let promise = new Promise(function(resolve, reject) {
    resolve(1);
    setTimeout(() => resolve(2), 1000);

});
  
promise.then(alert);

///// output 1 

//3.
////// no 