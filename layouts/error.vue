<template>
  <div>
    <v-app dark>
      <header>
        <app-header/>
        <app-main-header/>
      </header>
      <main>
        <div class="content">
          <div class="wrap">
            <error-404 v-if="error.statusCode === 404"/>
            <error-generic v-if="error.statusCode !== 404"/>
          </div>
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
  import Error404 from '@/components/Error/Error404';
  import ErrorGeneric from '@/components/Error/ErrorGeneric';

  export default {
    name: 'nuxt-error',
    props: ['error'],
    components: {
      AppHeader,
      AppFooter,
      AppMainHeader,
      Error404,
      ErrorGeneric,
    },
    head() {
      return {
        title: this.error.message || 'Une erreur est survenue',
        meta: [
          {
            name: 'robots',
            hid: 'robots',
            content: 'noindex',
          },
        ],
      };
    },
  };
</script>


<style lang="scss" scoped>
  @import "./../assets/scss/style.scss";

  .error-code{
    font-size: 32pt;
    font-family: 'BigNoodle', 'Roboto', sans-serif;
  }
</style>
