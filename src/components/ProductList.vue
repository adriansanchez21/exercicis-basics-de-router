<template>
  <div>
    <h1>Llista de productes</h1>
    <ul>
      <li v-for="producte in productes" :key="producte.id">
        <router-link :to="'/producte/' + producte.id">{{ producte.nom }}</router-link>
      </li>
    </ul>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      productes: [
        { id: 1, nom: 'Producte 1', descripcio: 'Descripció del producte 1', preu: 10 },
        { id: 2, nom: 'Producte 2', descripcio: 'Descripció del producte 2', preu: 20 },
        { id: 3, nom: 'Producte 3', descripcio: 'Descripció del producte 3', preu: 30 }
      ],
    };
  },
};
</script>
  
<style scoped>
ul, li {
  list-style-type: none;
}
</style>