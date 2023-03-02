<template>
  <div>
    <h1>{{ getNums }}</h1>
  </div>
</template>
<script>
export default {
  data() {
    return {
      count: 10,
      trans: {
        id: 1,
        action: 'mua rau',
        price: 102
      }
    }
  },
  computed: {
    getNums() {
      return this.$store.getters.getBigger3;
    }
  },
  created() {
    this.$store.dispatch("fetchTransaction", { transaction: this.trans })
  },
}
</script>
<style lang="">
  
</style>