<template>
  <div id="app">
    <toolbar />
    <router-view></router-view>
  </div>
</template>

<script>
import Toolbar from '@/components/toolbar/Toolbar'
export default {
  name: 'app',
  components: {
    Toolbar
  }
}
</script>

<style>
</style>
