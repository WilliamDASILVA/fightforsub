<template>
  <div id="app-footer">
    <div class="app-footer">
      <div class="wrap">
        <div class="app-footer-content">
          <nav>
            <ul>
              <li>
                Maintenu par:
                <a href="https://www.twitter.com/willia_am">
                  William DA SILVA
                </a>
              </li>
              <li class="list-divider"></li>
              <li>
                Fait avec <i class="fa fa-heart"></i> par la communauté
              </li>
              <li class="list-divider"></li>
              <li>
                <nuxt-link
                  to="/legal"
                >
                  Mentions légales
                </nuxt-link>
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
    name: 'app-footer',
  };
</script>

<style lang="scss" scoped>
  @import '~assets/scss/style.scss';

  .app-footer{
    width: 100%;
    height: 32px;
    line-height: 32px;
    background-color: darken($darkgrey, 5%);

    ul, li{
      margin: 0;
      padding: 0;
      list-style-type: none;

      a{
        text-decoration: none;
        color: white;
      }
    }

    ul{
      display: flex;
      justify-content: center;

      i{
        color: $green;
      }

      .list-divider{
        width: 1px;
        height: 32px;
        background-color: rgba(lighten($darkgrey, 10%), 0.5);
        margin: 0 16px;
      }
    }
  }
</style>
