<template>
<div class="header">
  <img class="icon" src="@/assets/images/logo.png"/>
  <Nav></Nav>
  <User class="user-box"></User>
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
  position: relative;
  box-sizing: border-box;
  padding: 0 1rem;
  height: 60px;
  color: #fff;
  display: flex;
  align-items: center;
  background-image: url("../assets/images/header-bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
.icon {
  display: inline-block;
  height: 50px;
}
.user-box {
  position: absolute;
  right: 1rem;
}
</style>