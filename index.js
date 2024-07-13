//console.log("Hello JS");
// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }
// let i = 1;
// while (i < 5) {
//     console.log(i);
//     i++;
// }

// let j = 0;
// do {
//     console.log(j);
//     j++;
// } while (j < 5);
// var a=10;
// a=20.22;
// a="Ramesh Kumar";
// console.log(a);
// let a=12;
// a=11;
// a=1;
// console.log(a);

// var a=10;
// var b=9;
// var add=a+b;
// var sub=a-b;
// var mul=a*b;
// var div=a/b;
// var modu=a%b;
// console.log(add,sub,mul,div,modu);
// add++;
// console.log(add);
// add+=2;
// console.log(add);

// var a="Ramesh";
// var b="Kumar";
// console.log(a+" " +b);

// var a;
// let b;
// const c;
// // console.log(a);
// // console.log(b);
// console.log(c);

// var carName = "Volvo";
// var carName;
// var a;
// var name;
// console.log(carName);

// let c=12;
// let c;
// console.log(c);

// var a=4;
// var b="5";
// console.log(a+b,a*b,a-b,a%b,a/b);

//Escape char used:
// var str="fff \"cfdffffd\"";
// console.log(str);

//string opr
// var name="Ramesh kumar";
// console.log(name[11]);
// console.log(name.length);
// console.log(name[name.length-1]);

// var str="Ramesh Kumar";
// console.log(str.indexOf('s'));//provide the index
// console.log(str.charAt(0),str[0]);//provide char

// const c=11;
// c=2;
// console.log(c);

//FUNCTION IN JAVASCRIPT

//FUNCTION 

// function sum(a,b){
//     return a+b;
// }
// var ans=sum(2,3);
// console.log(ans);

//function HOISTING in JavaScript
// sum(2,1);
// function sum(a,b){
//     console.log(a+b);
// }

//normal function here
// var sum=function(a,b){
//     console.log(a+b);
// }
// sum(1,2);

//ARRAY Function;
// var cities=["patna","bihar","delhi","up"];
// cities[4]="Uk"
// cities[4]="fsdff";
// console.log(cities.length,cities);

// var arr=[12,13,14,15];
// arr.push(15);
// console.log(arr.push(15));//it return the length of array; after pushing the element into the arr
// console.log(arr);

// var arr=[12,13,14,15];
// console.log(arr.pop());
// console.log(arr.pop());//return which value is remove from the arr only/..
// console.log(arr.pop());
// console.log(arr.pop());
// console.log(arr);


//splice() function is used. to remove the element from any where and it return the array(remove element)
// var arr=[1,2,3,4,5];
// var ret=arr.splice(1,2);
// console.log(arr);
// console.log(ret);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// for(let i=0;i<fruits.length;i++){
//     console.log(fruits[i]);
// }

// var arr=[1,2,3,4,33]
// console.log(arr);
// arr.reverse();
// console.log(arr);

// var arr=[1,2,11,3,44];
// var joi=arr.join('-');
// console.log(joi);;;

//object data st(r).

// var person={};
// console.log(person);  declare the object;

// var person1={
//     name:"ramesh",  another type to declare to the object
//     age:23,
//     sex:"male"
// };
// console.log(person1);

var person2={};
person2.name="Ramesh"; //good method to declared the object
person2.age=24;
console.log(person2);
