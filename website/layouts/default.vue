<template>
  <div>
    <app-header/>
    <nuxt/>
  </div>
</template>

<script>
  import AppHeader from '@/components/Global/AppHeader';

  export default {
    components: {
      AppHeader,
    },
  };
</script>


<style lang="scss">
  @import "./../assets/scss/style.scss";
</style>
