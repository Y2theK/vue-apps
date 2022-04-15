<template>
  <div class="home">
    <h3>home</h3>
    <p ref="p">name : {{ name }} , age : {{ age }}</p>

    <button @click="handleClick">click me</button>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  name: "HomeView",
  // created() {
  //   console.log("created");
  // },
  // mounted() {
  //   console.log("mounted");
  // },

  setup() {
    console.log("setup");
    let name = "mario";
    let age = 30;
    //null is value of ref
    //const p mean ref is const but value can reactive
    const p = ref(null);
    console.log(p.value);
    // return { name: name, age: age };
    //property shorthand
    const handleClick = () => {
      console.log("you click me");
      //not change because it is compostion  not reactive by default
      name = "gigi";
      console.log(p.value);
      p.value.textContent = "hello reactive";
    };
    return { name, age, handleClick, p };
  },
};
</script>
