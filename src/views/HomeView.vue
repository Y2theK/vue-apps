<template>
  <div class="home">
    <h3>home</h3>
    <p ref="p">name : {{ name }} , age : {{ age }}</p>

    <button @click="handleClick">click me</button>
    <input type="text" v-model="name" />
    <button @click="age++">add 1 to age</button>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  name: "HomeView",

  setup() {
    //yyk is value of ref
    //(const name) means ref is const but value can be chanage/ reactive
    const name = ref("yyk");
    const age = ref(20);

    const handleClick = () => {
      // to access ref.value in setup(), use refName.value
      // but to need to use name.value  in template, it auto output {{ value of ref in template }}
      //can use v-model="ref" for input reactivity
      name.value = "asdf";
      age.value = 22;
    };
    return { name, age, handleClick };
  },
};
</script>
