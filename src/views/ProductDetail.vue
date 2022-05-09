<template>
  <h2>Detail {{ $route.params.id }}</h2>
  <h2>Detail {{ product.id }}</h2>
  <h2>Detail {{ product.title }}</h2>
</template>

<script>
export default {
  name: "ProductDtail",
  props: ["id"],

  data() {
    return {
      product: {},
    };
  },
  created() {
    fetch(`https://fakestoreapi.com/products/${this.id}`)
      .then((res) => res.json())
      .then((data) => (this.product = data));
  },
};
</script>

<style>
</style>