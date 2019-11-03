<template>
  <md-content class="experience-bar__md-content">
    <font-awesome-icon
      :icon="['fab', 'js']"
      class="experience-bar__icon--size experience-bar__icon--js"
      alt="JavaScript"
    />
    <font-awesome-icon
      :icon="['fab', 'vuejs']"
      class="experience-bar__icon--size experience-bar__icon--vuejs"
      alt="Vue.js"
    />
    <font-awesome-icon
      :icon="['fab', 'angular']"
      class="experience-bar__icon--size experience-bar__icon--angular"
      alt="Angular"
    />
    <font-awesome-icon
      :icon="['fab', 'ember']"
      class="experience-bar__icon--size experience-bar__icon--ember"
      alt="Ember.js"
    />
    <font-awesome-icon
      :icon="['fab', 'node-js']"
      class="experience-bar__icon--size experience-bar__icon--node-js"
      alt="Node.js"
    />
    <font-awesome-icon
      :icon="['fab', 'java']"
      class="experience-bar__icon--size experience-bar__icon--java"
      alt="Java"
    />
    <font-awesome-icon
      :icon="['fab', 'python']"
      class="experience-bar__icon--size experience-bar__icon--python"
      alt="Python"
    />
    <font-awesome-icon
      :icon="['fab', 'git-alt']"
      class="experience-bar__icon--size experience-bar__icon--git"
      alt="git"
    />
  </md-content>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.experience-bar__icon--size {
  width: $xsmall-size / 5 !important;
  height: $xsmall-size / 5;
}

.experience-bar__icon--angular {
  color: #dd0330; 
}

.experience-bar__icon--ember {
  color: #E04E39;
}

.experience-bar__icon--git {
  color: #F1502F;
}

.experience-bar__icon--java {
  color: #007396;
}

.experience-bar__icon--js {
  color: #f0db4f;
}

.experience-bar__icon--node-js {
  color: #68A063;
}

.experience-bar__icon--python {
  color: #306998;
}

.experience-bar__icon--vuejs {
  color: #42b883;
}

@media only screen and (max-width: $xsmall) {
  .experience-bar__icon--size {
    width: $xsmall-size / 6 !important;
    height: $xsmall-size / 6;
    margin-left: 0.2em;
    margin-right: 0.2em;
  }
}

@media only screen and (min-width: $xsmall) and (max-width: $small) {
  .experience-bar__icon--size {
    width: $small-size / 6 !important;
    height: $small-size / 6;
    margin-left: 0.2em;
    margin-right: 0.2em;
  }
}

@media only screen and (min-width: $small) and (max-width: $medium) {
  .experience-bar__icon--size {
    width: $medium-size / 6 !important;
    height: $medium-size / 6;
    margin-left: 0.2em;
    margin-right: 0.2em;
  }
}

@media only screen and (min-width: $medium) and (max-width: $large) {
  .experience-bar__icon--size {
    width: $large-size / 6 !important;
    height: $large-size / 6;
    margin-left: 0.2em;
    margin-right: 0.2em;
  }
}

@media only screen and (min-width: $xlarge) {
  .experience-bar__icon--size {
    width: $xlarge-size / 6 !important;
    height: $xlarge-size / 6;
    margin-left: 0.2em;
    margin-right: 0.2em;
  }
}
</style>