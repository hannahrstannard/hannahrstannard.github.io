<template>
  <md-toolbar class="toolbar__md-toolbar toolbar__md-toolbar--size md-theme--light-gray">
    <div class="md-toolbar-row">
      <div class="md-toolbar-section-start">
        <md-button class="md-icon-button">
          <font-awesome-icon icon="bars" />
        </md-button>
      </div>
      <div class="md-toolbar-section-end">
        <h1 class="md-title">Title</h1>
      </div>
    </div>
  </md-toolbar>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.toolbar__md-toolbar {
  clip-path: polygon(
    0 0,
    100% 0,
    100% 60%,
    0 100%
  );
  align-content: inherit;
}

@media only screen and (max-width: $xsmall) {
  .toolbar__md-toolbar--size {
    min-height: 10em;
  }
}

@media only screen and (min-width: $xsmall) and (max-width: $small) {
  .toolbar__md-toolbar--size {
    min-height: 15em;
  }
}

@media only screen and (min-width: $small) and (max-width: $medium) {
  .toolbar__md-toolbar--size {
    min-height: 20em;
  }
}

@media only screen and (min-width: $medium) and (max-width: $large) {
  .toolbar__md-toolbar--size {
    min-height: 25em;
  }
}

@media only screen and (min-width: $xlarge) {
  .toolbar__md-toolbar--size {
    min-height: 30em;
  }
}
</style>
