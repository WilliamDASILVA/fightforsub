<template>
  <div id="home-players-item">
    <a href="" class="home-players-item">
      <div class="home-players-item-image">
        <div class="item-views">
          {{ data.views }} views
        </div>
        <div
          v-if="data.handicap"
          class="item-handicap">
          Handicap
        </div>
        <div
          :class="{confirmed: data.status === 'confirmed'}"
          class="item-status">
          Confirmé
        </div>
      </div>
    </a>
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
    display: flex;
    text-decoration: none;
    
    &-image{
      position: relative;
      height: 150px;
      width: 100%;
      background-image: url('https://pbs.twimg.com/profile_images/818601581155352577/pEPZ0RHn_400x400.jpg');
      background-size: cover;
      background-position: center;

      .item-views{
        position: absolute;
        border-radius: 0 5px 5px 0;
        top: -8px;
        left: -8px;
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
  }
</style>
