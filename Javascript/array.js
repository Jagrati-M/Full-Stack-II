// const fruits = [];
// fruits.push("banana", "apple", "peach");
// console.log(fruits.length); // 3
// fruits[2] = 4;
// console.log(fruits);/

// let arr = [1, "GLA", 2.99, undefined, null];
// console.log(arr);

// arr.shift();
// console.log(arr);
// arr.unshift(46);
// console.log(arr);
// arr.splice(1,8);
// console.log(arr);

let a = 153;
let n = a; let b = n;
let c = 0;
while(a>0){
    a=Math.floor(a/10);
    c = c+1;
}
let sum = 0;
while(n>0){
    let temp = n%10;
    sum = sum+temp**c;
    n = Math.floor(n/10);
}
if(sum == b){
    console.log(true);
}
else{
    console.log(false);
}
