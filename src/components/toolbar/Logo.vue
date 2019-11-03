<template>    
  <div class="home__logo home__logo--size md-theme--dark-gray">
    <font-awesome-icon
      icon="code"
      class="home__logo--full-size"
    />
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.home__logo {
  margin: 0 auto;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  z-index: 3;
}

@media only screen and (max-width: $xsmall) {
  .home__logo--size {
    width: $xsmall-size;
    height: $xsmall-size;
    top: $xsmall-size / 4;
  }
}

@media only screen and (min-width: $xsmall) and (max-width: $small) {
  .home__logo--size {
    width: $small-size;
    height: $small-size;
  }
}

@media only screen and (min-width: $small) and (max-width: $medium) {
  .home__logo--size {
    width: $medium-size;
    height: $medium-size;
  }
}

@media only screen and (min-width: $medium) and (max-width: $large) {
  .home__logo--size {
    width: $large-size;
    height: $large-size;
  }
}

@media only screen and (min-width: $xlarge) {
  .home__logo--size {
    width: $xlarge-size;
    height: $xlarge-size;
  }
}

.home__logo--full-size {
  width: 100% !important;
  height: 100%;
}
</style>
