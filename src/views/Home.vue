<template>
  <div class="flex flex-col p-8">

    <div class="flex justify-center gap-2 mt-2">
      <router-link 
        :to="{ name: 'byLetter', params: { letter } }" 
        v-for="letter of letters" 
        :key="letter"
      >
        {{ letter  }}
      </router-link>
    </div>
  </div>
  
  
</template>
<script setup>
import { computed, onMounted } from 'vue';
import store from '../store';
import axiosClient from '../axiosClient.js';

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("");

onMounted(async () => {
  try {
    const response = await axiosClient.get('list.php?i=list');
    console.log(response.data);
  } catch (err) {
    console.error(err);
  }

})
</script>