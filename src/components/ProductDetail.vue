<template>
    <div>
        <h1>Detalls del producte</h1>
        <div v-if="producte">
            <p> Nom: {{ producte.nom }}</p>
            <p> Descripció: {{ producte.descripcio }}</p>
            <p> Preu: {{ producte.preu }}</p>
        </div>
        <div v-else>
            <p>No s'ha trobat el producte</p>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            producte: null,
        };
    },
    created() {
        const productId = this.$route.params.id;

        const productes = [
            { id: 1, nom: 'Producte 1', descripcio: 'Descripció del producte 1', preu: 10 },
            { id: 2, nom: 'Producte 2', descripcio: 'Descripció del producte 2', preu: 20 },
            { id: 3, nom: 'Producte 3', descripcio: 'Descripció del producte 3', preu: 30 }
        ];

        const trobarProducte = productes.find((producte) => producte.id === parseInt(productId));

        if (trobarProducte) {
            this.producte = trobarProducte;
        }
    },
};
</script>
  