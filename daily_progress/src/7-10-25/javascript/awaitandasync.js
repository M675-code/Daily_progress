import axios from 'axios'

async function getData(){
    /*axios.get("https://jsonplaceholder.typicode.com./posts")
        .then((data) => {
            console.log("data", data)
        }).catch((err) => {
            console.log("err", err)
        })*/

    /*const postsPromise = await axios.get("https://jsonplaceholder.typicode.com./posts")
    const usersPromise = await axios.get("https://jsonplaceholder.typicode.com./posts")
    
    const posts = await postsPromise;
    const users = await usersPromise;

    console.log("posts", posts);
    console.log("users", users);*/

    try{
        const postsPromise = await axios.get("https://jsonplaceholder.typicode.com./posts")
    const usersPromise = await axios.get("https://jsonplaceholder.typicode.com./posts")
    
    const posts = await postsPromise;
    const users = await usersPromise;
    } catch(err) {
        console.log("err", err)
    }        
    
    
}

getData();