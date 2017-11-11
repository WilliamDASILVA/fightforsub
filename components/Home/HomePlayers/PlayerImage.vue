<template>
  <div id="player-image">
    <div v-if="data && data.image" class="player-image" v-lazy:background-image="data.image">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'player-image',
    props: {
      data: {
        required: true,
      },
    },
    created() {
    },
    data() {
      return {
      };
    },
  };
</script>

<style lang="scss" scoped>
  @import '~assets/scss/style.scss';

  #player-image{
    width: 100%;
    height: 100%;
  }

  .player-image{
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
</style>
