<template>
  <div>
    <h1>this is addddata</h1>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  data() {
    return {
      user: {
        lastName: 'Trần',
        firstName: 'Quốc Tuấn',
      }
    }
  },
  async mounted() {
    try {
      var res = await axios.post("https://dummyjson.com/users/add", this.user)
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }
}
</script>
<style lang="css"></style>