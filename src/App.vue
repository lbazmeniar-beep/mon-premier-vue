<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router'
</script>

<template>
  <nav class="menu">
    <RouterLink to="/compteur">Compteur</RouterLink>
    <RouterLink to="/moyenne">Moyenne</RouterLink>
  </nav>

  <RouterView />
</template>

<style scoped>
.menu {
  display: flex;
  gap: 16px;
  padding: 12px;
  border-bottom: 1px solid #ccc;
  margin-bottom: 16px;
}

.menu a {
  text-decoration: none;
  color: #42b883;
  font-weight: bold;
}

.menu a.router-link-active {
  color: #35495e;
  text-decoration: underline;
}
</style>