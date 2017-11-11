<template>
  <div id="home-players-item">
    <div v-if="data" class="home-players-item">
      <div class="home-players-item-image-el">
        <div
          class="home-players-item-image"
          v-lazy:background-image="data.image"
        ></div>
        <!-- <div class="item-views">
          {{ data.views }} views
        </div>
        <div
          v-if="data.handicap"
          class="item-handicap">
          Handicap
        </div> -->
        <!-- <div
          :class="{confirmed: data.status === 'confirmed'}"
          class="item-status">
          Confirmé
        </div> -->
      </div>
      <div class="home-players-item-slide-el">
        <div class="home-players-item-slide">
          <div class="slide-content">
            <div class="slide-content-name">
              {{ data.name }}
            </div>
            <nav>
              <ul>
                <li>
                  <a href="">
                    <i class="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i class="fa fa-twitch"></i>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'home-players-item',
    props: {
      data: {
        required: true,
      },
    },
  };
</script>

<style lang="scss" scoped>
  @import '~assets/scss/style.scss';

  .home-players-item{
    position: relative;
    display: flex;
    text-decoration: none;
    height: 150px;
    width: 100%;

    &-image-el{
      position: absolute;
      width: 100%;
      height: 100%;

      .item-views, .item-handicap, .item-status{
        @include transition(opacity 200ms);
        opacity: 1;
      }

      .item-views{
        position: absolute;
        border-radius: 0 0 5px 0;
        top: 0;
        left: 0;
        padding: 4px 8px;

        background: $darkgrey;
        color: white;
      }

      .item-handicap{
        position: absolute;
        left: 0;
        bottom: 0;
        background-color: $red;
        color: white;
        padding: 4px 8px;
      }

      .item-status{
        position: absolute;
        bottom: 0;
        right: 0;
        padding: 4px 8px;

        &.confirmed{
          background-color: $green;
          color: white;
        }
        &.pending{
          background-color: $green;
          color: white;
        }
      }
    }

    &-image{
      position: relative;
      width: 100%;
      height: 100%;
      background-color: darken($green, 20%);
      background-size: cover;
      background-position: center;

      @include transform(scale(1));
      @include transition(transform 200ms);

      &:hover{
        @include transform(scale(1.1));
      }
    }

    &:hover{
      .item-handicap, .item-status, .item-views{
        opacity: 0;
      }
      
      .home-players-item-slide{
        bottom: 0;
        opacity: 0.8;
      }
    }

    &-slide-el{
      position: absolute;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
    &-slide{
      position: absolute;
      display: flex;
      background-color: $green;
      bottom: -150px;
      width: 100%;
      height: 100%;
      opacity: 0;
      @include transition(bottom 200ms, opacity 200ms);

      .slide-content{
        display: flex;
        flex-direction: column;
        margin: auto;

        &-name{
          text-align: center;
        }
      }

      nav{
        margin: auto;
      }

      ul, li{
        margin: 0;
        padding: 0;
        list-style-type: none;
      }

      ul{
        display: flex;
        justify-content: center;
      }

      a{
        color: white;
        padding: 16px;
        font-size: 18pt;
      }
    }
  }
</style>
