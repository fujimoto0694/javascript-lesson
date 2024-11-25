/*Q1*/
let nickname = 'ごっしー';
let age =28;
let string ='私のニックネームは' + nickname + 'です。年齢は ' + age +'歳です。'
console.log(string);


/*Q2*/
let languages = ['JavaScript', 'PHP', 'Ruby', 'Python', 'Go'];
let templateText = `私の好きな言語は ${languages[0]} です。次は ${languages[3]} を勉強してみたいです。`;
console.log(templateText);


/*Q3*/
let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};
console.log(user.age);


/*Q4*/
let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
];
console.log(playerList[1].favorites[1]);



/*Q5*/
let total = playerList.reduce(function(sum, element) {
  return sum + element.age;
}, 0);
function getArea() {
  let average = total / playerList.length;
  console.log(average);
}
getArea();



/*Q6*/
sayHello()
function sayHello() {
  console.log('Hello');
}
let sayWorld = function() {
  console.log('World');
}
sayWorld();



/*Q7*/
user.birthday = '2000-09-27';
console.log(user);

user.sayHello = function () {
  console.log('Hello!');
}
user.sayHello();



/*Q8*/
let calc = {};
calc.add = function(x, y) {
  console.log(x + y);
};
calc.subtract = function(x, y) {
  console.log(x - y);
};
calc.multiply = function(x, y) {
  console.log(x * y);
};
calc.divide = function(x, y) {
  console.log(x / y);
};

calc.add(3, 4);
calc.subtract(12, 2);
calc.multiply(7, 7);
calc.divide(35, 7);



/*Q9*/
remainder = function (x, y) {
  return x % y;
};
console.log('5を3で割った余りは' + remainder(5, 3) + 'です。');



/*Q10*/
function foo() {
  let x = 1;
  console.log(x);
}
foo();
/*スコープの中で定義された変数（let）はスコープの中でしか参照できない為、Q.10の様にスコープの外側から参照しようとしてもエラーが出る。
また現状、関数を定義しただけで処理は実行されていないので、foo();をスコープの外側につけることでコンソールに出力結果が表示される。*/



/*Q1*/
let random = Math.floor(Math.random()*10);
console.log(random);



/*Q2*/
function sayHello() {
  console.log('Hello World!');
}
setTimeout(sayHello, 3000);



/*Q3*/
let num = 2;
if (num === 0) {
  console.log('num is 0');
} else if (num > 0) {
  console.log('num is greater than 0');
} else if (num < 0) {
  console.log('num is less than 0');
}



/*Q4*/
let numbers = [];
for (let i =0; i<100; i++) {
  numbers.push(i);
};
console.log(numbers);



/*Q5*/

let mixed = [4, '2', 5, '8', '9', 0, 1];
for (let i = 0; i < mixed.length; i++) {
  let element = mixed[i];
  
  if (typeof element === 'number' && element % 2 === 0) {
      console.log('even');
    } else if(typeof element === 'number' && element % 2 === 1) {
      console.log('odd');
    } else {
    console.log('not number');
  }
}
