<template>
  <div id="app">
    <toolbar />
    <logo />
    <router-view></router-view>
  </div>
</template>

<script>
import Toolbar from '@/components/toolbar/Toolbar'
import Logo from '@/components/toolbar/Logo'
export default {
  name: 'app',
  components: {
    Logo,
    Toolbar
  }
}
</script>

<style>
</style>
