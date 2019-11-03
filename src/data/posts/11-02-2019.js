export default {
  post: {
    title: "Clean Code",
    abstract: "Writing clean, readable code is important in software development. Without standards",
    content: [
      {
        section: {
          title: "Formatting",
          content: [
            {
              type: "paragraph",
              content: "Formatting is important when coding. It should be consistent throughout your codebase. This will make your code more readable and easier to follow.",
            },
            {
              type: "paragraph",
              content: "In some of codebases I’ve worked with, it’s definitely not always consistent. Understandable, multiple people have added to or worked on the codebase. You might end up with some code that is formatted with TONS of white space, or some code that uses none at all. Whichever you use, consistency is key."
            },
            {
              type: "paragraph",
              content: "White space, in many cases, can aid in readability. For example, it can help emphasize the precedence of operators. This:"
            },
            {
              type: "code",
              content: "(-b + Math.sqrt(a)) / (5*c)"
            },
            {
              type: "paragraph",
              content: "is much more readable than this:"
            },
            {
              type: "code",
              content: "(-b+Math.sqrt(a))/5*c)"
            }
          ]
        }
      }
    ]
  }
}