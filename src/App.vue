<template>
  <Menu />
  <router-view></router-view>
</template>

<style>
</style>
<script>
import Menu from "./components/Menu.vue";

export default {
  name: "App",
  components: {
    Menu,
  },
  data() {
    return {
      message: "hello from vue shop",
    };
  },
};
</script>

