<template>
  <div>
    <BlogCard>
      <img
        src="../about-me/avatar.jpg"
        alt="Avatar"
        slot="avatar"
      />
      <img
        src="./11-02-2019/chris-ried-ieic5Tq8YMk-unsplash.jpg"
        alt="Clean Code"
        slot="image"
      />
      <span slot="title">Clean Code</span>
      <span slot="date">November 3, 2019</span>
      <p slot="abstract">Writing clean, readable code is important in software development. Without standards, it would be hard to enforce any type of order or structure. Utilizing white space, proper naming, and succinct blocks of code are just a few of the ways you can improve your codebase and make it more readable...</p>
    </BlogCard>
  </div>
</template>

<script>
import BlogCard from '@/components/pages/BlogCard';

export default {
  name: 'blog',
  components: {
    BlogCard
  }
}
</script>

<style>
.md-card {
  margin-bottom: 5em;
}
</style>