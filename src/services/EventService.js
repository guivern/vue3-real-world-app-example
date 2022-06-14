import axios from 'axios';

const httpClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/guivern/testjsonserver',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getEvents(){
    return httpClient.get('/events');
  }
}