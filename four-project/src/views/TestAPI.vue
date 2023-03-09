<template>
    <div>
        <nav>
            <router-link :to="{ name: 'alldata', params: { id_page: 1 } }">Get all data</router-link> |
            <router-link :to="{ name: 'detaildata' }">Get user with id</router-link> |
            <router-link :to="{ name: 'adddata' }">Add user</router-link> |
            <router-link :to="{ name: 'deletedata' }">Delete user</router-link> |
        </nav>
        <router-view />

    </div>
</template>
<script>
export default {
    name: "TestAPI",
}
</script>
<style lang="css"></style>