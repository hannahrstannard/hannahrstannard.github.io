<template>
  <md-content class="experience-bar__md-content">
    <font-awesome-icon
      :icon="['fab', 'js']"
      class="experience-bar__icon--size experience-bar__icon--js"
    />
    <font-awesome-icon
      :icon="['fab', 'vuejs']"
      class="experience-bar__icon--size experience-bar__icon--vuejs"
    />
    <font-awesome-icon
      :icon="['fab', 'angular']"
      class="experience-bar__icon--size experience-bar__icon--angular"
    />
    <font-awesome-icon
      :icon="['fab', 'node-js']"
      class="experience-bar__icon--size experience-bar__icon--node-js"
    />
  </md-content>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.experience-bar__md-content {    
  margin: 0 auto;
  text-align: center;
}

.experience-bar__icon--js {
  color: #f0db4f;
}

.experience-bar__icon--vuejs {
  color: #42b883;
}

.experience-bar__icon--angular {
  color: #dd0330; 
}

.experience-bar__icon--node-js {
  color: #68A063;
}

@media only screen and (max-width: $xsmall) {
  .experience-bar__icon--size {
    width: $xsmall-size/3 !important;
    height: $xsmall-size/3;
    margin-left: $xsmall-size/6;
    margin-right: $xsmall-size/6;
  }
}

@media only screen and (min-width: $xsmall) and (max-width: $small) {
  .experience-bar__icon--size {
    width: $small-size/3 !important;
    height: $small-size/3;
    margin-left: $small-size/6;
    margin-right: $small-size/6;
  }
}

@media only screen and (min-width: $small) and (max-width: $medium) {
  .experience-bar__icon--size {
    width: $medium-size/2 !important;
    height: $medium-size/2;
    margin-left: $medium-size/4;
    margin-right: $medium-size/4;
  }
}

@media only screen and (min-width: $medium) and (max-width: $large) {
  .experience-bar__icon--size {
    width: $large-size/3 !important;
    height: $large-size/3;
    margin-left: $large-size/6;
    margin-right: $large-size/6;
  }
}

@media only screen and (min-width: $xlarge) {
  .experience-bar__icon--size {
    width: $xlarge-size/3 !important;
    height: $xlarge-size/3;
    margin-left: $xlarge-size/6;
    margin-right: $xlarge-size/6;
  }
}
</style>