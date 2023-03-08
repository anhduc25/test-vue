<template>
    <form @submit="onsubmit">
        <div class="row">
            <label class="label" for="userName">
                <span>User name</span>
                <input type="text" placeholder="ducha11">
            </label>
        </div>
        <div class="row">
            <label class="label" for="Password">
                <span>Password</span>
                <input type="password" placeholder="*********">
            </label>
        </div>
    </form>
    <button class="button" @click="logIn">Log In</button>
</template>
<script>
export default {
    methods: {
        logIn() {

        }
    }
}
</script>
<style lang="css">
.row {
    margin: 30px;
    height: 100%;
}

input {
    border-radius: 10%;
    background-color: antiquewhite;
    left: 50%;
    margin: 0 30px;
}

label {
    display: flex;
    justify-content: space-between;
}

.button {
    margin-left: 40%;
    background-color: antiquewhite;
    font-size: 24px;
    border-radius: 10%;
    font-family: 'Shantell Sans', cursive;
}
</style>