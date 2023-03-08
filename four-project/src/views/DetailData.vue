<template>
    <div class="style">
        <form class="form" @submit="onsubmit">
            <span class="sp">ID: </span>
            <input class="one" type="text" v-model="inputValue" placeholder="1">
        </form>
    </div>
    <h3 class="detail" v-if="msg != null">not found</h3>
    <DetailComponent class="detail" v-if="inputValue != ''" :user="user" />
</template>
<script>
import axios from 'axios';
import DetailComponent from '../components/DetailComponent.vue';
export default {
    data() {
        return {
            inputValue: '',
            user: null,
            msg: null
        }
    },
    components: {
        DetailComponent
    },
    methods: {
        async searchByID() {
            if (this.inputValue != "") {
                try {
                    const response = await axios.get(`https://dummyjson.com/users/${this.inputValue}`);
                    this.user = response.data;
                    this.msg = null
                } catch (error) {
                    this.msg = 'not found'
                    this.user = null
                }
            } else {
                this.msg = null
                this.user = null
            }
        }
    },
    watch: {
        async inputValue() {
            await this.searchByID()
        }
    }
}
</script>
<style lang="css">
.sp {
    margin-left: 40%;
}

.detail {
    margin: 0 20%;
}
</style>