<template>
  <div id="home">
    <div class="home">
      <div class="wrap">
        <div class="home-aside">
          <div class="home-aside-content">
            <div class="content-section">
              <h2>
                À propos
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut accusamus similique error voluptatum beatae eius impedit corporis consequuntur sunt iste? Praesentium veniam corporis maxime obcaecati voluptatem. Repudiandae facere placeat libero.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut accusamus similique error voluptatum beatae eius impedit corporis consequuntur sunt iste? Praesentium veniam corporis maxime obcaecati voluptatem. Repudiandae facere placeat libero.
              </p>
            </div>
          </div>
          <div class="home-aside-list">
            <home-ranking-board/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import HomeRankingBoard from '@/components/Home/HomeRankingBoard';
  import HomePlayers from '@/components/Home/HomePlayers';

  export default {
    name: 'home',
    components: {
      HomeRankingBoard,
      HomePlayers,
    },
  };
</script>

<style lang="scss" scoped>
  @import '~assets/scss/style.scss';

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
        width: 65%;
        padding-top: 32px;
        margin-right: 32px;

        .content-section{
          border-left: 4px solid $green;
          padding-left: 16px;
        }
      }

      &-list{
        width: 35%;
      }
    }
  }
</style>
