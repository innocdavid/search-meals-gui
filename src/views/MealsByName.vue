<template>
  <div class="p-8 bp-0">
    <input 
        type="text" 
        v-model="keyword"
        class="rounded border-2 border-gray-200 w-full"
        placeholder="Search for meals" 
        @change="searchMeals"
      />
  </div>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
    <div 
      v-for="meal of meals" 
      :key="meal.idMeal"
      class="bg-white shadow rounded-xl"
    >
      <router-link :to="{name: 'mealDetails', params: {id: meal.idMeal}}">
        <img 
          :src="meal.strMealThumb" 
          :alt="meal.strMeal" 
          class="rounded-t-xl w-full h-45 object-cover"
        />
      </router-link>
      <div class="p-3">
        <h3 class="p-3 font-semibold">{{ meal.strMeal }}</h3>
        <div class="p-3">
          <p class="mb-4"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit iure consequatur beatae. Ea quibusdam veniam, veritatis pariatur deserunt non</p>
          <div class="flex items-center justify-between">
            <a 
              :href="meal.strYoutube" 
              target="_blank"
              class="px-3 py-2 rounded border-2 border-red-600 text-white bg-red-500 hover:bg-red-600 transition-colors"
            >
              Youtube
            </a>
          </div>
          
        </div>
      </div>
      
    </div>
  </div>
  
</template>
<script setup>
import { ref, computed, onMounted } from 'vue';
import store from '../store';
import { useRoute } from 'vue-router';

const route = useRoute();
const keyword = ref('');
const meals = computed(() => store.state.searchedMeals);

function searchMeals() {
  store.dispatch('searchMeals', keyword.value);
}

onMounted(() => {
  keyword.value = route.params.name;
  if (keyword.value) {
    searchMeals();
  }
})
</script>