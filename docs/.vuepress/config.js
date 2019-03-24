module.exports = {
  title: 'Shiveens Blog',
  description: 'Thoughts and chronicles on programming 👨‍💻 and nature 🌲',
  head: [
    ['link', {rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css'}],
  ],
  themeConfig: {
    lastUpdated: 'Last Updated',
    nav: [
      {text: "Posts", link: "/POSTS"},
      {text: "About", link: "/about"},
      {text: "Github", link: "https://github.com/shavz"},
    ],
    searchMaxSuggestions: 6
  },
  markdown: {
    lineNumbers: true
  },
  sidebar: 'auto',
};
