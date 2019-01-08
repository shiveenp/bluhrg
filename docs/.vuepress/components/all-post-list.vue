<template>
    <div>
        <!--
    <h2>All Articles</h2>
        -->
        <ul>
            <li v-for="post in posts" style="list-style-type: none">
                <a :href="post.path">{{post.title}} | {{post.frontmatter.date}}</a>
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
        let files = this.$site.pages.filter(p => {
          return p.path.indexOf('/posts/') >= 0;
        }).reverse()

        return files;
      }
    }
  }
</script>