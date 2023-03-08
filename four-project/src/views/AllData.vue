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
    <div class="item-footer">
      <button class="bt1" style="--c: #373B44;--b: 1px;--s:5px" @click="firstPage">
        {{ bt[0] }}
      </button>
      <nav>
        <span v-if="currentPage - 2 > 1"> ... </span>
        <span v-for="id in 5" :key="id">
          <span v-if="id > 3 && currentPage + id - 3 <= numberPage"> | </span>

          <router-link v-if="currentPage + id - 3 <= numberPage && currentPage + id - 3 >= 1"
            :to="{ name: 'alldata', params: { id_page: currentPage + id - 3 } }">{{ currentPage + id - 3
            }}</router-link>
          <span v-if="id < 3 && currentPage + id - 3 >= 1"> | </span>
        </span>
        <span v-if="currentPage + 2 < numberPage"> ... </span>
      </nav>
      <button class="bt1" style="--c: #373B44;--b: 1px;--s:5px" @click="lastPage">{{ bt[1] }}</button>
    </div>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  data() {
    return {
      bt: [
        "<<", ">>"
      ],
      users: [],
      limit: 30,
      numberPage: 0,
      currentPage: 1,
      total: 0
    }
  },
  beforeMount() {
    this.currentPage = Number(this.$route.params.id_page)
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
    },
    firstPage() {
      this.$router.push({ name: 'alldata', params: { id_page: 1 } })

    },
    lastPage() {
      this.$router.push({ name: 'alldata', params: { id_page: this.numberPage } })

    }
  },
  watch: {
    '$route.params.id_page'(a, b) {
      if (a != undefined) {
        console.log(a, b);
        this.currentPage = Number(this.$route.params.id_page)
        console.log(1);
        this.fetchUsers()
      }
    },
    limit(newValue, oldValue) {
      console.log(newValue, oldValue);
      var topID = oldValue * (this.currentPage - 1) + 1
      var newCurrentPage = Math.floor(topID / newValue) + 1
      if (newCurrentPage != this.currentPage) {
        this.currentPage = Number(newCurrentPage)
        this.$router.push({ name: 'alldata', params: { id_page: this.currentPage } })
      } else {
        this.fetchUsers()
      }
    },
  }
}
</script>
<style lang="css">
.bt1 {
  --b: 3px;
  /* border thickness */
  --s: .15em;
  /* size of the corner */
  --c: #BD5532;

  padding: calc(.05em + var(--s)) calc(.3em + var(--s));
  color: var(--c);
  --_p: var(--s);
  background:
    conic-gradient(from 90deg at var(--b) var(--b), #0000 90deg, var(--c) 0) var(--_p) var(--_p)/calc(100% - var(--b) - 2*var(--_p)) calc(100% - var(--b) - 2*var(--_p));
  transition: .3s linear, color 0s, background-color 0s;
  outline: var(--b) solid #0000;
  outline-offset: .2em;
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
  border: none;
  margin: .1em;

}

.bt1:hover,
.bt1:focus-visible {
  --_p: 0px;
  outline-color: var(--c);
  outline-offset: .05em;
}

.bt1:active {
  background: var(--c);
  color: #fff;
}

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
  bottom: 0;
  right: 0;
  width: 100%;
  margin: 0;
}

.item-footer {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>