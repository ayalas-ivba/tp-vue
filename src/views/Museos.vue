<template>
  <div>
    <h1>Lista de museos</h1>
    <v-btn @click="getEntorno()">Ver entorno</v-btn>
    <v-btn @click="getMuseos()">Ver museos</v-btn>

    <ul id="example-1">
      <li v-for="museo in listaMuseos" v-bind:key="museo.nombre">
        {{ museo.nombre }}
      </li>
    </ul>
  </div>
</template>

<script>
import museosService from "../services/museosService";
export default {
  name: "museos",
  data: () => ({
    listaMuseos: null,
  }),
  components: {},
  methods: {
    getEntorno() {
      console.log(process.env.VUE_APP_MUSEOS_URL);
      console.log(process.env);
      },
    getMuseos() {
      museosService
        .getMuseos()
        .then((response) => {
          console.log(response);
          var lista = response.map(function (element) {
            return element.nombre;
          });
          console.log(lista);
          this.$store.dispatch("setListaMuseos", lista);
          this.listaMuseos = response;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
