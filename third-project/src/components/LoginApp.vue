<template>
    <div>
        <h1>Login</h1>
        <form>
            <label>Username:</label>
            <input type="text" v-model="username" required><br><br>
            <label>Password:</label>
            <input type="password" v-model="password" required><br><br>
            <button type="submit" @click.prevent="login">Login</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            username: '',
            password: '',
        };
    },
    methods: {
        async login() {
            try {
                console.log({ usename: this.username, password: this.password });
                const response = await axios.post('http://localhost:8000/login  ', {
                    'username': this.username,
                    'password': this.password,
                });
                const token = response.data.token;
                console.log(token)
            } catch (error) {
                console.error(error);
            }
        },
    },
};
</script>