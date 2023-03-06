<template >
  <div class="main" v-if="users.length != 0">
    <ul class="item" v-for="(user) in users" :key="user.id">
      <li>
        <p>ID: {{ user.id }}</p>
        <p>User Name: {{ user.username }}</p>
        <p>Full Name: {{ user.firstName + user.lastName }}</p>
      </li>
      <img :src="user.image" alt="user image">
    </ul>
  </div>
  <div class="footer">
    <nav>
      <span>Trang: </span>
      <router-link :to="{ name: 'alldata', params: { id_page: 1 } }">1</router-link> |
      <router-link :to="{ name: 'alldata', params: { id_page: 2 } }">2</router-link> |
      <router-link :to="{ name: 'alldata', params: { id_page: 3 } }">3</router-link> |
      <router-link :to="{ name: 'alldata', params: { id_page: 4 } }">4</router-link>

    </nav>

  </div>
</template>
<script>
import axios from 'axios';

export default {
  data() {
    return {
      users: []
    }
  },
  beforeMount() {
    this.fetchUsers()
  },
  methods: {
    async fetchUsers() {
      console.log('b');
      try {
        const response = await axios.get(`https://dummyjson.com/users?skip=${(this.$route.params.id_page - 1) * 30}`);
        this.users = response.data.users;
      } catch (error) {
        console.log(error);
      }
    }
  },
  watch: {
    '$route.params.id_page'() {
      this.fetchUsers()
    }
  }
}
</script>
<style lang="css">
.main {
  display: flex;
  flex-direction: column;
  margin: 0 30%;
}

.item {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.footer {
  position: fixed;
  bottom: 5px;
  right: 0;
  width: 100%;
}
</style>