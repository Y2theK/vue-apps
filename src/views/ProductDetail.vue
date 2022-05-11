<template>
  <div class="container">
    <h1 v-if="loading">Loading ...</h1>
    <div class="row" v-else>
      <div class="col-md-4">
        <img :src="product.image" class="img-fluid" :alt="product.title" />
      </div>
      <div class="col-md-8 p-5">
        <h1 class="display-5">{{ product.title }}</h1>
        <h3 class="text-muted">{{ product.price }}</h3>
        <h2 class="my-4">{{ product.description }}</h2>
        <router-link
          :to="{ name: 'product' }"
          class="btn btn-outline-secondary mr-5"
          >Go Back</router-link
        >
        <button class="btn btn-primary ms-5">Add to Cart</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductDetail",

  data() {
    return {
      product: {},
      loading: false,
    };
  },
  created() {
    this.loading = true;
    fetch(`https://fakestoreapi.com/products/${this.$route.params.id}`)
      .then((res) => res.json())
      .then((data) => {
        this.product = data;
        this.loading = false;
      })
      .then((err) => (this.loading = false));
  },
};
</script>

<style>
</style>