// // // closures with parameters
// // // function div(name){
// // //     console.log("i am a div");
// // //     function greet(age){
// // //         console.log(`${name} and age is ${age}`);
// // //     }
// // //     return greet(200)
// // // }
// // // div("javascript")

// // // closures
// // // function hello(){
// // //     console.log("i am hello");
// // //     function say(){
// // //         console.log("hello i am say");
// // //         }
// // //         return say()
// // // }
// // // hello()

// // // push & arr with even numbers
// // // var arr = []
// // // for(var i = 20; i>=1; i--){
// // //     if(i%2==0){
// // //         arr.push(i)
// // //         console.log(arr);
        
// // //     }
// // // }

// // // literal api
// // // var str = "javascript"
// // // var age = 200
// // // console.log(`${str} and age is ${age}`);

// // // Array
// // // var array = [1,2,3,4,5,6]
// // // var [a,b,c,d,e,f] = array
// // // console.log(array);

// // // class
// // // class person{
// // //     constructor(name,city,age){
// // //         this.name = name,
// // //         this.city  = city,
// // //         this.age = age
// // //     }
// // //     greet(){
// // //         console.log(this.name,this.city,this.age);
        
// // //     }
// // // }
// // // var a = new person("javascript","rjy",200)
// // // a.greet()

// // // var arr =  [1,2,3,4,5,6]
// // // var newArray = arr.map((item)=>{
// // //     return item*10
// // // })
// // // console.log(newArray);

// // // var arr1 =  [1,2,3,4,5,6]
// // // var newArray1 = arr1.filter((a)=>{
// // //     return a>3
// // // })
// // // console.log(newArray1);

// // // var arr2 =  [1,2,3,4,5,6]
// // // var newArray2 = arr2.find((b)=>{
// // //     return b>4
// // // })
// // // console.log(newArray2);

// // // var arr3 =  [1,2,3,4,5,6]
// // // var newArray3 = arr3.reduce((a,b)=>{
// // //     return a+b
// // // })
// // // console.log(newArray3);

// // // var arr4 =  [1,2,3,4,5,6]
// // // arr4.forEach((d)=>{
// // //     console.log(d);
    
// // // // })
// // // // terimonary operator
// // // var a = 20
// // // var b = 30
// // // var c = 40
// // // var result = a>b && a>c ? "a is the biggest number" : b>a && b>c ? "b is the biggest number" : "c is the biggest number"
// // // console.log(result);

// // // // arrow function
// // // var add  = (a,b)=>a+b
// // // console.log(add(10,20));

// // // // literal function
// // // var num1 = 10
// // // var num2 = 20
// // // console.log(`${num2} is th biggest number than ${num1}`);

// // // GLOBAL SPACE
// // // var global = 30
// // // console.log(global);

// // // function div(){
// // //     console.log(global);
// // //     if(true){
// // //         console.log(global);
        
// // //     }
// // //     console.log(global);
    
// // // }
// // // div()


// // // LOCAL SPACE
// // // function div1(){
// // //     var b = 20
// // //     console.log(b);
// // //     if(true){
// // //         console.log(b);
        
// // //     }
// // // }
// // // div1()

// // // BLOCK SPACE
// // // function div2(){
// // //     if(true){
// // //         let c = 100
// // //         console.log(c);
// // //     }
// // // }
// // // div2()

// // // var a = 20
// // // var b = 30
// // // var c = 40
// // // var result = a>b && a>c ? "a is the biggest number" : b>a && b>c ? "b is the biggest number" : "c is the biggest number"
// // // console.log(result);

// // // var str = "javascript"
// // // var age = 200
// // // console.log(`${str} and age is ${age}`);

// // // var arr = []
// // // for(var i = 25; i>=1; i--){
// // //     if(i%2==0){
// // //         arr.push(i)
// // //         console.log(arr);
        
// // //     }
// // // }

// // // const users = [
// // //     {id: 1,name:"Alice"},
// // //     {id:2,name:"Bob"},
// // //     {id: 3,name:"Charlie"},
// // //     {id:4,name:"David"},
// // //     {id:5,name:"Eve"},
// // //     {id:6,name:"Frank"},
// // //     {id:7,name:"Grace"},
// // //     {id:8,name:"Hank"},
// // //     {id:9,name:"Ivy"},
// // //     {id:10,name:"Jack"}
// // // ]
// // // var myuser = "Alice"
// // // var result = users.find(item=> item.name == myuser )
// // // if(result){
// // //     console.log("you are logged");
    
// // // }else{
// // //     console.log("login failed");
    
// // // }

// // // var a = 20
// // // function div(){
// // //     console.log(a);
// // //     if(true){
// // //         console.log(a);
        
// // //     }
// // //     console.log(a);
    
// // // }
// // // div()

// // // var a = 10
// // // var b = 20
// // // var c = 30
// // // var result = a>b && a>c ? "a is the biggest number" : b>a && b>c ? "b is the biggest number" : "c is the biggest number"
// // // console.log(result);

// // var str = "javascript"
// // var age = 200
// // console.log(`${str} and age is ${age}`);

// // // function div(call){
// // //     console.log("hello i am a div");
// // //     function hello(name){
// // //         console.log(`${call} and name is ${name}`);
// // //     }
// // //     return hello("javascript")
// // // }
// // // div(200)

// // // var arr = []
// // // for(var i = 25; i>=1; i--){
// // //     if(i%2==0){
// // //         arr.push(i)
// // //         console.log(arr);
        
// // //     }
// // // }


// // // var arr = [1,2,3,4,5,6]
// // // var [a,b,c,d,e,f] = arr
// // // console.log(arr);

// // // class person{
// // //     constructor(name,city,age){
// // //         this.name = name,
// // //         this.city = city,
// // //         this.age = age
// // //     }
// // //     greet(){
// // //         console.log(this.name,this.city,this.age);
        
// // //     }
// // // }
// // // var mydata = new person("javascript","w.d",600)
// // // mydata.greet()

// // // function div(call){
// // //     console.log("i am a div");
// // //     call()
    
// // // }
// // // function hello(){
// // //     console.log("hi i am hello");
    
// // // }
// // // div(hello)
// console.log("Hello World");

// // const a = 5;
// // const b= 3;
// // // add two numbers
// // const sum = a + b;
// // // display the sum
// // console.log('The sum of ' + a + ' and ' + b + ' is: ' + sum);

// // // var a = 10;
// // // var b = 20;
// // // var c = a+b
// // // console.log(`The sum of ${a} and ${b} is ${c}`);

// // const num1 = 2.25;
// // const num2 = -4;
// // const num3 = 'hello';
// // const num4 = 200

// // const result1 = Math.sqrt(num1);
// // const result2 = Math.sqrt(num2);
// // const result3 = Math.sqrt(num3);
// // const result4 = Math.sqrt(num4)

// // console.log(`The square root of ${num1} is ${result1}`);
// // console.log(`The square root of ${num2} is ${result2}`);
// // console.log(`The square root of ${num3} is ${result3}`);
// // console.log(`The square root of ${num4} is ${result4}`);


// // console.log("Hello World");

// // function greet(str){
// // return str
// // }
// // console.log(greet("Hello World"));

// // var a = 10
// // var b = 20
// // var c = a+b
// // console.log(c);

// // function str(a,b){
// //     return a+b
// // }




// // function div10(num){
// // var num = -50
// // if(num > 0){
// //     console.log("positive");

// // }else if (num < 0){
// //     console.log("negative");
    
// // }else{
// //     console.log("zero");
    
// // }
// // }


// // var num = -20
// // if(num > 0){
// //     console.log("positive");
// // }
// //     else if(num < 0){

// //     console.lohg("negitive");

// // }else if{
// //   console.log("zero");
// // }




// // function div1(kilometers,factor){
// //     var kilometers = 900
// //     var factor = (kilometers*0.621371)
// //     console.log(`${kilometers} kilometers is equal to ${factor} miles`);

// // }

// // var a = 20
// // var b = 30
// // var c = a
// //    a = b
// //    b = c
// // console.log(a,b);

// // var num = -20
// // if(num > 0){
// //     console.log("positive");
    
// // }else if(num < 0){
// //     console.log("negative");
    
// // }else{
// //     console.log("zero");
    
// // }


// // var celsuis = 100
// // var fahrenheit = (celsuis*1.8)+32;
// // console.log(`${celsuis} degree celsuis is equal to ${fahrenheit} degree fahrenheit`);
// // var a=20
// // var b=30
// // var c=a
// //     a=b
// // console.log(a,b);
// // var num=-20
// // if(num>0){
// //     console.log("positive");
// // }else if(num<0){
// //     console.log("negative");
// // }else{
// //     console.log("zero");
// // }

// // let temp = 25;
// // if(temp> 30){
// //     console.log("It's hot ");
    
// // }else if(temp >20){
// //     console.log("Nice weather!");
    
// // }else{
// //     console.log("It's cold !");
    
// // }


// // const af = Math.floor(Math.random() * (10 - 1 )+ 1);
// // console.log(`Random value between 1 and 10 is ${af}`);

// //  var b = Math.floor(Math.random()*(100 - 30)+1);
// //   console.log(`Random value between 10 and 30 is ${b}`);



// // var miles = 200
// // var factor = (miles*0.621371)
// // console.log(`${miles} kilometers is equal to ${factor} miles`);



// // var miles = 200
// // var factor = (miles*0.621371)
// // console.log(`${miles}kilometers is equal to ${factor}miles`);


// // let base =6
// // let height=12
// // let area = (base*height) / 2
// // console.log(area);


// // const num = parseInt(prompt("Enter a positive number:"));
// // let isprime = true;
// // if (num ==1){
// //     console.log("1 is neither prime nor composite number:");
// // }
// // else if (num>1){
// //     for (let i=2; i<=num/2; i++){
// //         isprime=false;
// //         break
// //     }
// // }
// // if(isprime){
// //     console.log(`${num}is a prime num`);
// // }else{
// //     console.log(`${Num}is not a prime num`);
// // }else{
// //     console.log("the num is not a prime num.");
// // }
// // var num = 2
// // var isprime = "i am the prime"
// // for(var i = 2; i<num; i++){
// //     if(num%i==0){
// //         isprime = "i am the not prime"
// //     }
// // }
// // console.log(isprime);
// // var num1 = 7
// // var isprime = "i am the prime"
// // for(var a = 2; a<num1; a++){
// //     if(num1%a==0){
// //         isprime = "i am not the prime"
// //     }
// // }
// // console.log(isprime);

// // var num = 10
// // var isprime = "i am the prime"
// // for(var i = 2; i<num; i++){
// //     if(num%i==0){
// //         isprime = "i am not the prime"
// //     }
// // }
// // console.log(isprime);

// // var num1 = 7
// // var isprime = "i am the prime"
// // for(var a = 2; a<num1; a++){
// //     if(num1%a==0){
// //         isprime = "i am not the prime"
// //     }
// // }
// // console.log(isprime);

// // var num = 1634
// // var factor = num
// // var sum = 0
// // while(factor>0){
// //     var remainder = factor%10
// //     sum += remainder*remainder*remainder
// //     factor = Math.floor(factor/10)
// // }
// // console.log(sum);

// // var num1 = 1634
// // var fact = num1
// // var sum1 = 0
// // while(fact>0){
// //     var answer = fact%10
// //     sum1 += answer*answer*answer*answer
// // //     fact = Math.floor(fact/10)
// // // }
// // // console.log(sum1);


// // var num = 1634
// // var fact = num
// // var sum = 0
// // while(fact>0){
// //     var remainder = fact%10
// //     sum += remainder*remainder*remainder*remainder
// //     fact = Math.floor(fact/10)
// // }
// // console.log(sum);

// // var num = 153
// // var temp = num
// // var sum = 0
// // while(temp>0){
// //     var remainder = temp%10
// //     sum += remainder*remainder*remainder
// //     temp = Math.floor(temp/10)
// // }
// // console.log(sum);
// // var num = 9
// // var isprime = "i am the prime"
// // for(var i = 2; i<num; i++){
// //     if(num%i==0){
// //           console.log("i am not the prime");
          
// //     }
// // }

// // var num1 = 7
// // var isprime = "i am the prime"
// // for(var a = 2; a<num1; a++){
// //     if(num1%a==0){
// //         isprime = "i am not the prime"
// //     }
// // }
// // console.log(isprime);

// // var num3 = 1634
// // var temp = num3
// // var sum = 0
// // while(temp>0){
// //     var answer = temp%10
// //     sum += answer*answer*answer*answer
// //     temp = Math.floor(temp/10)
// // }
// // console.log(sum);

// // var operator = "*"
// // var num1 = 8
// // var num2 = 2
// // var result = num1*num2
// // console.log(`${num1} ${operator} ${num2} = ${result} `);


// // const operator = "*"

// // const number1 = 9
// // const number2 = 12
// // let result;
// // if (operator == '+') {
// //     result = number1 + number2;
// // }
// // else if (operator == '-') {
// //     result = number1 - number2;
// // }
// // else if (operator == '*') {
// //     result = number1 * number2;
// // }
// // else {
// //     result = number1 / number2;
// // }
// // console.log(`${number1} ${operator} ${number2} = ${result}`);

// // var num = 5
// // var fact = 1
// // for(var i = 1; i<=num; i++){
// //     fact = fact*i
    
// // }
// // console.log(fact);

// // var a = 12
// // for(var b = 1; b<=a; b++){
// //     console.log(`${a} * ${b} = ${a*b}`);
    
// // }
// // var c = 10
// // var sum = 0
// // for(var d = 1; d<=c; d++){
// //  sum += d

// // }
// // console.log(sum);

// // var a = 9
// // var b = 8
// // var operator = "+"
// // if(operator == "-"){
// //     console.log(a-b);
// // }else if(operator == "*"){
// //     console.log(a*b);
    
// // }else if(operator == "/"){
// //     console.log(a/b);
    
// // }else if(operator == "+"){
// //     console.log(a+b);
    
// // }else{
// //     console.log("invalid operator");
    
// // }

// // var num = 6
// // for(var i = 1; i<=10; i++){
// //     console.log(`${num} * ${i} = ${num*i}`);
    
// // }

// // var num = 9
// // var sum = 0
// // for(var i = 1; i<=num; i++){
// //     sum += i
// // }
// // console.log(sum,i);

// // var num1 = 6
// // var fact = 1
// // for(var i = 1; i<=num1; i++){
// //     fact = fact*i
// // }
// // console.log(fact);


// // var a = 19
// // for(var i = 1; i<=10; i++){
// // console.log(`${a} * ${i} = ${a*i}`);

// // }

// // var num = 7
// // var sum = 0
// // for(var i = 1; i<=num; i++){
// //     sum += i
// // }
// // console.log(sum);

// // var num1 = 5
// // var fact = 1
// // for(var d = 1; d<=num1;d++){
// // fact = fact*d
// // }
// // console.log(fact);

// // var num2 = 15
// // for(var i = 1; i<=10; i++ ){
// //     console.log(`${num2} * ${i} = ${num2*i}`);
    
// // // }
// // // var a = 9
// // var b = 3
// // var operator = "*"
// // if(operator == "+"){
// //     console.log(a+b);
    
// // }else if(operator == "-"){
// //     console.log(a-b);
    
// // }else if(operator == "*"){
// //     console.log(a*b);
    
// // }else if(operator == "/"){
// //     console.log(a/b);
    
// // }else{
// //     console.log("invalid operator");
    
// // }

// // var num = 2
// // for(var i = 1; i<=10; i++){
// //     console.log(`${num} * ${i} = ${num*i}`);
    
// // }

// // var a = 5
// // var fact = 1
// // for(var b = 1; b<=a; b++){
// //     fact = fact*b
// // }
// // console.log(fact);

// // var a = 10
// // var sum = 0
// // for(var i = 1; i<=a; i++){
// //     sum += i
// // }
// // console.log(sum);

// // var num = 12
// // for(var i = 1; i<=12; i++){
// //     console.log(`${num} * ${i} = ${num*i}`);
    
// // }

// // var b = 5
// //var  fact = 1
// // for(var i = 1; i<=b; i++){
// //     fact = fact*i
// // }
// // console.log(fact);

// // var c = 7
// // var isprime = "i am the prime number"
// // if(c%2==0){
// //     isprime = "i am not the prime"
// // }
// // console.log(isprime);

// // var num = 18
// // var fact = Math.sqrt(num)
// // console.log(fact);

// // var arr = []
// // for(var i = 1; i<=30; i++){
// //     if(i%2==0){
// //         arr.push(i)
// //     }
// // }
// // console.log(arr);

// var a = 10
// var sum =0
// for(var i = 1; i<=a; i++){
//     sum += i
// }
// console.log(sum);

// // var num = 135
// // var num1 = 235
// // var lastdigit = num%10
// // var lastdigit1 = num1%10



// // var a = 10
// // var b = 0
// // for(var i = 1; i<= a; i++){
// //     b += i
// // }
// // console.log(b);


//  var b = 5
// // // var  fact = 1
// // // for(var i = 1; i<=b; i++){
// // //     fact = fact*i
// // // }
// // // console.log(fact);


// // var add = 10
// // var sum = 1
// // for(var i = 1; i<=add; i++){
// //     sum = add*i
// //     console.log(sum,i);
    
// // }
// // // // var a = 20
// // // // var sum = 0
// // // // for(var i = 1; i<=a; i++){
// // // //     sum+= i
// // // // }
// // // // console.log(sum);


// var add = 20
// var sum = 1
// for(var i = 1; i<=add; i++){
//     sum = add*i
//     console.log(sum,i);
    
// }

// var num = 10
// for(var i = 1; i<=10; i++){
//     console.log(`${num} * ${i} = ${num*i}`);
    
// }

// var num = 20
// for(var i = 1; i<=10; i++){
//     console.log(`${num} * ${i} = ${num*i}`);
    
// }

// var a = 9
// var b = 9
// var operator = "+"
// if(operator=="*"){
//     console.log(a*b);
    
// }else if(operator=="+"){
//     console.log(a+b);
    
// }else if(operator=="-"){
//     console.log(a-b);
    
// }else if(operator=="/"){
//     console.log(a/b);
    
// }else{
//     console.log("invalid operator");
    
// }

// var a = 135
// var b = 235
// var lastdigit = a%10
// var lastdigit1 = b%10
// if(lastdigit == lastdigit1){
//     console.log("lastdigits are  same");
    
// }else{
//     console.log("lastdigits are not same");
    
// }

var a = 143
var b = 225
var lastdigit = a%10
var lastdigit1 = b%10
if(lastdigit == lastdigit1){
    console.log("last digits are same");
    
}else{
  console.log("last digits are not same");
  
}