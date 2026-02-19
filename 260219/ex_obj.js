console.log('-_-');
const demo = document.querySelector('#demo');
demo.textContent = 'hello';

let user = {
    no: 1,
    id: 'aaa',
    name: 'James'
};

console.log(user.no);
console.log(user.id);
console.log(user.name);

let jUser = JSON.stringify(user);
console.log(jUser);

let user2 = JSON.parse(jUser);
console.log(user2)