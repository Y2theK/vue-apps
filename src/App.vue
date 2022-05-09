<template>
  <Menu />
  <router-view></router-view>
</template>

<style>
</style>
<script>
import Menu from "./components/Menu.vue";
import Product from "./views/Product.vue";
import Profile from "./views/Profile.vue";

export default {
  name: "App",
  components: {
    Menu,
    Product,
    Profile,
  },
  data() {
    return {
      message: "hello from vue shop",
    };
  },
};
</script>

