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