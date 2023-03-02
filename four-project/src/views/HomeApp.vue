<template>
  <div class="home">
    <img class="applogo" src="../assets/1.jpg" alt="App Logo">
    <h2>USER MANAGER</h2>
    <LoginApp />
  </div>
</template>

<script>
// @ is an alias to /src
import LoginApp from '../components/LoginApp.vue';
export default {
  name: 'HomeApp',
  components: {
    LoginApp,
  }
}
</script>
<style>
.home {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
}

.applogo {
  height: 20%;
  width: 20%;
}
</style>
