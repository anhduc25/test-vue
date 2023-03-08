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
      <span>Trang: </span>
      <span v-for="id in numberPage" :key="id">
        <router-link :to="{ name: 'alldata', params: { id_page: id } }">{{ id }}</router-link>
        <span v-if="id != numberPage"> | </span>
      </span>
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
        const skip = this.$route.params.id_page - 1
        const response = await axios.get(`https://dummyjson.com/users?skip=${skip * this.limit}&limit=${this.limit}`);
        this.users = response.data.users;
        this.total = response.data.total
        this.numberPage = Math.floor((this.total - 1) / this.limit) + 1
      } catch (error) {
        console.log(error);
      }
    }
  },
  watch: {
    '$route.params.id_page'(a, b) {
      if (a != undefined) {
        console.log(a, b);
        this.currentPage = this.$route.params.id_page
        console.log(1);
        this.fetchUsers()
      }
    },
    limit(newValue, oldValue) {
      console.log(newValue, oldValue);
      var topID = oldValue * (this.currentPage - 1) + 1
      var newCurrentPage = Math.floor(topID / newValue) + 1
      if (newCurrentPage != this.currentPage) {
        this.currentPage = newCurrentPage
        this.$router.push({ name: 'alldata', params: { id_page: this.currentPage } })
      } else {
        this.fetchUsers()
      }
    },
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