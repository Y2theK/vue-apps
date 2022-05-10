<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-5">
        <div class="card">
          <div class="card-body">
            <h3 class="mt-2 mb-3">Login</h3>
            <div class="alert alert-danger" v-if="message">{{ message }}</div>
            <form action="" method="post" class="form" @submit.prevent="login">
              <div class="form-group mt-3">
                <input
                  v-model="email"
                  type="text"
                  name=""
                  id=""
                  class="form-control"
                  placeholder="Email"
                />
              </div>
              <div class="form-group mt-3">
                <input
                  v-model="password"
                  type="password"
                  name=""
                  id=""
                  class="form-control"
                  placeholder="Password"
                />
              </div>
              <button class="btn btn-primary w-100 mt-3">Login</button>
            </form>
          </div>
          <div class="card-footer">
            <small>
              <span class="text-muted">Do you have an account?</span>
              <a href="#"> Register </a></small
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      message: "",
    };
  },
  methods: {
    login() {
      if (this.email == "admin@admin.com" && this.password == "asdfasdf") {
        localStorage.setItem("auth", this.email);
        this.$router.push("/profile");
      } else {
        this.message = "Please enter correct email and password";
      }
    },
  },
};
</script>

<style>
</style>