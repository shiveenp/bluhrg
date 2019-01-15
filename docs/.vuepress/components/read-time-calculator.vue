<template>
    <div class="gray">
        (Estimated Reading Time: {{contentLength}} minutes)
    </div>
</template>

<script>
  export default {
    data() {
      return {};
    },
    computed:{
      contentLength() {
        console.log(this.$page.excerpt);
        return Math.round(this.$page.excerpt.split(" ").length / 200)
      }
    }
  }
</script>

<style scoped src="../styles/colors.min.css"></style>