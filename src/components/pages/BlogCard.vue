<template>
  <md-card>
    <md-card-header>
      <md-avatar>
        <slot name="avatar" />
      </md-avatar>

      <div class="md-title">
        <strong>
          <slot name="title" />
        </strong>
      </div>
      <div class="md-subhead">
        <slot name="date" />
      </div>
    </md-card-header>

    <md-card-media md-ratio="16:9">
      <slot name="image" />
    </md-card-media>

    <md-card-header>
      <div class="md-title">
        <slot name="title" />
      </div>
    </md-card-header>

    <md-card-content>
      <slot name="abstract" />
    </md-card-content>
  </md-card>
</template>

<script>
export default {  
  name: 'blogcard'
}
</script>

<style>

</style>