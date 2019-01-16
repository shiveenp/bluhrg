<template>
    <div>
        <div id="commento"></div>
    </div>
</template>

<script>
  export default {
    mounted() {
      const plugin = document.createElement("script");
      plugin.setAttribute(
          "src",
          "https://cdn.commento.io/js/commento.js"
      );
      plugin.async = true;
      document.head.appendChild(plugin);
    },
    name: "commento"
  }
</script>

<style scoped>

</style>