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
                  to="/about"
                >
                  À propos
                </nuxt-link>
              </li>
              <li>
                <nuxt-link
                  to="/ranking"
                >
                  Classement
                </nuxt-link>
              </li>
            </ul>
          </nav>
          <nav class="app-header-right">
            <ul>
              <li>
                <a href="https://github.com/WilliamDASILVA/fightforsub">
                  <i class="material-icons">help</i>
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

  #app-header{
    height: 32px;
  }

  .app-header{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 32px;
    background-color: $green;
    z-index: 10;

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
        @include transition(border-bottom 100ms);

        i{
          vertical-align: middle;
          font-size: 12pt;
        }

        &:hover{
          border-bottom: 2px solid;
        }
      }
    }

    &-content{
      display: flex;
      justify-content: space-between;
    }
  }
</style>
