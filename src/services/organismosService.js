import http from './api/organismosApiClient';

const getOrganismos = async() =>{

    return await http.get().then((response) =>{
        return response.data.results;
    }).catch((err)=>{
        return err;
    })
}
const getOrganismo = async(id) =>{

    http.defaults.params = {q:id}

    return await http.get().then((response) =>{
        return response.data;
    }).catch((err)=>{
        return err;
    })
}

const exported = {
    getOrganismos,
    getOrganismo
}

export default exported;