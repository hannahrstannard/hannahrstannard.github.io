<template>
  <md-content>
    <h1>Clean Code</h1>
    <p>
      Writing clean, readable code is important in software development. Without standards, it would be hard to enforce any type of order or structure. Utilizing white space, proper naming, and succinct blocks of code are just a few of the ways you can improve your codebase and make it more readable.
    </p>

    <h2>Formatting</h2>
      <p>
        Formatting is important when coding. It should be consistent throughout your codebase. This will make your code more readable and easier to follow.
      </p>
      <p>
        In some of codebases I’ve worked with, it’s definitely not always consistent. Understandable, multiple people have added to or worked on the codebase. You might end up with some code that is formatted with TONS of white space, or some code that uses none at all. Whichever you use, consistency is key.
      </p>
      <p>
        White space, in many cases, can aid in readability. For example, it can help emphasize the precedence of operators. This:
      </p>
      <code>            
        (-b + Math.sqrt(a)) / (5*c)
      </code>
      <p>
        is much more readable than this:
      </p>
      <code>
        content: "(-b+Math.sqrt(a))/5*c)
      </code>
  </md-content>
</template>

<script>
export default {

}
</script>

<style>

</style>