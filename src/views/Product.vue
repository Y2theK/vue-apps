<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-4 mb-4" v-for="i in [1, 2, 3, 4, 5, 6]" :key="i">
        <div class="card">
          <div class="card-body text-center">
            <img src="@/assets/logo.png" alt="" />
            <p class="text-muted fw-bold mt-3">Porduct name</p>
            <h3>$ 100 . 54</h3>
            <div class="btn btn-primary w-100">More Detail</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>