<template>
  <div class="navbar">

<!-- 選單 -->
<ul>
    <li><RouterLink class="active" :to="{ name: 'home-link' }"><i class="fa-solid fa-house-chimney"></i>首頁</RouterLink></li>
    <li><RouterLink :to="{ name: 'stock-link' }"><i class="fa-solid fa-book"></i>連結一</RouterLink></li>

</ul>
</div>

</template>

<script setup>
import { RouterLink } from 'vue-router';

</script>

<style>
@import "@/assets/navbar.css";
</style>
