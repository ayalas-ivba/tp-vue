export default{
    state:{
        listaMuseos: []
    },
    getters: {
        getListaMuseos(state){
            return state.listaMuseos;
        }
    },
    mutations: {
        SET_LISTA_MUSEOS(state, lista){
            state.listaMuseos = lista;
        },
        ADD_MUSEO(state, museo){
            state.listaMuseos.push(museo);
        }
    },
    actions: {
        setListaMuseos({commit}, lista){
            commit('SET_LISTA_MUSEOS', lista);
        },
        addMuseo({commit}, museo){
            commit('ADD_MUSEO',museo);
        }
    }
}