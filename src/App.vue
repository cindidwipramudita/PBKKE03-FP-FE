<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <AddTrain msg="Welcome to Your Vue.js App" />
</template>

<script>
import AddTrain from "./components/AddTrain.vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";

export default {
  name: "App",
  components: {
    AddTrain,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
