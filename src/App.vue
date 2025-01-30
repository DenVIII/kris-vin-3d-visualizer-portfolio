<template>
  <NavBar />
  <main class="content">
    <router-view></router-view>
  </main>
  <footer-section></footer-section>
</template>

<script>
import FooterSection from './components/FooterSection.vue'
import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    FooterSection,
  },
}
</script>

<style lang="scss"></style>
