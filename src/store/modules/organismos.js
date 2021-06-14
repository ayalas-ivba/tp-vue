export default{
    state:{
        listaOrganismos: []
    },
    getters: {
        getListaOrganismos(state){
            return state.listaOrganismos;
        }
    },
    mutations: {
        SET_LISTA_OrganismoS(state, lista){
            state.listaOrganismos = lista;
        },
        ADD_Organismo(state, Organismo){
            state.listaOrganismos.push(Organismo);
        }
    },
    actions: {
        setListaOrganismos({commit}, lista){
            commit('SET_LISTA_OrganismoS', lista);
        },
        addOrganismo({commit}, Organismo){
            commit('ADD_Organismo',Organismo);
        }
    }
}