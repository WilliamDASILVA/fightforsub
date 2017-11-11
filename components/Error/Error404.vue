<template>
  <div id="error-404">
    <div class="error-404">
      <h1>
        Tu cherches un truc?
      </h1>
      <h2>
        Parce qu'il n'est pas là par contre...
      </h2>
      <img src="~/assets/img/emotes/zrtW.jpg" alt="zrtW">
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
    name: 'error-404',
  };
</script>

<style lang="scss" scoped>
  @import '~assets/scss/style.scss';

  .error-404{
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
