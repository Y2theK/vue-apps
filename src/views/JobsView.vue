<template>
  <h1>Jobs List</h1>
  <div v-for="job in jobs" :key="job.id" class="jobs">
    <router-link :to="{ name: 'jobs-detail', params: { id: job.id } }">
      <h3>{{ job.title }}</h3>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobs: [
        { title: "Web Designer", id: 1, details: "lorem" },
        { title: "Web Developer", id: 2, details: "lorem b" },
        { title: "Web Backend", id: 3, details: "lorem a" },
      ],
    };
  },
};
</script>

<style>
.jobs h3 {
  background: #f4f4f4;
  padding: 20px;
  border-radius: 10px;
  margin: 10px auto;
  max-width: 600px;
  cursor: pointer;
  color: #444;
}
.jobs h3:hover {
  background: #ddd;
}
.jobs a {
  text-decoration: none;
}
</style>