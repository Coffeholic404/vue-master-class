<script setup>
// import { RouterLink, RouterView } from 'vue-router'
import TheNavbar from './components/TheNavbar.vue';

</script>

<template>
  <header>
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->
    <the-navbar />
    <div class="container">

      <router-view/>
    </div>

      <!-- <nav> -->
        <!-- <RouterLink to="/">Home</RouterLink> -->
        <!-- <RouterLink to="/about">About</RouterLink> -->
      <!-- </nav> -->
  </header>

  <!-- <RouterView /> -->
</template>
