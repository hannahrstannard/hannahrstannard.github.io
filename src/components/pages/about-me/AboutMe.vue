<template>
  <div>
    <div class="about-me__title">
      <h1>About Me</h1>
      <hr />
    </div>
    <experience-bar />
    <my-info />
  </div>
</template>

<script>
import ExperienceBar from '@/components/pages/about-me/ExperienceBar';
import MyInfo from '@/components/pages/about-me/MyInfo';

export default {
  components: {
    ExperienceBar,
    MyInfo
  }
}
</script>

<style>
  .about-me__title {
    text-align: center;
  }
</style>
