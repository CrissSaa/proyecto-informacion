const getUsuarios = async () => {

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');       
        const data = await response.json();
    } catch (error) {
        console.log(error)
    }

    //console.log(data)
};

getUsuarios();