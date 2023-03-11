<template>
  <div id="app">
    <Layout></Layout>
  </div>
</template>

<script>
import Layout from './components/Layout';

export default {
  name: 'App',
  components: {Layout}
}
</script>

<style>
html {
  min-width: 800px;
  overflow: auto;
  overflow-y: hidden;
  font-size: 15px;
}
body {
  margin: 0;
  padding: 0;
}
</style>
