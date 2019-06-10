<template>
  <div>
    <h1>Hello from results route {{$route.params.id}}</h1>
  </div>
</template>

<script>
export default {
  middleware: "search"
};
</script>

<style>
</style>
