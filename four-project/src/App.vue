<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/TestAPI">TestAPI</router-link>
  </nav>
  <router-view />
</template>

<style lang="css">
@import url('https://fonts.googleapis.com/css2?family=Shantell+Sans:wght@300&display=swap');

#app {
  font-family: 'Shantell Sans', cursive;
  font-size: 24px;
  margin-bottom: 60px;
}

nav {
  padding: 30px;
  text-align: center;
  font-size: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
