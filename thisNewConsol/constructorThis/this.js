'use strict'
// function showThis(a,b){
//     console.log(this);
//    function sum(){
//     console.log(this);
//     return this.a + this.b;
//    } 
//    console.log(sum());
// }
// showThis(4,5);

// const obj={
// a:20,
// b:15,
// sum:function(){
//     function shout(){
//     console.log(this);
// }
// shout();
// }
// };
// obj.sum();

// function sayName(surname){
//     console.log(this);
//     console.log(this.name+surname);
// }
// const user={
//     name:'John'
// };
// sayName.call(user, ' Smith');//Ручное присвоение контекста
// sayName.apply(user, [' Smith']);//Ручное присвоение контекста

// function count(num){
//     return this*num;
// }

// const double=count.bind(2);//double-это новая функция у 
// //которой жестко привязанный контекст 2(которая будет удваивать num),
// //который передается в this
// console.log(double(3));
// console.log(double(13));


//1)Обычная функцияЖ this=window, но если use strict undefined
//2)Контекст у методов объекта-сам объект
//3)this в конструкторах и классах-это новый экземпляр объекта
//4)Ручная привязка this: call,apply,bind

const btn=document.querySelector('button');

btn.addEventListener('click', function(){
   this.style.backgroundColor='red';
});


const obj={
    num:5,
    sayNumber:function(){
        const say =()=>{
            console.log(this.num);
        };
        say();
    }
};
obj.sayNumber();

const double=a=>a*2;
console.log(double(4));