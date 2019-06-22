<template>
  <md-toolbar class="md-large" md-elevation="5">
    <h3 class="md-title">Default</h3>
  </md-toolbar>
</template>

<script>
export default {
  
}
</script>

<style lang="scss">
  .md-toolbar {
    clip-path: polygon(
      0 0,
      100% 0,
      100% 40%,
      0 100%
    );
  }

  .md-toolbar.md-large {
    min-height: 256px;
    align-content: inherit;
}
</style>
