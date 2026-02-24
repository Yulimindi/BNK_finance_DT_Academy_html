console.log("1. start");

async function getData() {
    console.log("3. 함수 시작");

    const result = await new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("5. Promise 완료");
            resolve("데이터");
        },2000);
    });

    console.log("6. await 후 결과 : " + result);
    return result;
}


console.log("2. 함수 호출 전");
let result = getData();

result.then((data) => {
    console.log("4. then : " + data);
});

setTimeout(() => {
    console.log("7. result : " + result);
}, 3000)
console.log("4. 함수 호출 후");