let user = {};

user.name = prompt("Your name?");

user.age = prompt("Your age?");

user.sex = prompt("Your sex?");

console.log(user);


let a = +prompt('a?', '');
console.log(a) // string
a = +a
console.log(a) // number

switch(a)
{
    case 0:
        alert(0);
        break;
    case 1: 
        alert(1);
        break;
    case 2:
    case 3:
        alert( '2,3' );
        break;
}

let sum = 0;
for (let i = 2; i <= 100; i += 2)
{
    sum += i;
}

console.log(sum);

sum = 0;
let i = 2; 
while (i <= 100)
{
    sum += i;
    i += 2;
}

console.log(sum);