<template>
  <div id="login">
    <div class="login">
      <div class="wrap">
        <div>
          <h1>
            Connexion
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'login',
  };
</script>

<style lang="scss" scoped>
  @import '~assets/scss/style.scss';

  .login{
    color: white;

    h1, h2{
      font-family: 'BigNoodle', 'Roboto', sans-serif;
      font-style: italic;
    }

    h1{
      font-size: 42pt;
      color: $green;
    }

    h2{
      font-size: 24pt;
    }

    p{
      font-weight: 300;
    }

    a{
      color: $green;
    }
  }
</style>
