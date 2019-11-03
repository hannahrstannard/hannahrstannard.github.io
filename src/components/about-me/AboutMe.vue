<template>
  <div>
    <md-content class="about-me">
        <h1 class="about-me__name">Hannah Stannard</h1>
        <h4 class="about-me__tagline">Programming professionally since 2014</h4>
        <experience-bar class="about-me__experience" />
    </md-content>
    
    <p>
      I am a <strong>Software Developer</strong> with a passion for solving problems and puzzles in code.
    </p>
    <p>
      I love teaching and mentoring, as well as trying to encourage more women to get into tech through <a href="http://www.stirscholarship.org">Stir Scholarship</a>, a non-profit scholarship organization with which I am involved. 
    </p>
    <p>
      For more information about me and my work experience, visit my LinkedIn page!
    </p>
  </div>
</template>

<script>
import ExperienceBar from '@/components/about-me/ExperienceBar';

export default {
  components: {
    ExperienceBar
  }
}
</script>

<style>
.about-me__name {
  margin-bottom: 0;
}

.about-me__tagline {
  margin-top: 0;
}

.about-me__experience {
  text-align: center;
}
</style>
