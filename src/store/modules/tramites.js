export default{
    state:{
        url: '',
        titulo: '',
        bajada: '',
        cuerpo: '',
        documentos: [],
        listaTramites: []
    },
    getters: {
        getListaTramites(state){
            return state.listaTramites;
        },
        url(state){
            return state.url;
        },
        titulo(state){
            return state.titulo;
        }
    },
    mutations: {
        SET_LISTA_TramiteS(state, lista){
            state.listaTramites = lista;
        },
        ADD_Tramite(state, Tramite){
            state.listaTramites.push(Tramite);
        },
        SET_URL(state,url){
            state.url = url;
        },
        SET_TITULO(state,titulo){
            state.titulo = titulo;
        },
    },
    actions: {
        setListaTramites({commit}, lista){
            commit('SET_LISTA_TramiteS', lista);
        },
        addTramite({commit}, Tramite){
            commit('ADD_Tramite',Tramite);
        },
        setUrl({commit},url){
            commit('SET_URL',url);
        },
        setTitulo({commit},titulo){
            commit('SET_TITULO',titulo);
        }
        
    }

}