const uname = document.querySelector("#name");
const email = document.querySelector("#email");
const website = document.querySelector("#website");
const address = document.querySelector("#address");



const getUsuarios = async () => {
    const  { data } = await axios.get('https://jsonplaceholder.typicode.com/users');

    uname.textContent = data[0].name;
    email.textContent = data[0].email;
    website.textContent = data[0].website;
    address.textContent = data[0].address.city;


};

getUsuarios();