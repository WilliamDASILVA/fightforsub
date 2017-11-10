<template>
  <div id="home">
    <div class="home">
      <div class="wrap">
        <div class="home-aside">
          <div class="home-aside-content">
            <h2>
              Qu'est ce que le FFS?
            </h2>
            <p>
              100 streamers s’affrontent tous les mois sur un jeu donné. Le gagnant recevra 99 abonnements de la part de tous les autres streamers participant à la compétition.
            </p>
            <h2>
              Règles
            </h2>
            <p>
              100 streamers s’affrontent tous les mois sur un jeu donné. Le gagnant recevra 99 abonnements de la part de tous les autres streamers participant à la compétition.
            </p>
          </div>
          <div class="home-aside-list">
            <home-player-list/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import HomePlayerList from '@/components/Home/HomePlayerList';

  export default {
    name: 'home',
    components: {
      HomePlayerList,
    },
  };
</script>

<style lang="scss" scoped>
  .home{
    color: white;

    h2{
      font-family: 'BigNoodle', 'Roboto', sans-serif;
      font-style: italic;
    }

    p{
      font-weight: 300;
    }

    &-aside{
      display: flex;

      &-content{
        width: 70%;
      }

      &-list{
        width: 30%;
      }
    }
  }
</style>
