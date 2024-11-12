let nickname = '私のニックネームはごっしーです。';
let age = nickname + '年齢は２８歳です。';
console.log(age);


let languages = ['JavaScript', 'PHP', 'Ruby', 'Python', 'Go'];
let templateText = `私の好きな言語は` + languages[0] + `です。次は` + languages[3] + `を勉強してみたいです。`;
console.log(templateText);


let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};
console.log(user.age);


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

function getArea() {
  let average = (playerList[0].age + playerList[1].age + playerList[2].age) / 3;
  console.log(average);
}
getArea();



sayHello()
function sayHello() {
  console.log('Hello');
}
let sayWorld = function() {
  console.log('World');
}
sayWorld();



user.birthday = '2000-09-27';
console.log(user);

user.sayHello = function () {
  console.log('Hello!');
}
user.sayHello();



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



calc.remainder = function (x, y) {
  let answer = x % y;
  return answer;
};
console.log('5を3で割った余りは' + calc.remainder(5, 3) + 'です。');



function foo() {
  let x = 1;
  console.log(x);
}
foo();
/*スコープの中で定義された変数（let）はスコープの中でしか参照できない為、Q.10の様にスコープの外側から参照しようとしてもエラーが出る。
また現状、関数を定義しただけで処理は実行されていないので、foo();をスコープの外側につけることでコンソールに出力結果が表示される。*/