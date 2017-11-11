<template>
  <div id="home-players">
    <div class="home-players">
      <div class="wrap">
        <h2>
          Les streamers
        </h2>
        <div class="home-players-list">
          <home-players-item
            v-for="(stream, i) in streams"
            :key="i"
            :data="stream"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import faker from 'faker';
  import HomePlayersItem from './HomePlayers/HomePlayersItem';

  export default {
    name: 'home-players',
    components: {
      HomePlayersItem,
    },
    data() {
      return {
        streams: Array.from(new Array(100).keys()).map(() => ({
          name: faker.name.findName(),
          image: faker.image.avatar(),
          views: faker.random.number(100000),
          handicap: faker.random.boolean(),
          status: 'confirmed',
        })),
      };
    },
  };
</script>

<style lang="scss" scoped>
  @import '~assets/scss/style.scss';

  .home-players{
    background-color: darken($green, 10%);
    min-height: 300px;
    margin-top: 100px;

    h2{
      position: relative;
      top: -32px;
      font-size: 32pt;
      font-family: 'BigNoodle', 'Roboto', sans-serif;
      font-style: italic;
      text-align: center;
    }

    &:before{
      content: " ";
      border-style: solid;
      border-width: 100px 100vw 0px 0;
      border-color: transparent $green transparent transparent;
    }

    &-list{
      display: grid;
      grid-template: repeat(5, 1fr) / repeat(5, 1fr);
      grid-gap: 16px;

      #home-players-item{
        width: 100%;
      }
    }
  }
</style>
