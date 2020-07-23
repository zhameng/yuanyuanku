<template>
    <div>
        <div style="height: 20vh;width: 100%;background: aqua">这是头部</div>
        <div style="height: 80vh;background: #ccc;">
            <div style="width: 20%;float: left;height: 100%;background: antiquewhite">
                这是左侧菜单
                <h2>圆圆</h2>
                <div>
                    <router-link to="/yuan/money">前</router-link>
                </div>
                <div>
                    <router-link to="/yuan/hua">花</router-link>
                </div>
                <div>
                    <router-link to="/meng">这是登录页</router-link>
                </div>

            </div>
            <div style="width: 80%;float: left;height: 100%">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Yuan"
    }
</script>

<style scoped>

</style>
