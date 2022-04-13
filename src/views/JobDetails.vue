<template>
  <h1>Job Detail</h1>
  <div v-if="job">
    <h5>job id is {{ id }}</h5>
    <h3>job is {{ job.title }}</h3>
    <p>job detail is {{ job.details }}</p>
  </div>

  <div v-else>
    <p>loading job detail</p>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      job: null,
    };
  },
  mounted() {
    fetch("http://localhost:3000/jobs/" + this.id)
      .then((res) => res.json())
      .then((data) => (this.job = data))
      .catch((err) => console.log(err.message));
  },
};
</script>

<style>
</style>