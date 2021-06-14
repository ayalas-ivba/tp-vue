import http from './api/museosApiClient';

const getMuseos = async() =>{

    /* http.defaults.params = {q:'argentina'} */

    return await http.get().then((response) =>{
        return response.data.results;
    }).catch((err)=>{
        return err;
    })
}
const getMuseo = async(id) =>{

    http.defaults.params = {q:id}

    return await http.get().then((response) =>{
        return response.data;
    }).catch((err)=>{
        return err;
    })
}

const exported = {
    getMuseos,
    getMuseo
}

export default exported;