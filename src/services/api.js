import axios from 'axios'

const api = axios.create({
    baseURL: 'http://jsonplaceholder.typicode.com'
});


async function ListarFotos(limit) {
    const response = await api.get('/albums');
    if(response.status === 200){
        return response.data;
    }
    else{
        return [];
    }
}

async function ListarPostagens() {
    const response = await api.get('/posts');
    if(response.status === 200){
        return response.data;
    }
    else{
        return [];
    }
}

async function ListarTodo() {
    const response = await api.get('/todos');
    if(response.status === 200){
        return response.data;
    }
    else{
        return [];
    }
}

export { ListarFotos, ListarPostagens, ListarTodo };