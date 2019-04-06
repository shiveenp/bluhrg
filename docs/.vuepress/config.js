module.exports = {
  title: 'Shiveens Blog',
  description: 'Thoughts and chronicles on programming 👨‍💻 and nature 🌲',
  head: [
    ['link', {rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css'}],
    ['link', { rel: 'icon', href: 'https://s.gravatar.com/avatar/8302a2efc8d4f2c2cddea95e5b7ecdce?s=80' }]
  ],
  themeConfig: {
    lastUpdated: 'Last Updated',
    nav: [
      {text: "Posts", link: "/POSTS"},
      {text: "About", link: "/about/"},
      {text: "Github", link: "https://github.com/shavz"},
    ],
    searchMaxSuggestions: 6
  },
  markdown: {
    lineNumbers: true
  },
  sidebar: 'auto',
};
