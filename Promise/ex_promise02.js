const promise = new Promise((resolve, reject) => {
    // 비동기 함수
    setTimeout(() => {
        const data = "hello~";

        // 처리 결과(성공 or 실패)
        if(data != null) {
            console.log("서버 통신 성공");
            resolve("성공");
        } else {
            console.log("서버 통신 실패");
            reject(new Error('error'));
        }

        // promise.then((d) => {
        //         console.log(d);
        // })

    } , 1000); // 1000 == 1초, 1초 후에 첫번째 인수의 콜백함수를 실행하겠다
    
});

console.log(promise);

promise.then((result) => {
    console.log(result);
});
promise.catch(() => {
    console.log("catch 실행");
});
promise.finally(() => {
    console.log("finally 실행");
});

const time = setTimeout(() => {
    console.log(promise);
}, 2000);

