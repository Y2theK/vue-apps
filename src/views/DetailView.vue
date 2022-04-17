<template>
  <h3>Details</h3>
  <p>
    name : {{ name }} ,age : {{ age }}, gender : {{ gender }} , bio :
    {{ bioSnippet }}
  </p>
</template>

<script>
import { computed } from "@vue/runtime-core";
export default {
  //same as options api, to use props in setup() need to pass props parameter and
  //access props.propsName
  props: ["person"],
  setup(props) {
    let name = props.person.name;
    let age = props.person.age;
    let gender = props.person.gender;
    let bioSnippet = computed(() => {
      //get 0 from 10 letter of bio
      return props.person.bio.substring(0, 10) + "....";
    });
    console.log(props);
    return { name, age, gender, bioSnippet };
  },
};
</script>

<style>
</style>