<template>
  <div class="home">
    <h3>ref</h3>
    <p>name : {{ ninjaOne }} , age : {{ ninjaOne }}</p>
    <button @click="updateNinjaOne">updateNinjaOne</button>
    <h3>reactive</h3>
    <p>name : {{ ninjaTwo }} , age : {{ ninjaTwo }}</p>
    <button @click="updateNinjaTwo">updateNinjaTwo</button>
  </div>
</template>

<script>
import { reactive, ref } from "@vue/reactivity";
export default {
  name: "HomeView",
  // ref vs reactive
  // no need to use ninjaTwo.value.name  like in ref/ just use ninjaTwo.name and can auto acces value
  setup() {
    const ninjaOne = ref("ref");
    //reactive cannot change with primitive data type like in ref
    const ninjaTwo = reactive("reactive");
    const updateNinjaOne = () => {
      ninjaOne.value = "ref updated";
    };
    const updateNinjaTwo = () => {
      // no need to use ninjaTwo.value.name / just use ninjaTwo.name and can auto acces value
      ninjaTwo = "reactive updated";
    };
    return { ninjaOne, ninjaTwo, updateNinjaOne, updateNinjaTwo };
  },
};
</script>
