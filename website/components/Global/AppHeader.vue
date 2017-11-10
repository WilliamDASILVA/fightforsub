<template>
  <div id="app-header">
    <div class="app-header">
      <div class="wrap">
        <div class="app-header-content">
          <nav class="app-header-left">
            <ul>
              <li>
                <nuxt-link
                  to="/"
                >
                  Accueil
                </nuxt-link>
              </li>
              <li>
                <nuxt-link
                  to="/"
                >
                  À propos
                </nuxt-link>
              </li>
              <li>
                <nuxt-link
                  to="/"
                >
                  Classement
                </nuxt-link>
              </li>
            </ul>
          </nav>
          <nav class="app-header-right">
            <ul>
              <li>
                <a href="">
                  Contribuer
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app-header',
  };
</script>

<style lang="scss" scoped>
  @import '~assets/scss/style.scss';

  .app-header{
    background-color: $green;
    height: 32px;

    ul, li{
      margin: 0;
      padding: 0;
      list-style-type: none;
    }

    ul{
      display: flex;

      a{
        display: inline-block;
        height: 32px;
        line-height: 32px;
        color: white;
        padding: 0 16px;
        text-decoration: none;
      }
    }

    &-content{
      display: flex;
      justify-content: space-between;
    }
  }
</style>
