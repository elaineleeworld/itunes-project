<template>
  <div>
    <h1>Hello from results route {{$route.params.id}}</h1>
    <!-- {{$store.state.albums}} -->
    <h2>Output</h2>
    {{albumData}}
  </div>
</template>

<script>
import axios from "axios";
export default {
  asyncData({ params }) {
    return axios
      .get(`https://itunes.apple.com/search?term=${params.id}&entity=album`)
      .then(response => {
        return { albumData: response.data.results };
      });
  },
  middleware: "search"
};
</script>

<style>
</style>
