<template>
  <div class="home">
    <h3>Filtering Names by input</h3>
    <input type="text" v-model="search" placeholder="search names" />
    <p>Search Terms : {{ search }}</p>
    <div v-for="name in names" :key="name">
      <p>{{ name }}</p>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { computed, watch, watchEffect } from "@vue/runtime-core";
export default {
  name: "HomeView",

  setup() {
    const search = ref("");
    const names = ref(["mario", "uno", "john", "doe", "coopa", "y2k"]);
    //watch value everytimes they change
    //need to pass parameter to watch
    //search is a watched parameter and watch func ran when value of search chaange
    watch(search, () => {
      console.log("watch func ran");
    });

    //ran initally first
    //no need to pass parameter to watch / it watch all the value which used inside its function
    //watch value change inside its function and watcheffect func ran when value of used inside its func changes
    //search is used in its function and it watch search initially first and run everytimes search change
    watchEffect(() => {
      console.log("watch effect func ran" + search.value);
    });
    return { names, search };
  },
};
</script>
