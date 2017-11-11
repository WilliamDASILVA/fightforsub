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
            <!-- <error-generic v-if="error.statusCode !== 404"/> -->
            <!-- <h1 class="error-code" v-if="error.statusCode === 404">
              Tu cherches un truc?
            </h1>
            <h1 class="error-code" v-if="error.statusCode !== 404">
              {{ error.statusCode }}
            </h1>
            <div class="error-wrapper-message">
              <h2 class="error-message">{{ error.message }}</h2>
            </div>
            <img src="~/assets/img/emotes/zrtW.jpg" alt="">
            <p v-if="error.statusCode === 404">
              <nuxt-link class="error-link" to="/">
                Back to the home page
              </nuxt-link>
            </p> -->
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

  export default {
    name: 'nuxt-error',
    props: ['error'],
    components: {
      AppHeader,
      AppFooter,
      AppMainHeader,
      Error404,
    },
    head() {
      return {
        title: this.error.message || 'Une erreur est survenue',
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
