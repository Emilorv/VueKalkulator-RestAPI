import axios from "axios"

//Oversatt til services/service.js
const url = "http://localhost:3000"

export const loginRequest = (user) =>{
    const config = {
        headers:{
            "Content-type": "application/json",
        },
    };
    return axios.get(url + "/login", config);
}