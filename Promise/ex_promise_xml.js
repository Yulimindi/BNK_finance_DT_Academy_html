function getUserData() {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        // 응답 받기
        xhr.onload = () => {
            const user = xhr.responseText;
            resolve(user);
        };

        // 통신 설정
        xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');

        // 전송
        xhr.send();
    });
}

getUserData()
    .then((data) => {
        return JSON.parse(data);
    })
    .then((result) => {
        console.log(result);
    });