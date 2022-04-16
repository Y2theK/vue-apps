<template>
  <div class="home">
    <h3>Filtering Names by input</h3>
    <input type="text" v-model="search" placeholder="search names" />
    <p>Search Terms : {{ search }}</p>
    <div v-for="name in filteringName" :key="name">
      <p>{{ name }}</p>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";
export default {
  name: "HomeView",

  setup() {
    const search = ref("");
    const names = ref(["mario", "uno", "john", "doe", "coopa", "y2k"]);
    //using computed
    const filteringName = computed(() => {
      return names.value.filter((name) => {
        return name.includes(search.value);
      });
    });
    return { names, search, filteringName };
  },
};
</script>
