<template>
  <div id="home">
    <div class="home">
      <div class="wrap">
        <div class="home-aside">
          <div class="home-aside-content">
            <home-event-countdown
              :date="eventDate"
            />
            <div class="content-section">
              <h2>
                Qu'est ce que le FFS?
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut accusamus similique error voluptatum beatae eius impedit corporis consequuntur sunt iste? Praesentium veniam corporis maxime obcaecati voluptatem. Repudiandae facere placeat libero.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut accusamus similique error voluptatum beatae eius impedit corporis consequuntur sunt iste? Praesentium veniam corporis maxime obcaecati voluptatem. Repudiandae facere placeat libero.
              </p>
            </div>
            <div class="content-section">
              <h2>
                Règles
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut accusamus similique error voluptatum beatae eius impedit corporis consequuntur sunt iste? Praesentium veniam corporis maxime obcaecati voluptatem. Repudiandae facere placeat libero.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut accusamus similique error voluptatum beatae eius impedit corporis consequuntur sunt iste? Praesentium veniam corporis maxime obcaecati voluptatem. Repudiandae facere placeat libero.
              </p>
            </div>
            <div class="content-section">
              <h2>
                Règles
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
      <home-players/>
    </div>
  </div>
</template>

<script>
  import HomeRankingBoard from '@/components/Home/HomeRankingBoard';
  import HomePlayers from '@/components/Home/HomePlayers';
  import HomeEventCountdown from '@/components/Home/HomeEventCountdown';

  export default {
    name: 'home',
    components: {
      HomeRankingBoard,
      HomePlayers,
      HomeEventCountdown,
    },
    mounted() {
      console.log('moment', this.$moment);
    },
    data() {
      return {
        eventDate: this.$moment('2017-11-14 20:00'),
      };
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
      font-size: 28pt;
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
