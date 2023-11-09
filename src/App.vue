<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <nav>
        <RouterLink to="/home">HOME</RouterLink><br>
        <RouterLink to="/contact">CONTACT</RouterLink><br>
        <RouterLink to="/about">ABOUT</RouterLink><br>
        <RouterLink to="/producte/:id">PRODUCTE</RouterLink><br>
        <RouterLink to="/llistaDeProduces">LLISTA DE PRODUCTES</RouterLink>
    </nav>
    <RouterView></RouterView>
</template>