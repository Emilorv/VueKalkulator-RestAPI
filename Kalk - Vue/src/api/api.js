import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true
});

export default {
  getHome() {
    return apiClient.get('/calculate/');
  },

  calculate(regnestykke){
      return apiClient.get(`/calculate/${regnestykke}`)
    }
};