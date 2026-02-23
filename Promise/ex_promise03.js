fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => console.log(data[0]))
    .catch(err => console.log('에러 발생'))
    .finally(() => console.log('마무리'));


fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log('에러 발생');
    })
    .finally(() => {
        console.log('마무리');
    });