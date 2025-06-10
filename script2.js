//  function declaration
// function div1(p,k){
//     return p+k
// }
// console.log(div1(10,10));

// // function expression
// var add = function(a,b){
//     return a+b
// }
// console.log(add(10,20));

// // function anonymous
// console.log(function(){
//     return "javascript"
// }());

// // arrow function
// var div = (c,d)=>c/d
// console.log(div(81,9));

// // callback function
//  function greet(call){
//     console.log("hello world");
//     call()
//  }
//  function say(){
//     console.log("i am say");
    
//  }
// greet(say)

// // date and time 
// setTimeout(() => {
//     var day = new Date()
//     var a = day.toLocaleTimeString()
//     var b = day.toLocaleDateString()
//     console.log(a);
//     console.log(b);
    
    
// }, 1000);

// setInterval(() => {
//     setTimeout(() => {
//     var day2 = new Date()
//     var c = day2.toDateString()
//     var d = day2.toLocaleDateString()
//     console.log(c);
//     console.log(d);
    
    
// }, 1000);

// // tables
// for(var i = 7; i<=70; i+=7){
//     console.log(i);
    
// }
// // calculateArea
// function calculateArea(length,width){
//     return length*width;
// }
// console.log(calculateArea(5,3));

 // findMax
// function findMax(num1,num2){
//     return (num1 > num2)? num1 : num2
// }
// console.log(findMax(10,20));

// // vote eligibility check
// var age = 19
// if(age < 20){
//     console.log("eligible to vote");
    
// }else{
//     console.log("not eligible");
    
// }

// var number = -90
// if(number > 0){
//     console.log("positive");
    
// }else if(number < 0){
//     console.log("negative");
    
// }else{
//     console.log("zero");
    
// }

// // grade findout
// let score = 90
// if(score >= 90){
//     console.log("Grade: A");
    
// }else if(score >= 75){
//     console.log("Grade: B");
    
// }else if(score >= 50){
//     console.log("Grade: C");
    
// }else{
//     console.log("Grade: F");
    
// }

// // tables
// for(let i = 9; i<=90; i+=9){
//     console.log(i);
    
// }

// let num = 5
// for(var a = 1; a<=100; a++){
//     console.log(num + "x" + a + "="+(num*1));
    
// }

// let num2 = 6
// for(var b = 1; b<=100; b++){
//     console.log(num2 + "x" + b + "="+(num2*1));
    
// }

// let num9 = 9
// for(var c = 1; c<=100; c++){
//     console.log(num9 + "x" + c + "="+(num9*1));
    
// }
 
// let num10 = 10
// for(var d = 1; d<=100; d++){
//     console.log(num10 + "x"+ d + "="+(num10*1));
    
// }

// var arr = [1,2,3,4,5]
// var newArray = arr.map((item)=>{
//     return item
// })
// console.log(newArray);

// var array = [1,2,3,4,5,6,7,8,9,10]
// var newArray2 = array.filter((a)=>{
//     return a>5
// })
// console.log(newArray2);

// var arr6 = [1,2,3,4,5]
// var sum = arr6.find((d)=>{
//     return d>3
// })
// console.log(sum);


// var arr2 = [1,2,3,4,5,6]
// arr2.forEach((b)=>{
// console.log(b);

// })

// var arr5 = [1,2,3,4,5]
// var newarr = arr5.reduce((a,b)=>{
//     return a+b
// })
// console.log(newarr);

// var arr = [1,2,3,4,5]
// var newArray = arr.map((item)=>{
// return item
// })
// console.log(newArray);

// var arr2 = [1,2,3,4,5,6,7,8,9,10]
// var newarr = arr2.filter((a)=>{
// return a>5
// })
// console.log(newarr);

// var arr7 = [1,2,3,4,5,6,7,8,9,10]
// var newarr6 = arr7.find((b)=>{
//     return b>5
// })
// console.log(newarr6);

// var arr9 = [1,2,3,4,5]
// var sum  = arr9.reduce((a,b)=>{
//     return a+b
// })
// console.log(sum);

// arr9.forEach((c)=>{
// //     console.log(c);
    
 // })

// var arr = [1,2,3,4,5]
// var newarr = arr.map((thing)=>{
//     return thing*10
// })
// console.log(newarr);

// var arr6 = [1,2,3,4,5,6,7,8,9,10]
// var newarr8 = arr6.filter((b)=>{
//     return  b>5 
// })
// console.log(newarr8);

// var arr5 = [1,2,3,4,5,6,7,8,9,10]
// var newarr5 = arr5.find((c)=>{
// return c>7
// })
// console.log(newarr5);

// var arr8 = [1,2,3,4,5]
// var newarr9 = arr8.reduce((a,b)=>{
//     return a+b
// })
// console.log(newarr9);

// arr8.forEach((d)=>{
//     console.log(d);
    
// })

// var arr10 = [1,2,3,4,5,6,7,8,9,10]
// var newArray2 = arr10.find((b)=>{
//     return b>9
// })
// console.log(newArray2);

// var arr6 = [1,2,3,4,5,6,7,8,9,10]
// var newarr2 = arr6.reduce((a,b)=>{
//     return a+b
// })
// console.log(newarr2);

// arr6.forEach((b)=>{
//     console.log(b);
    
// })

// var add = function(a,b){
//     return a+b
// }
// console.log(add(10,20));

// console.log(function(){
//     return "javascript"
// }());

// var show = (a,b)=>a+b
// console.log(show(20,20));

// setTimeout(() => {
// var arr4 = [1,2,3,4,5]
// arr4.forEach((r)=>{
//     console.log(r);
    
// })
// // // }, 1000);
// // // var arr = [1,2,3,4,5,6,7,8,9,10]
// // // var newArray = arr.map((item)=>{
// // //     return item
// // // })
// // // console.log(newArray);
// // // var arr1 = [1,2,3,4,5,6,7,8,9,10]
// // // var newArray1 = arr1.filter((a)=>{
// // //     return a>6
// // // })
// // // console.log(newArray1);
// // // var arr2 = [1,2,3,4,5,6,7,8,9,10]
// // // var newArray3 = arr2.find((b)=>{
// // //     return b>8
// // // })
// // // console.log(newArray3);
// // // var arr3 = [1,2,3,4,5,6,7,8,9,10]
// // // var newArray4 = arr3.reduce((k,l)=>{
// // //     return k+l
// // // })
// // // console.log(newArray4);
// // // var arr4 = [1,2,3,4,5,6,7,8,9,10]
// // // arr4.forEach((q)=>{
// // //     console.log(q);
    
// // // })
// // // var add = function(a,b){
// // //     return a+b
// // // }
// // // console.log(add(20,5));
// // // console.log(function(){
// // //     return "javascript"
// // // }());

// // // var show = (c,d)=>c+d
// // // console.log(show(10,10));

// // // function div(str){
// // //     console.log("Hello",str);
    
// // // }
// // // div("World")
// // // var arr = [1,2,3,4,5,6,7,8,9,10]
// // // var newArray = arr.map((i)=>{
// // //     return i
// // // })
// // // console.log(newArray);

// // // var arr1 = [1,2,3,4,5,6,7,8,9,10]
// // // var newArray2 = arr1.filter((d)=>{
// // //     return d>4
// // // })
// // // console.log(newArray2);
// // // var arr2 = [1,2,3,4,5,6,7,8,9,10]
// // // var newArray3 = arr2.find((j)=>{
// // //     return j>7
// // // })
// // // console.log(newArray3);
// // // var arr3 = [1,2,3,4,5,6,7,8,9,10]
// // // var newArray4 = arr3.reduce((a,b)=>{
// // //     return a+b
// // // })
// // // console.log(newArray4);
// // // var arr4 = [1,2,3,4,5,6,7,8,9,10]
// // // arr4.forEach((v)=>{
// // //     console.log(v);
    
// // // })

// // // let num2 = 8
// // // for(var b = 1; b<=100; b++){
// // //     console.log(num2 + "x" + b + "="+(num2*1));
    
// // // }
// // // function calculateArea(length,width){
// // //     return length*width;
// // // }
// // // console.log(calculateArea(12,9));
// // //  function calculateArea(length,width){
// // //     return length*width;
// // // }
// // // console.log(calculateArea(5,3));
// // // var arr = [1,2,3,4,5,6,7,8,9,10]
// // // var newArray = arr.map((item)=>{
// // //     return item
// // // })
// // // console.log(newArray);
// // // var arr1 = [1,2,3,4,5,6,7,8,9,10]
// // // var newArray1 = arr1.filter((a)=>{
// // //     return  a>5
// // // })
// // // console.log(newArray1);

// // // var arr2 = [1,2,3,4,5,6,7,8,9,10]
// // // var newArray2 = arr2.find((b)=>{
// // //     return b>9
// // // })
// // // console.log(newArray2);
// // // var arr3 = [1,2,3,4,5,6,7,8,9,10]
// // // var newArray3 = arr3.reduce((c,d)=>{
// // // return c+d
// // // })
// // // console.log(newArray3);
// // // var arr4 = [1,2,3,4,5,6,7,8,9,10]
// // // arr4.forEach((m)=>{
// // //     console.log(m);
    
// // // })
// // // var arr = [1,2,3,4,5,6,7,8,9,10]
// // // var newArray = arr.map((i)=>{
// // //     return i
// // // })
// // // console.log(newArray);
// // // var arr1 = [1,2,3,4,5,6,7,8,9,10]
// // // var newArray1 = arr1.filter((a)=>{
// // //     return a>7
// // // })
// // // console.log(newArray1);
// // // var arr2 = [1,2,3,4,5,6,7,8,9,10]
// // // var newArray2 = arr2.find((b)=>{
// // //     return b>8
// // // })
// // // console.log(newArray2);
// // // var arr3 = [1,2,3,4,5,6,7,8,9,10]
// // // var newArray3 = arr3.reduce((a,b)=>{
// // //     return a+b
// // // })
// // // console.log(newArray3);
// // // var array = [1,2,3,4,5,6,7,8,9,10]
// // // array.forEach((d)=>{
// // //     console.log(d);
    
// // // })

// // // class data{
// // //     constructor(name,age,city){
// // //         this.name = name,
// // //         this.age = age,
// // //         this.city = city
// // //     }
// // //     greet(){
// // //         console.log(this.name,this.age,this.city);
        
// // //     }

// // // }
// // // var a = new data("js",200,"rjy")
// // // a.greet()

// // // class div{
// // //     constructor(name,age){
// // //         this.name = name,
// // //         this.age = age
// // //     }
// // //     wish(){
// // //         console.log(this.name,this.age);
        
// // //     }

// // // }
// // // var b = new div("santhi",17)
// // // b.wish()

// // // class Data{
// // //     constructor(name,age,num){
// // //         this.name = name,
// // //         this.age = age,
// // //         this.num = num
// // //     }
// // //     greet(){
// // //         console.log(this.name,this.age,this.num);
        
// // //     }
// // // }
// // // var d = new Data("javascript",100,20)
// // // d.greet()

// // // class Data{
// // //     constructor(name,age){
// // //         this.name = name,
// // //         this.age = age
// // //     }
// // //     div(){
// // //         console.log(this.name,this.age);
        
// // //     }
// // // }
// // // var c = new Data("swaroopa",16)
// // // c.div()

// // // var array = []
// // // for(var i = 100; i>=1; i--){
// // //     if(i%2==0){
// // //         array.push(i)
// // //     console.log(array);
    
        
        
// // //     }
// // // }

// // // var str = "Hello World"
// // // var age = 200
// // // console.log(`${str} and age is ${age}`);

// // // var arr = [1,2,3,4,5]
// // // var [a,b,c,d,e] = arr
// // // console.log(a);

// // // var array = [1,2,3,4,5]
// // // var sum = 0
// // // for(var i = 0; i<array.length; i++){
// // //     sum+= array[i]
// // //     console.log(sum);
    
// // // }

// var data = [
//   {
//     "id": 7928697,
//     "name": "Agniprava Menon",
//     "email": "agniprava_menon@hahn.example",
//     "gender": "female",
//     "status": "active"
//   },
//   {
//     "id": 7928696,
//     "name": "Tejas Kaniyar DVM",
//     "email": "kaniyar_tejas_dvm@reilly.test",
//     "gender": "male",
//     "status": "inactive"
//   },
//   {
//     "id": 7928693,
//     "name": "Brahmabrata Gupta",
//     "email": "brahmabrata_gupta@stamm.example",
//     "gender": "female",
//     "status": "active"
//   },
//   {
//     "id": 7928692,
//     "name": "Laxman Adiga",
//     "email": "adiga_laxman@robel.example",
//     "gender": "male",
//     "status": "active"
//   },
//   {
//     "id": 7925280,
//     "name": "Amish Abbott",
//     "email": "amish_abbott@mitchell.test",
//     "gender": "male",
//     "status": "inactive"
//   },
//   {
//     "id": 7925278,
//     "name": "Chandi Prajapat",
//     "email": "prajapat_chandi@stehr-murphy.test",
//     "gender": "male",
//     "status": "inactive"
//   },
//   {
//     "id": 7925276,
//     "name": "Hamsini Gill Jr.",
//     "email": "hamsini_gill_jr@gulgowski-paucek.test",
//     "gender": "female",
//     "status": "inactive"
//   },
//   {
//     "id": 7925275,
//     "name": "Bhudev Jha CPA",
//     "email": "jha_bhudev_cpa@mayert.test",
//     "gender": "female",
//     "status": "inactive"
//   },
//   {
//     "id": 7925274,
//     "name": "Umang Tagore",
//     "email": "umang_tagore@stehr.example",
//     "gender": "male",
//     "status": "inactive"
//   },
//   {
//     "id": 7925273,
//     "name": "Kumuda Asan",
//     "email": "kumuda_asan@heller.test",
//     "gender": "male",
//     "status": "active"
//   }
// ]
// var name = "Brahmabrata Gupta"
// var email = "brahmabrata_gupta@stamm.example"

// var result = data.find(item=>item.name === name && item.email == email)
//     if(result){
//         console.log("you are logged ");
//     }else{
//     console.log("login failed ");
// }

 // var str = "javascript"
 // var age = 200
 // console.log(`${str} and age is ${age}`);

// // var arr = [1,2,3,4,5]
// // var sum = 0
// // for(var i = 0; i<arr.length; i++){
// //     sum+= arr[i]
// //     console.log(sum);
    
// // }

// class data{
//     constructor(name,age,city){
//         this.name = name,
//         this.age = age,
//         this.city = city
//     }
//     div(){
//         console.log(this.name,this.age,this.city);
        
//     }
// }
// var a = new data("javascript",200,"w,d")
// a.div()

// var arr = [1,2,3,4,5]
// var [a,b,c,d,e] = arr
// console.log(a);

// var arr = []
// for(var i = 100; i>=1; i--){
//     if(i%2==0){
//         arr.push(i)
//         console.log(arr);
        
        
//     }
// }
// class person{
//     constructor(name,age){
//         this.name = name,
//         this.age = age
//     }
//     greet(){
//         console.log(this.name,this.age);
        
//     }
// }
// var b = new person("santhi",200)
// b.greet()

// var arr1 = []
// for(var a = 100; a>=1; a--){
//     if(a%2==0){
//         arr1.push(i)
//         console.log(arr);
        
//     }
// }

// // // // // var arr = [1,2,3,4,5]
// // // // // var [a,b,c,d,e] = arr
// // // // // console.log(arr);
 
// // // // // var str = "javascript"
// // // // // var age = 100
// // // // // console.log(`${str} and age is ${age}`);

// // // // // var arr1 = []
// // // // // for(var b = 100; b>=1; b--){
// // // // //    if(b%2!==0){
// // // // //     arr1.push(b)
// // // // //     console.log(arr1);
    
// // // // //    }
// // // // // }
// // // // var arr = []
// // // // for(var i = 50; i>=1; i--){
// // // //     if(i%2==0){
// // // //         arr.push(i)
// // // //         console.log(i);
        
// // // //     }
// // // // }
// // // // var str = "javascript"
// // // // var age = 200
// // // // console.log(`${str} and age is ${age}`);

// // // // class data{
// // // //     constructor(name,age,city,number){
// // // //         this.name = name,
// // // //         this.age = age,
// // // //         this.city = city,
// // // //         this.number = number
// // // //     }
// // // //     greet(){
// // // //         console.log(this.name,this.age,this.city,this.number);
        
// // // //     }
// // // // }
// // // // var c =  new data("chandhini",18,"kkd",7688096187)
// // // // c.greet()

// // // var arr = [1,2,3,4,5,6,7,8,9,10]
// // // var newArray = arr.map((a)=>{
// // //     return a
// // // })
// // // console.log(newArray);

// // // var arr1 = [1,2,3,4,5,6,7,8,9,10]
// // // var newArray1 = arr1.filter((b)=>{
// // //     return b>5
// // // })
// // // console.log(newArray1);

// // // var arr2 = [1,2,3,4,5,6,7,8,9,10]
// // // var newArray2 =arr2.find((c)=>{
// // //     return c>7
// // // })
// // // console.log(newArray2);

// // // var arr3 = [1,2,3,4,5,6,7,8,9,10]
// // // var newArray3 = arr3.reduce((d,e)=>{
// // // return d+e
// // // })
// // // console.log(newArray3);

// // // var arr4 = [1,2,3,4,5,6,7,8,9,10]
// // // arr4.forEach((h)=>{
// // //     console.log(h);
    
// // // })

// // // var arr = []
// // // for(var i = 30; i>=1; i--){
// // //     if(i%2==0){
// // //         arr.push(i)
// // //         console.log(arr);
        
// // //     }
// // // }

// // // var str = "javascript"
// // // var age = 200
// // // console.log(`${str} and age is ${age}`);

// // // class man{
// // //     constructor(name,age,city){
// // //         this.name = name,
// // //         this.age = age,
// // //         this.city = city
// // //     }
// // //     div(){
// // //         console.log(this.name,this.age,this.city);
        
// // //     }
// // // }
// // // var b = new man("Roopas",18,"rjy")
// // // b.div()

// // // var arr = []
// // // for(var a = 20; a>=1; a--){
// // //     if(a%2==0){
// // //         arr.push(a)
// // //         console.log(arr);
        
// // //     }
// // // }

// // // var str = "script"
// // // var age = 300
// // // console.log(`${str} and age is ${age}`);


// // // class person{
// // //     constructor(name,age,city,number){
// // //         this.name =name,
// // //         this.age = age,
// // //         this.city = city,
// // //         this.number = number
// // //     }
// // //     div(){
// // //         console.log(this.name,this.age,this.city,this.number);
        
// // //     }
// // // }

// // // var mydata = new person("suvarna",17,"rjy",90144766787)
// // // mydata.div()

// // var arr = [1,2,3,4,5,6,7,8,9,10]
// // var newArray = arr.map((item)=>{
// //     return item*10
// // })
// // console.log(newArray);

// // var arr1 = [1,2,3,4,5,6,7,8,9,10]
// // var newArray1 = arr1.filter((d)=>{
// //     return d>7
// // })
// // console.log(newArray1);
// // var arr2 = [1,2,3,4,5,6,7,8,9,10]
// // var newArray2 = arr2.find((k)=>{
// //     return k>9
// // })
// // console.log(newArray2);
// // var arr3 = [1,2,3,4,5,6,7,8,9,10]
// // var newArray3 = arr3.reduce((a,b)=>{
// //     return a+b
// // })
// // console.log(newArray3);

// // var arr4 = [1,2,3,4,5,6,7,8,9,10]
// // arr4.forEach((j)=>{
// //     console.log(j);
    
// // })

// var arr = [1,2,3,4,5,6,7,8,9,10]
// var [a,b,c,d,e,f,g,h,i,j] = arr
// console.log(arr);

// var str = "javascript"
// var age = 200
// console.log(`${str} and age is ${age}`);

// var array = []
// for(var i = 40; i>=1; i--){
//     if(i%2==0){
//         array.push(i)
//         console.log(arr);
        
        
//     }
// }

// class person{
//     constructor(name,age,city){
//         this.name=name,
//         this.age =age,
//         this.city = city
//     }
//     greet(){
//         console.log(this.name,this.age,this.city);
        
//     }
// }
// var d = new person("javascript",200,"W.D")
// d.greet()


// var str = "javascript"
// var age = 100
// console.log(`${str} and age is ${age}`);

// var arr = []
// for(var i = 50; i>=1; i--){
//     if(i%2==0){
//         arr.push(i)
//         console.log(arr);
        
//     }
// }

// var arr = [1,2,3,4,5]
// var [a,b,c,d,e] =arr
// console.log(arr);

// class man{
//     constructor(name,age,city){
//         this.name = name,
//         this.age = age ,
//         this.city = city
//     }
//     hello(){
//         console.log(this.name,this.age,this.city);
        
//     }
// }
// var mydata = new man("javascript",200,"rjy")
// mydata.hello()

// var a = 10
// var b = 20
// var c = 30
// var result = a>b && a>c ? "a is the big number" : b>a  && b>c ? "b is the big number" : "c is the biggest number"
// console.log(result);

// function div(){
//     console.log("i am div");
//     function hello(){
//         console.log("i am hello");
        
//     }
//     return hello()
// }
// div()

// function greet(age){
//     console.log("i am greet");
//     function hello(name){
//             console.log(`${age} and ${name}`);
            
//     }
//     return hello("javascript")
// }
// greet(200)

// var a = 10
// function div(){
//     console.log(a);
//     if(true){
//         console.log(a);
        
//     }
// }
// div()
// function div1(){
//     let b = 20
//     console.log(b);
    
// }
// div1()
//  function greet(name){
//     console.log("i am greet");
//     function hello(age){
//         console.log(`${name} and ${age}`);
        
        
//     }
//     return hello("200")
    
    
//  }
//  greet("javascript")

//  function hello(name){
//     console.log("i am hello");
//     function  greet(city){
//         console.log(`${name} and ${city}`);
        
//     }
//     return greet("coding")
//  }
//  hello("javascript")

// function say(){
//     console.log("i am say");
//     function data(){
//         console.log("i am data");
        
//     }
//     return data()
// }
// say()

// var a = 10
// var b = 20
// var c = 30
// var result = a>b && a>c ? "a is the biggest number" : b>a && b>c ? "b is the biggest number" : "c is the biggest number"
// console.log(result);

// var arr = []
// for(var i = 50; i>=1; i--){
//     if(i%2==0){
//         arr.push(i)
//         console.log(arr);
        
//     }
// }

// var array = [1,2,3,4,5]
// var [a,b,c,d,e] = array
// console.log(array);

// var str = "javascript"
// var age = 20
// console.log(`${str} and age is ${age}`);

// class person{
//     constructor(name,age,city){
//         this.name = name,
//         this.age = age,
//         this.city = city
//     }
//     greet(){
//         console.log(this.name,this.age,this.city);
        
//     }
// }
// var mydata = new person("javascript".split(),200,"rjy")
// mydata.greet()

// var arr = [1,2,3,4,5,6,7,8,9,10]
// var newArray = arr.map((item)=>{
//     return item*100
// })
// console.log(newArray);

// var arr1 = [1,2,3,4,5,6,7,8,9,10]
// var newArray1 = arr1.filter((a)=>{
//     return a>7
// })
// console.log(newArray1);

// var arr2 = [1,2,3,4,5,6,7,8,9,10]
// var newArray2 = arr2.find((b)=>{
//     return b>9
// })
// console.log(newArray2);

// var arr3 = [1,2,3,4,5,6,7,8,9,10]
// var newArray3 = arr3.reduce((c,d)=>{
//     return c+d
// })
// console.log(newArray3);

// var arr4 = [1,2,3,4,5,6,7,8,9,10]
// arr4.forEach((n)=>{
//     console.log(n);
    
// })

// console.log(function(){
//     return "javascript"
// }());

// class person{
//     constructor(name,age,city){
//         this.name = name,
//         this.age = age,
//         this.city = city
//     }
//     greet(){
//         console.log(this.name,this.age,this.city);
        
//     }
// }
// var data = new person("javascript",100,"rjy")
// data.greet()

// var arr = []
// for(var i = 20; i>=1; i--){
//     if(i%2==0){
//         arr.push(i)
//         console.log(arr);
        
//     }
// }

// var str = "javascript"
// var age = 100
// console.log(`${str} and age is ${age}`.split());

// var a = 60
// var b = 40
// var c = 20
// var result = a>b && a>c ? "a is the biggest number" : b>a && b>c ? "b is the biggest number" : "c is the biggest number"
// console.log(result);

// class data{
//     constructor(country,city,mandal){
//         this.country = country,
//         this.city = city,
//         this.mandal = mandal
//     }
//     greet(){
//         console.log(this.country,this.city,this.mandal);
//     }
// }
// var mydata = new data("india".split(), "rajahmundry", "east godavari".split())
// mydata.greet()

// var arr = []
// for(let i = 35; i>=1; i--){
//     if(i%2==0){
//         arr.push(i)
//         console.log(arr);
        
//     }
// }

// class person{
//     constructor(city,name,number){
//         this.city = city,
//         this.name = name,
//         this.number = number
//     }
//     hello(){
//         console.log(this.city,this.name,this.number);
//     }
// }
// var data = new person("rjy","javascript".split(),123456789)
// data.hello()

// var a = 60
// var b = 40
// var c = 20
// var result = a>b && a>c ? "a is the biggest number" : b>a && b>c ? "b is the biggest number" : "c is the biggest number"
// console.log(result);

// var arr = [1,2,3,4,5]
// var newArray = arr.map((item)=>{
//     return item*10
// })
// console.log(newArray);

// var arr1 = [1,2,3,4,5,6,7,8,9,10]
// var newArray1 = arr1.filter((a)=>{
//     return a>5
// })
// console.log(newArray1);

// var arr2 = [1,2,3,4,5,6,7,8,9,10]
// var newArray2 = arr2.find((b)=>{
//     return b>5
// })
// console.log(newArray2);

// var arr3 = [1,2,3,4,5,6,7,8,9,10]
// var newArray3 = arr3.reduce((a,b)=>{
//     return a-b
// })
// console.log(newArray3);

// var arr4 = [1,2,3,4,5,6,7,8,9,10]
// arr4.forEach((p)=>{
//     console.log(p);
    
// })

// var arr = []
// for(var i=30; i>=1; i--){
//     if(i%2==0){
//         arr.push(i)
//         console.log(arr);
        
//     }
// }
// var str = "javascript"
// var age = 200
// console.log(`${str} and age is ${age}`);

// var array = [1,2,3,4,5]
// var [a,b,c,d,e] = array
// console.log(array);

// class person{
//     constructor(name,city,age){
//         this.name = name,
//         this.city = city,
//         this.age = age
//     }
//     greet(){
//         console.log(this.name,this.age,this.city);
        
//     }
// }
// var mydata = new person("javascript".split(),200,"rajahmundry")
// mydata.greet()

// var arr = []
// for(var i = 20; i>=1; i--){
//     if(i%2==0){
//         arr.push(i)
//         console.log(arr);
        
//     }
// }

// var str = "javascript"
// var age = 200
// console.log(`${str} and age is ${age}`);

// function div(name){
//     console.log("hello i am div");
//     function data(city){
//           console.log(`${name} and city is ${city}`);
//     }
//     return data("rajahmundry")
// }
// div("javascript")
//  function hello(){
//     console.log(" hi am hello");
//     function greet(){
//         console.log("hello i am greet");
//     }
//     return greet()
//  }
//  hello()

//  var global = 20
//  console.log(global);
 
//  function hello(){
//     console.log(global);
    
//     if(true){
//         console.log(global);
        
//     }
//     console.log(global);
    
    
//  }
//  console.log(global);

//  function local(){
//     var a = 10
//     console.log(a);
//     if(true){
//         console.log(a);
//     }
//  }
//  console.log(a);
//  function block(){
//     if(true){
//         var b = 30
//         console.log(b);
        
//     }
//  }

// / clousers with parameters
 function hello(name){
    console.log("hi i am hello");
       function greet(city){
        console.log(` ${name} and city is ${city}`);
        }
        return greet("rajahmundry")
 }
 hello("javascript")
// clousers
 function div(){
    console.log("i am a div");
    function   say(){
        console.log(" hello i am say ");
    }
    return say()
 }
 div()

 