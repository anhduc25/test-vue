<template >
  <div class="select-limit">
    <label>Choose a limit:</label>
    <select name="cars" id="cars" v-model="limit">
      <option value=10>10</option>
      <option value=20>20</option>
      <option value=30>30</option>
      <option value=40>40</option>
    </select>
  </div>

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
  <div class="footer" v-if="numberPage != 0">
    <nav>
      <span v-for="id in 5" :key="id">Trang: </span>
      <!-- <router-link :to="{ name: 'alldata', params: { id_page: id } }">{{ id }}</router-link> | -->
      {{ id }}
    </nav>

  </div>
</template>
<script>
import axios from 'axios';

export default {
  data() {
    return {
      users: [],
      limit: 30,
      numberPage: 0,
      currentPage: 1,
      total: 0
    }
  },
  beforeMount() {
    this.currentPage = this.$route.params.id_page
    this.fetchUsers()
  },
  methods: {
    async fetchUsers() {
      try {
        const response = await axios.get(`https://dummyjson.com/users?skip=${(this.$route.params.id_page - 1) * this.limit}`);
        this.users = response.data.users;
        this.total = response.data.total
        this.numberPage = Math.round(this.total / this.limit) + 1
      } catch (error) {
        console.log(error);
      }
    }
  },
  watch: {
    '$route.params.id_page'() {
      this.currentPage = this.$route.params.id_page
      this.fetchUsers()
    },
    limit() {
      this.numberPage = 5
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

.select-limit {
  display: flex;
  justify-content: space-evenly;
  margin: 0 40%;
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