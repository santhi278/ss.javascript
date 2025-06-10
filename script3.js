// // // // // // closures with parameters
// // // // // // function div(name){
// // // // // //     console.log("i am a div");
// // // // // //     function greet(age){
// // // // // //         console.log(`${name} and age is ${age}`);
// // // // // //     }
// // // // // //     return greet(200)
// // // // // // }
// // // // // // div("javascript")

// // // // // // closures
// // // // // // function hello(){
// // // // // //     console.log("i am hello");
// // // // // //     function say(){
// // // // // //         console.log("hello i am say");
// // // // // //         }
// // // // // //         return say()
// // // // // // }
// // // // // // hello()

// // // // // // push & arr with even numbers
// // // // // // var arr = []
// // // // // // for(var i = 20; i>=1; i--){
// // // // // //     if(i%2==0){
// // // // // //         arr.push(i)
// // // // // //         console.log(arr);
        
// // // // // //     }
// // // // // // }

// // // // // // literal api
// // // // // // var str = "javascript"
// // // // // // var age = 200
// // // // // // console.log(`${str} and age is ${age}`);

// // // // // // Array
// // // // // // var array = [1,2,3,4,5,6]
// // // // // // var [a,b,c,d,e,f] = array
// // // // // // console.log(array);

// // // // // // class
// // // // // // class person{
// // // // // //     constructor(name,city,age){
// // // // // //         this.name = name,
// // // // // //         this.city  = city,
// // // // // //         this.age = age
// // // // // //     }
// // // // // //     greet(){
// // // // // //         console.log(this.name,this.city,this.age);
        
// // // // // //     }
// // // // // // }
// // // // // // var a = new person("javascript","rjy",200)
// // // // // // a.greet()

// // // // // // var arr =  [1,2,3,4,5,6]
// // // // // // var newArray = arr.map((item)=>{
// // // // // //     return item*10
// // // // // // })
// // // // // // console.log(newArray);

// // // // // // var arr1 =  [1,2,3,4,5,6]
// // // // // // var newArray1 = arr1.filter((a)=>{
// // // // // //     return a>3
// // // // // // })
// // // // // // console.log(newArray1);

// // // // // // var arr2 =  [1,2,3,4,5,6]
// // // // // // var newArray2 = arr2.find((b)=>{
// // // // // //     return b>4
// // // // // // })
// // // // // // console.log(newArray2);

// // // // // // var arr3 =  [1,2,3,4,5,6]
// // // // // // var newArray3 = arr3.reduce((a,b)=>{
// // // // // //     return a+b
// // // // // // })
// // // // // // console.log(newArray3);

// // // // // // var arr4 =  [1,2,3,4,5,6]
// // // // // // arr4.forEach((d)=>{
// // // // // //     console.log(d);
    
// // // // // // // })
// // // // // // // terimonary operator
// // // // // // var a = 20
// // // // // // var b = 30
// // // // // // var c = 40
// // // // // // var result = a>b && a>c ? "a is the biggest number" : b>a && b>c ? "b is the biggest number" : "c is the biggest number"
// // // // // // console.log(result);

// // // // // // // arrow function
// // // // // // var add  = (a,b)=>a+b
// // // // // // console.log(add(10,20));

// // // // // // // literal function
// // // // // // var num1 = 10
// // // // // // var num2 = 20
// // // // // // console.log(`${num2} is th biggest number than ${num1}`);

// // // // // // GLOBAL SPACE
// // // // // // var global = 30
// // // // // // console.log(global);

// // // // // // function div(){
// // // // // //     console.log(global);
// // // // // //     if(true){
// // // // // //         console.log(global);
        
// // // // // //     }
// // // // // //     console.log(global);
    
// // // // // // }
// // // // // // div()


// // // // // // LOCAL SPACE
// // // // // // function div1(){
// // // // // //     var b = 20
// // // // // //     console.log(b);
// // // // // //     if(true){
// // // // // //         console.log(b);
        
// // // // // //     }
// // // // // // }
// // // // // // div1()

// // // // // // BLOCK SPACE
// // // // // // function div2(){
// // // // // //     if(true){
// // // // // //         let c = 100
// // // // // //         console.log(c);
// // // // // //     }
// // // // // // }
// // // // // // div2()

// // // // // // var a = 20
// // // // // // var b = 30
// // // // // // var c = 40
// // // // // // var result = a>b && a>c ? "a is the biggest number" : b>a && b>c ? "b is the biggest number" : "c is the biggest number"
// // // // // // console.log(result);

// // // // // // var str = "javascript"
// // // // // // var age = 200
// // // // // // console.log(`${str} and age is ${age}`);

// // // // // // var arr = []
// // // // // // for(var i = 25; i>=1; i--){
// // // // // //     if(i%2==0){
// // // // // //         arr.push(i)
// // // // // //         console.log(arr);
        
// // // // // //     }
// // // // // // }

// // // // // // const users = [
// // // // // //     {id: 1,name:"Alice"},
// // // // // //     {id:2,name:"Bob"},
// // // // // //     {id: 3,name:"Charlie"},
// // // // // //     {id:4,name:"David"},
// // // // // //     {id:5,name:"Eve"},
// // // // // //     {id:6,name:"Frank"},
// // // // // //     {id:7,name:"Grace"},
// // // // // //     {id:8,name:"Hank"},
// // // // // //     {id:9,name:"Ivy"},
// // // // // //     {id:10,name:"Jack"}
// // // // // // ]
// // // // // // var myuser = "Alice"
// // // // // // var result = users.find(item=> item.name == myuser )
// // // // // // if(result){
// // // // // //     console.log("you are logged");
    
// // // // // // }else{
// // // // // //     console.log("login failed");
    
// // // // // // }

// // // // // // var a = 20
// // // // // // function div(){
// // // // // //     console.log(a);
// // // // // //     if(true){
// // // // // //         console.log(a);
        
// // // // // //     }
// // // // // //     console.log(a);
    
// // // // // // }
// // // // // // div()

// // // // // // var a = 10
// // // // // // var b = 20
// // // // // // var c = 30
// // // // // // var result = a>b && a>c ? "a is the biggest number" : b>a && b>c ? "b is the biggest number" : "c is the biggest number"
// // // // // // console.log(result);

// // // // // var str = "javascript"
// // // // // var age = 200
// // // // // console.log(`${str} and age is ${age}`);

// // // // // // function div(call){
// // // // // //     console.log("hello i am a div");
// // // // // //     function hello(name){
// // // // // //         console.log(`${call} and name is ${name}`);
// // // // // //     }
// // // // // //     return hello("javascript")
// // // // // // }
// // // // // // div(200)

// // // // // // var arr = []
// // // // // // for(var i = 25; i>=1; i--){
// // // // // //     if(i%2==0){
// // // // // //         arr.push(i)
// // // // // //         console.log(arr);
        
// // // // // //     }
// // // // // // }


// // // // // // var arr = [1,2,3,4,5,6]
// // // // // // var [a,b,c,d,e,f] = arr
// // // // // // console.log(arr);

// // // // // // class person{
// // // // // //     constructor(name,city,age){
// // // // // //         this.name = name,
// // // // // //         this.city = city,
// // // // // //         this.age = age
// // // // // //     }
// // // // // //     greet(){
// // // // // //         console.log(this.name,this.city,this.age);
        
// // // // // //     }
// // // // // // }
// // // // // // var mydata = new person("javascript","w.d",600)
// // // // // // mydata.greet()

// // // // // // function div(call){
// // // // // //     console.log("i am a div");
// // // // // //     call()
    
// // // // // // }
// // // // // // function hello(){
// // // // // //     console.log("hi i am hello");
    
// // // // // // }
// // // // // // div(hello)
// // // // console.log("Hello World");

// // // // const a = 5;
// // // // const b= 3;
// // // // // add two numbers
// // // // const sum = a + b;
// // // // // display the sum
// // // // console.log('The sum of ' + a + ' and ' + b + ' is: ' + sum);

// // // // // var a = 10;
// // // // // var b = 20;
// // // // // var c = a+b
// // // // // console.log(`The sum of ${a} and ${b} is ${c}`);

// // // // const num1 = 2.25;
// // // // const num2 = -4;
// // // // const num3 = 'hello';
// // // // const num4 = 200

// // // // const result1 = Math.sqrt(num1);
// // // // const result2 = Math.sqrt(num2);
// // // // const result3 = Math.sqrt(num3);
// // // // const result4 = Math.sqrt(num4)

// // // // console.log(`The square root of ${num1} is ${result1}`);
// // // // console.log(`The square root of ${num2} is ${result2}`);
// // // // console.log(`The square root of ${num3} is ${result3}`);
// // // // console.log(`The square root of ${num4} is ${result4}`);


// // // // console.log("Hello World");

// // // // function greet(str){
// // // // return str
// // // // }
// // // // console.log(greet("Hello World"));

// // // // var a = 10
// // // // var b = 20
// // // // var c = a+b
// // // // console.log(c);

// // // // function str(a,b){
// // // //     return a+b
// // // // }
// // // // console.log(str(10,20));

// // // // var num = 2
// // // // var result = Math.sqrt(num)
// // // // console.log(result);

// // // function greet1(num11){
// // //     return Math.sqrt(num11)
// // // }
// // // console.log(greet1(2));

// // // var height = 50
// // // var base = 10
// // // var area = (height*base)/2
// // // console.log(area);


// // var a = 10
// // var b = 20
// // var c = a
// // a = b
// // b = c
// // console.log(a,b);

// // taking kilometers input from the user
// // const kilometers = 200

// // // conversion factor
// // const factor = 0.621371

// // // calculate miles
// // const miles = kilometers * factor

// // console.log(`${kilometers} kilometers is equal to ${miles} miles.`);

// // var kilometers = 3
// // var fact = kilometers*0.621371

// // console.log(`${kilometers} kilometers is equal to ${fact} miles`);

// // var kM = 10
// // var factor = kM*0.621371
// // console.log(`${kM} kilometers is equal to ${factor} miles`);

// // var celsuis = 55
// // var fahrenheit  = ( celsuis*1.8 )+ 32
// // console.log(`${celsuis} degree celsuis is equal to ${fahrenheit} degree fahrenheit`);

// // var celsuis = 50
// // var fahrenheit = (celsuis*1.8)+32
// // console.log(`${celsuis} degree celsuis is equal to ${fahrenheit} degree fahrenheit`);

// // var a = Math.random()
// // console.log(a);
// // var b = Math.floor(5.39)
// // console.log(b);


// // generating a random number
// // const a = Math.floor(Math.random() * (10 - 1)) + 1;
// // console.log(`Random value between 1 and 10 is ${a}`);

// // var b = Math.floor(Math.random()*(100 - 30)) + 1;
// // console.log(`Random value between 10 and 30 is ${b}`);

// // check if the number is positive, negative or zero
// const number = -20;

// if (number >= 0) {
//     if (number == 0) {
//         console.log("The number is zero");
//     } else {
//         console.log("The number is positive");
//     }
// } else {
//     console.log("The number is negative");
// }


// var a = 10
// var b = 30
// var c = a
// a = b
// b = c
// console.log(a,b);

// var height = 12
// var base = 8
// var area = (height*base)/2
// console.log(area);

// var kilometers = 100
// var factor = kilometers*0.621371
// console.log(`${kilometers} kilometers is equal to ${factor} miles`);

// var celsuis = 500
// var fahrenheit = (celsuis*1.8)+32
// console.log(`${celsuis} degree celsuis is equal to ${fahrenheit} degree fahrenheit`);

// var num = 0
// if(num > 0){
//     console.log("The number is positive");
    
// }else if(num < 0){
//     console.log("The number is negative");
    
// }else{
//     console.log("The number is zero");
// }

// var num1 = 20
// if(num % 2 ==0){
//     console.log("The number is even number");
    
// }else{
//     console.log("The number is not even number");
    
// }

// var num12 = 17
// var result = (num12 % 2 == 0) ? "even" : "odd";
// console.log(result);

// var num1 = 20
// var num2 = 30 
// var num3 = 50
// var largest = Math.max(num1,num2,num3);
// console.log(largest);

// var p = -50
// if(p > 0){
//     console.log("positive");
    
// }else if(p<0){
//     console.log("negative");
    
// }else{
//     console.log("Zero");
    
// }

var height = 24
var base = 18
var area = (height*base)/2
console.log(area);

var celsuis = 400
var fahrenheit = (celsuis*1.8)+32
console.log(`${celsuis} degree celsuis is equal to ${fahrenheit} degree fahrenheit`);

var miles = 200
var factor = (miles*0.621371)
console.log(`${miles} kilometers is equal to ${factor} miles`);

var a = 30
var b = 40
var c = a
a = b
b = c
console.log(a,b);

var num = -10
if(num > 0){
    console.log("positive");
    
}else if(num < 0){
    console.log("negative");
    
}else{
    console.log("zero");
    
}

var num11 = 20
var num12 = 30
var num13 = 40
var result = Math.max(num11,num12,num13)
console.log(result);

var num14 = 13
if(num14 % 2 == 0){
    console.log("The number is even number");
    
}else{
    console.log("The number is not an even number");
    
}













