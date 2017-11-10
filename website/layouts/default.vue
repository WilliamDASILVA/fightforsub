<template>
  <div>
    <header>
      <app-header/>
      <app-main-header/>
    </header>
    <main>
      <div class="content">
        <nuxt/>
      </div>
    </main>
    <footer>
      footer
    </footer>
  </div>
</template>

<script>
  import AppHeader from '@/components/Global/AppHeader';
  import AppMainHeader from '@/components/Global/AppMainHeader';

  export default {
    components: {
      AppHeader,
      AppMainHeader,
    },
  };
</script>


<style lang="scss">
  @import "./../assets/scss/style.scss";

  .content{
    
  }
</style>
