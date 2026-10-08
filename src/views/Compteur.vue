<script setup>
import { ref } from 'vue'

const compteur = ref(0)

function incrementer() {
  compteur.value++
}

function decrementer() {
  compteur.value--
}
</script>

<template>
  <div class="compteur">
    <h1>Compteur</h1>

    <p>{{ compteur }}</p>

    <div class="boutons">
      <button @click="incrementer">+</button>
      <button @click="decrementer">-</button>
    </div>
  </div>
</template>

<style>
.compteur {
  text-align: center;
  margin-top: 200px;
}

.compteur p {
  font-size: 40px;
}

.boutons {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.boutons button {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  font-size: 30px;
  border: none;
  cursor: pointer;
}
</style>