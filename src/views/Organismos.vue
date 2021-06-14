<template>
  <div>
    <h1>Lista de organismos</h1>
    <v-btn @click="getOrganismos()">Ver organismos</v-btn>

    <ul id="example-1">
      <li v-for="organismo in listaOrganismos" v-bind:key="organismo.nombre">
        {{ organismo.nombre }}
      </li>
    </ul>
  </div>
</template>

<script>
import organismosService from "../services/organismosService";
export default {
  name: "organismos",
  data: () => ({
    listaOrganismos: null,
  }),
  components: {},
  methods: {
    getOrganismos() {
      organismosService
        .getOrganismos()
        .then((response) => {
          console.log(response);
          var lista = response.map(function (element) {
            return element.nombre;
          });
          console.log(lista);
          this.$store.dispatch("setListaOrganismos", lista);
          this.listaOrganismos = response;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
