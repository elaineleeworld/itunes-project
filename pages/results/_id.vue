<template>
  <div>
    <h1>Hello from results route {{$route.params.id}}</h1>
    {{$store.state.albums}}
  </div>
</template>

<script>
export default {
  middleware: "search"
};
</script>

<style>
</style>
