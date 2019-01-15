<template>
    <div>
        <ul>
            <li v-for="post in posts" style="list-style-type: none">
                <a :href="post.path">{{post.title}} (published: {{post.frontmatter.date}})</a>
            </li>
        </ul>
    </div>
</template>

<script>
  export default {
    data() {
      return {};
    },
    computed:{
      posts() {
        return this.$site.pages.filter(p => {
          return p.path.indexOf('/posts/') >= 0;
        }).reverse();
      }
    }
  }
</script>