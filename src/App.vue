<template>
  <NavBar />
  <main class="content">
    <HomeView />
  </main>
</template>

<script>
import NavBar from './components/NavBar.vue'
import HomeView from './views/HomeView.vue'

export default {
  name: 'App',
  components: {
    HomeView,
    NavBar,
  },
}
</script>

<style lang="scss"></style>
