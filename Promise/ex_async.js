async function myFunction() {
    return "Hello"; // Promise.resolve("Hello")와 동일
}

// console.log(myFunction());

myFunction().then((data) => {
    console.log(data);
});
myFunction().then(console.log);