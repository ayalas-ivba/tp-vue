<template>
<div>
  <v-form>
    <v-container>
      <h1> Seleccione un tramite</h1>
      <v-row>
        <select v-model="titulo">
          <option v-for="Tramite in listaTramites" v-bind:key="Tramite.titulo"> {{ Tramite.titulo }}</option>
        </select>
      </v-row>
     
      <div class="col-6">
        <v-btn class="mt-6" text color="primary" @click="next()"> Continuar </v-btn>
      </div>
    </v-container>
    </v-form>
</div>
</template>

<script>
import TramitesService from "../services/tramitesService";

export default {
  name: "Tramites",
  data: () => ({
    listaTramites: null,
    titulo: null,
  }),
  components: {},
  created() {
      TramitesService
        .getTramites()
        .then((response) => {
         /* console.log(response);
          var lista = response.map(function (element) {
            return element.titulo;
          });*/
          console.log("created");
          console.log(response);
          this.$store.dispatch("setListaTramites", response); 
          
          this.listaTramites = response;
        })
        .catch((err) => {
          console.log(err);
        });
    },
   mounted () {
     console.log("mounted");
     this.listaTramites = this.$store.listaTramites;
   }, 
   methods: {
    next() { 
        console.log(this.listaTramites);
        console.log(this.url);
        console.log(this.titulo);
        this.$store.dispatch("setUrl", this.url);
        localStorage.setItem("tramiteSelected", this.titulo);
    }, 
   },
   }; 
</script>
