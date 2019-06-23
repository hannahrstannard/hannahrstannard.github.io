<template>
  <div>
    <md-toolbar class="md-large md-theme--light-gray">
      <h3 class="md-title">Default</h3>
    </md-toolbar>
    <div class="home__logo md-theme--dark-gray">
      <font-awesome-icon icon="code" class="home__logo--full-size" />
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss">
@import "vue-material/src/theme/variables.scss";

.md-toolbar {
  clip-path: polygon(
    0 0,
    100% 0,
    100% 60%,
    0 100%
  );
}

.home__logo {
  width: 25em;
  height: 25em;
  margin: 0 auto;
  position: absolute;
  top: 5em;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  z-index: 3;
}

.home__logo--full-size {
  width: 100% !important;
  height: 100%;
}

.md-toolbar.md-large {
  min-height: 256px;
  align-content: inherit;
}
</style>
