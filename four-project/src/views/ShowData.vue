<template >
  <table v-if="users != null">
    <thead>
      <tr>
        <th>ID</th>
        <th>Use Name </th>
        <th>Full Name</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(user) in users" :key="user.id">
        <td>{{ user.id }}</td>
        <td>{{ user.username }}</td>
        <td>{{ user.firstName + user.lastName }}</td>
      </tr>
    </tbody>
  </table>
</template>
<script>
import axios from 'axios';

export default {
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      users: null
    }
  },
  methods: {
    async getUsers() {
      var response;
      if (this.id == -1) {
        response = await axios.get('https://dummyjson.com/users')
      }
      return response.data.users
    }
  },
  async mounted() {
    this.users = await this.getUsers();
  }


}
</script>
<style lang="css">
.body {
  display: flex;
  align-items: center;
}

table {
  margin: 0 auto;
  border-spacing: 100px;
  border-collapse: collapse;
}

table,
th,
td {
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
}


tr:hover {
  background-color: #ddd;
  cursor: pointer;
}
</style>