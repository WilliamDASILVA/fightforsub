<template>
  <div id="error-generic">
    <div class="error-generic">
      <h1>
        Une erreur est survenue
      </h1>
      <h2>
        Veuillez réessayer dans quelques minutes.
      </h2>
      <v-btn
        outline
        color="white"
        to="/"
      >
        Revenir à l'accueil
      </v-btn>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'error-generic',
  };
</script>

<style lang="scss" scoped>
  @import '~assets/scss/style.scss';

  .error-generic{
    display: flex;
    flex-direction: column;
    text-align: center;
    padding-top: 32px;

    h1{
      color: $green;
      font-size: 42px;
      font-family: 'BigNoodle', 'Roboto', sans-serif;
      margin: 0;
    }

    h2{
      font-size: 28px;
      border-bottom: 1px solid rgba(white, 0.1);
      padding-bottom: 32px;
      margin-bottom: 32px;
    }

    img{
      width: 200px;
      margin: auto;
      opacity: 0.5;
      @include filter(grayscale(100%) contrast(150%) brightness(103%));
    }

    a{
      width: 200px;
      margin: auto;
      margin-top: 16px;
    }
  }
</style>
