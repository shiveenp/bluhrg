module.exports = {
  title: 'Shiveens Blog',
  description: 'Thoughts and chronicles on programming 👨‍💻 and nature 🌲',
  base: '/blog/',
  dest: 'public',
  head: [
    ['link', {rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css'}]
  ],
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: "Projects", link: "/projects/" },
      { text: "About", link: "/about/"}
    ],
    searchMaxSuggestions: 6
  },
  markdown: {
    lineNumbers: true
  },
  lastUpdated: 'Last Updated',
  sidebar: 'auto'
};