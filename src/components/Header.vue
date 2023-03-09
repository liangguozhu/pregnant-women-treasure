<template>
<div class="header">
  <Nav></Nav>
  <User></User>
</div>
</template>

<script>
import Nav from './header/Nav';
import User from './header/User';
export default {
  name: "Header",
  components: {
    Nav, User
  }
}
</script>

<style scoped>
.header {
  box-sizing: border-box;
  padding: 0 1rem;
  height: 60px;
  color: #fff;

  background-image: url("../assets/images/header-bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>