import axios from "axios"

const apiClient = axios.create({
    baseURL:"http://localhost:3000",
    headers:{
            "Content-type": "application/json",
        }
})

export default{
    loginRequest(){
        return apiClient.get("/login");
    },
    isLoginSuccessful(response){
        if(response == undefined || response ==null) return false;
        if(response.data == undefined || response.data==null) return false;
        return response.data.status =="true";
    },

    postRequest(review){
        return apiClient.post('/reviews', review);
    },

    postReview(review){
        apiClient.get('/connection').then(response =>{
            alert(response.data.status)
            return apiClient.post('/reviews', review);
        }).catch((error) => {
            console.log(error);
          });
        }
}

   

  

