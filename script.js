// console.log("hello world");
// var a=10;//global scope
// var a=100;
// console.log(a);
// let b=20;//block scope or with in a block
// //let b=3;
// console.log(b)
// const c=30;// block scope
// //const c=40;
// console.log(c)
// var a=10;//number
// var str="nan"//string
// var bool=true;//boolean
// var un;//undefined
// var nu=null;//null
// console.log(nu)
// var big=123456789876n;
// var symbol=Symbol("li")
// console.log(typeof a);
// console.log(typeof str);
// console.log(typeof bool);
// console.log(typeof un);
// console.log(typeof nu);//we object bcz of null is error in java

// console.log(typeof big);

// console.log(typeof symbol);
// //arithmetic operators(+,-,*,/,%)
// var a=10;
// var d=20;
// console.log(a+d);
// console.log(a-d);
// console.log(a*d);
// console.log(a/d);

// console.log(a%d);
// //relational operators(>,<,<=,>=,==,!=,===,!==)
// var a=10;
// var d=20;
// console.log(a>d);//false
// console.log(a<d);//true
// console.log(a<=d);//true
// console.log(a>=d);//false
// console.log(a==d);//false
// console.log(a!=d);//true
// console.log(a===d);//false
// console.log(a!==d);//true
// //logical operators(&&,||,!)
// a=true;
// b=false;
// console.log(a&&b);
// console.log(a||b);
// console.log(!a);
// var arr=[10,20,30,40];
// console.log(arr);
// console.log(typeof arr);
// var obj={
//     name:"nan",age:20
// }
//     console.log(obj);
//     console.log(typeof obj);

// //bitwisse operators
// var a = 5;   // 0101
// var d = 3;   // 0011

// console.log(a & d); // 1
// //looping statements
// //for loop
// //for(Intialization;Condition;increment/decrement)
//     //statement
// for(let i=0;i<=10;i++){
//     console.log(i)
// }
// //do while


// let i=4;
// do{
//     console.log("do.while");
//     i++

// }while(i==0);
// //if 
// //if else
// //for(let i=1;i<=10;i++){
//     //if(i%2==0){
//   //      console.log(i+"even")
//   //  }
//    // else{
//     //console.log(i+"odd")
// //}}
// //i=8;
// //let result=(i%2==0)?"even":"odd";
// //console.log(result);
// mark=80;
// let resu=(mark=80)?"s grade":(mark<80)?"b":"c";
// console.log(resu);

// //functions
// add(10,20);
// var e;
// function add(a,b){
//     e=10;
//     console.log(a+b+e);

// }
// add();


// //arrow function

// var add=(a,b)=>{
//     console.log(a+b);
// }
// add()
// //we are hosting values to the class  



// //spread operator
// var arr1=[1,2,3,4];
// var arr2=[...arr1,5,6,7,8];/// here we use 3 dots(...) for spread operators

// console.log(arr2);
// //destructuring operator
// var [m1,m2,m3,m4,m5]=[89,87,76,68,56];
// console.log(m1);
// console.log(m2);
// console.log(m3);
// console.log(m4);
// console.log(m5);
// var{name,age,dept,marks}={name:"nan",age:19,dept:"csd",marks:{mern:70,
//     py:70}
// }

// console.log(name);
// console.log(age);
// console.log(dept);
// console.log(marks);


// //FOR ..IN LOOP
// //FOR (VARIABLE VARIABLE_NAME IN ARRAY_NAME){
// //STATEMENT}
// let arr5=[23,24,25];
// for (let i in arr5){
//     console.log(i,arr5[i])
// }
// var obj={
//     name:"nan",
//     age:25
// }
// for (let i in obj){
//     console.log(i,obj[i]);
// }
// //for (variable variable_name of array_name)
// //{statement}
// for(let val of arr5){
//     console.log(val)
// }

 let arr6=[3,4,5,6,7];
// //map/
// var double_arr=arr6.map((i)=>(i*2));
//  console.log(double_arr);


// //filter
// var even=double_arr.filter((i)=>(i%2===0))
// console.log(even);
// //reduser
// var total=even.reduce((sum,i)=>(sum+i),0);
// console.log(total);


// var total_sum=arr6.map((num)=>num*2).filter((num)=>(num%2==0)).reduce((sum,num)=>(sum+num),0);
// console.log(total_sum);
   


// var n=8;
// var flag=true;
// if(n<=1) {flag=false;}

// else{
//     for (let i=2;i<n/2;i++){
//         if(n%i===0){
//             flag=false;
//             break;
//         }
//     }
// }
// console.log(flag?"prime":"not prime");

// var nae='nan';
// console.log(`my name is ${nae}`);


// arr6.forEach((value,index)=>{console.log(index,value);
// })

    

// var main =(my function)=>{
//     console.log("i am main");
//     callBack()
    
// }
// var demo=()=>{
//     console.log("i am callback");

    
// }
// main(demo)
// const getData=()=>{
//     return fetch('https://jsonplaceholder.typicode.com/posts')
// }
// getData().((res)=>res.json())
// .then((data)=>console.log(data))
// .catch(err=>console.log(err))


//async and await are mainly used when backend is involved
const getData=async ()=>{
    try {
        var res = await fetch("https://jsonplaceholder.typicode.com/posts")
   var data =await res.json();
   console.log(data);

}
catch(err){console.log(err);
}
}
getData();
