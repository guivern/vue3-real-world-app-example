import axios from 'axios'

export default function apiClient() {
  return axios.create({
    baseURL: 'https://my-json-server.typicode.com/Code-Pop/Real-World_Vue-3',
    withCredentials: false,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })
}
