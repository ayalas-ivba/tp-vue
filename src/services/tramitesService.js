import http from './api/tramitesApiClient';

const getTramites = async() =>{

    return await http.get().then((response) =>{
        return response.data.results;
    }).catch((err)=>{
        return err;
    })
}
const getTramite = async(id) =>{

    http.defaults.params = {q:id}

    return await http.get().then((response) =>{
        return response.data;
    }).catch((err)=>{
        return err;
    })
}

const exported = {
    getTramites,
    getTramite
}

export default exported;