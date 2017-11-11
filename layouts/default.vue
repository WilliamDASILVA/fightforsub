<template>
  <div>
    <v-app dark>
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
        <app-footer/>
      </footer>
    </v-app>
  </div>
</template>

<script>
  import AppHeader from '@/components/Global/AppHeader';
  import AppFooter from '@/components/Global/AppFooter';
  import AppMainHeader from '@/components/Global/AppMainHeader';

  export default {
    components: {
      AppHeader,
      AppFooter,
      AppMainHeader,
    },
  };
</script>


<style lang="scss">
  @import "./../assets/scss/style.scss";

  header{
    z-index: 0;
  }
</style>
