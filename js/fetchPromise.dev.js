// const getUsuarios = () => {
//     fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
//         return response.json();
//     }).then((response)=>{
//         console.log(response);
//     })

// }

const getUsuarios = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(() => console.log('err'));

}

getUsuarios();