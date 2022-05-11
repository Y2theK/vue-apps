<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-4 mb-4" v-for="product in products" :key="product.id">
        <div class="card">
          <div class="card-body text-center">
            <img :src="product.image" alt="" class="p-image" />
            <h5 class="text-muted fw-bold mt-3">{{ product.title }}</h5>
            <h3>${{ product.price }}</h3>
            <router-link
              class="btn btn-primary w-100"
              :to="{ name: 'product-detail', params: { id: product.id } }"
              >More Detail</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      products: [],
    };
  },
  // by js default
  // created() {
  //   fetch("https://fakestoreapi.com/products")
  //     .then((res) => res.json())
  //     .then((data) => (this.products = data));
  // },
  // by axios
  created() {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => (this.products = response.data));
  },
};
</script>

<style>
.p-image {
  height: 150px;
}
</style>