<template>
  <div id="app">
    <header>我是头部</header>
    <section>
      <nav>
        <ul>
          <li>一</li>
          <li>一</li>
          <li>一</li>

        </ul>
      </nav>
      <div class="content">
        <router-link to="/meng">梦</router-link>
        <router-link to="/yuan">圆</router-link>


        <router-view></router-view>
      </div>
    </section>


  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>


</style>
