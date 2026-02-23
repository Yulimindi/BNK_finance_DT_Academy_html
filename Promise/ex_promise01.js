const promise = new Promise((resolve, reject) => {
   console.log("Executor 실행");
   let obj = {msg : 'hello'};
//    reject(new Error('에러 발생'));
   resolve("가나디");
});

console.log(promise);
promise.then((data) => {
    console.log(data);
});
console.log("-- END --");