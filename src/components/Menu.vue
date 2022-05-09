<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Shop</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <router-link :to="{ name: 'home' }">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li></router-link
          >
          <router-link :to="{ name: 'about' }">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#">About</a>
            </li></router-link
          >
          <router-link :to="{ name: 'product' }">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#">Product</a>
            </li></router-link
          >

          <router-link :to="{ name: 'profile' }">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#">Profile</a>
            </li>
          </router-link>
          <router-link :to="{ name: 'login' }">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#">Login</a>
            </li></router-link
          >
        </ul>

        <!-- <form class="d-flex">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form> -->
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: "Menu",
};
</script>
