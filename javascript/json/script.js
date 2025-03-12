//1
const users = [
    {
        id: 1,
        name: "Isaac",
        email: "isaac@devpipeline.com",
        password: "password"
    },
    {
        id: 2,
        name: "John",
        email: "john@devpipeline.com",
        password: "password"
    },
    {
        id: 3,
        name: "Boris",
        email: "boris@devpipeline.com",
        password: "password"
    }
];

users.forEach(user => {console.log(`Hello, ${user.name}, your ID Number is ${user.id}.`)});


//2
function fetchSWAPIData(url) {
    return new Promise((resolve,reject) => {
        const object = new XMLHttpRequest();
        object.open("GET", url, true);
        object.onload = () => {
            if (object.status >= 200 && object.status < 300) {
                resolve(JSON.parse(object.responseText));
            } else {
                reject(`Error! ${object.status}: ${object.statusText}`);
            }
        };
        object.onerror = () => reject("Error occured.");
        object.send();
    });
}

const userInput = prompt("Enter a Star Wars character ID (1-83): ");

if (userInput) {
    const apiURL = `https://swapi.tech/api/people/${userInput}`;

    fetchSWAPIData(apiURL)
    .then(data => {
        console.log("Full Response Data: ", data);
        alert(`Big success! Data retrieved for character ID ${userInput}`);
        return data.result;
    })
    .then(result => {
        console.log(`Character Name: ${result.properties.name}`);
        alert(`The character's name is: ${result.properties.name}`);
    })
    .catch(error => {
        console.error("Error: ", error);
        alert(`Failed to fetch relevant data: ${error}`)
    })
}