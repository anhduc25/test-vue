<template>
    <div>
        <nav>
            <router-link to="/TestAPI/ShowData/-1">Get all data</router-link> |
            <!-- <router-link to="/TestAPI/ShowData/-1">Get user with id</router-link> | -->

        </nav>
        <router-view />

    </div>
</template>
<script>
export default {
    name: "TestAPI",
}
</script>
<style lang="">
    
</style>