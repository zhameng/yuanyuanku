<template>
    <div>
        <h2>圆圆</h2>
        <router-link to="/yuan/hua">花</router-link>
        <router-link to="/yuan/money">前</router-link>

        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "Yuan"
    }
</script>

<style scoped>

</style>
