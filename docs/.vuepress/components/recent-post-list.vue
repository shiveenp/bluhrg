<template>
    <div>
        <h2>Recent Articles</h2>
        <ul>
            <li v-for="post in recentPosts" style="list-style-type: none">
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
      recentPosts() {
        let files = this.$site.pages.filter(p => {
          return p.path.indexOf('/posts/') >= 0;
        }).sort((a,b) => {
          let aDate = new Date(a.frontmatter.published).getTime();
          let bDate = new Date(b.frontmatter.published).getTime();
          let diff = aDate - bDate;
          if(diff < 0) return -1;
          if(diff > 0) return 1;
          return 0;
        }).reverse().slice(0,5);

        return files;
      }
    }
  }
</script>