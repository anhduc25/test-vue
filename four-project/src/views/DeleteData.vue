<template >
  <div>
    <div class="style">
      <div class="form">
        <span class="sp">ID: </span>
        <input class="one" type="text" v-model="inputValue" placeholder="1">
        <button class="delete" @click="deleteData">delete</button>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  data() {
    return {
      inputValue: '',
    }
  },
  methods: {
    async deleteData() {
      if (this.inputValue != "") {
        try {
          const response = await axios.delete(`https://dummyjson.com/users/${this.inputValue}`);
          alert("delete oke");

          console.log(response);
        } catch (error) {
          console.log(error);
        }
      } else {
        alert("add id to delete");
      }
    }
  },
}
</script>
<style lang="">
    
</style>