a=5;
var a=9;
console.log(a);
let b=20;
console.log(b);
{
    let b=90;
    console.log(b);
}
console.log(typeof(b));
var st='I am a  string';
console.log(typeof(st));
var d=true;
console.log(typeof(d));
var m;
console.log(typeof(m));
var arr1=['Orange','Apple',10];
console.log(arr1[0]);
console.log(arr1.length);
arr1.push('PineApple');
console.log(arr1)
arr1.remove;
console.log(arr1)
//Javascript Ojects
let person={
    name:'Maya',
    age:20,
    location:'TVM'
}
console.log(person.name)
//Javasript object array
let arr2=[{
    name:'Maya',
    age:20,
    location:'TVM'
},{
    name:'Miya',
    age:20,
    location:'Kollam'
}]
console.log(arr2[0].location)
//Functions
function add(x,y){
    var sum=x+y;
    return sum;
}
var p;
p=add(5,6);
console.log(p);
//Postfix
let s=1;
let t=s++;
console.log(s,t);
//prefix
let r=1;
let u=++r;
//if-else statement
var c=10
var d='10'
console.log(c,d);
if (c>d){
    console.log('c is greater')
} else if(c==d){//Will check variable as well as datatype
    console.log("c is equal to s")
}
else{
    console.log('c is lesser')
}
//Looping statements
var array=[1,2,3,4,5]
for (let i = 0; i < array.length; i++) {
    console.log(array[i])
}
for (const key in person) {
    console.log(person[key])
}
for (const i of array) {
    console.log(i)
}
