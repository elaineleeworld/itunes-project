<template>
  <div>
    <h1>Results for {{$route.params.id}}</h1>
    <Card/>
    <!-- {{$store.state.albums}} -->
    <div v-if="albumExists">{{albumData}}</div>
    <div v-else>
      <h1>Could not find any albums</h1>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Card from "~/components/Card.vue";
export default {
  asyncData({ params }) {
    return axios
      .get(`https://itunes.apple.com/search?term=${params.id}&entity=album`)
      .then(response => {
        return { albumData: response.data.results };
      });
  },
  components: {
    Card
  },
  middleware: "search",
  computed: {
    albumExists() {
      return this.albumData.length > 0;
    }
  }
};
</script>

<style>
</style>
