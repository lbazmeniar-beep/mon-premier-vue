```vue
<script setup>
import { ref } from 'vue'

const ds = ref(0)
const tp = ref(0)
const ex = ref(0)

const moyenne = ref(0)
const mention = ref('')

function calculer() {
  moyenne.value = (ds.value + tp.value + ex.value) / 3

  if (moyenne.value < 10) {
    mention.value = 'Ajourné'
  } else if (moyenne.value < 12) {
    mention.value = 'Passable'
  } else if (moyenne.value < 14) {
    mention.value = 'Assez Bien'
  } else if (moyenne.value < 16) {
    mention.value = 'Bien'
  } else {
    mention.value = 'Très Bien'
  }
}
</script>

<template>
  <div>
    <h1>Calcul de moyenne</h1>

    <label>DS :</label>
    <input type="number" v-model.number="ds">

    <br><br>

    <label>TP :</label>
    <input type="number" v-model.number="tp">

    <br><br>

    <label>EX :</label>
    <input type="number" v-model.number="ex">

    <br><br>

    <button @click="calculer">Calculer</button>

    <h2>Moyenne : {{ moyenne.toFixed(2) }}</h2>
    <h2>Mention : {{ mention }}</h2>
  </div>
</template>
```
