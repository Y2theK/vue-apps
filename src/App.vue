<template>
  <Menu />

  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit suscipit
    maxime itaque. Iste, non eveniet dignissimos repellat obcaecati recusandae
    labore delectus nostrum libero eligendi consequuntur cumque, quis
    doloremque, asperiores cupiditate.
  </p>
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

