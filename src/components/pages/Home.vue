<template>
  <md-content class="hs--content">
    <about-me />
    <hr />
    <blog />
  </md-content>
</template>

<script>
import AboutMe from '@/components/about-me/AboutMe'
import Blog from '@/components/pages/Blog'
export default {
  name: 'home',
  components: {
    AboutMe,
    Blog
  }
}
</script>

<style lang="scss">

</style>
