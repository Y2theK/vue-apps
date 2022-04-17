<template>
  <div class="home">
    <h3>Props</h3>
    <div v-for="person in persons" :key="person.name">
      <detail-view :person="person"></detail-view>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import DetailView from "./DetailView.vue";
export default {
  name: "HomeView",
  components: { DetailView },

  setup() {
    const persons = ref([
      {
        name: "joe",
        age: 22,
        gender: "male",
        bio: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste sequi numquam ea molestiae cupiditate id facilis sint nisi natus tempore! Esse repudiandae fuga doloremque in numquam cum iure minus labore?",
      },
      { name: "doe", age: 23, gender: "male", bio: "lorem" },
      { name: "fee", age: 21, gender: "female", bio: "ispam" },
    ]);

    return { persons };
  },
};
</script>
