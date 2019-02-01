module.exports = {
  title: 'Shiveens Blog',
  description: 'Thoughts and chronicles on programming 👨‍💻 and nature 🌲',
  head: [
    ['link', {rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css'}]
  ],
  themeConfig: {
    lastUpdated: 'Last Updated',
    nav: [
      { text: "About", link: "/about"}
    ],
    searchMaxSuggestions: 6
  },
  markdown: {
    lineNumbers: true
  },
  sidebar: 'auto',
};