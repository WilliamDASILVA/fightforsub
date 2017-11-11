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
                Qu'est ce que Fight For Sub?
              </h2>
              <p>
                Une centaine de <strong>streamers</strong> s'affrontent lors d'une compétition tous les mois sur le jeu <strong>PlayerUnknown's Battlegrounds</strong> organisée et commentée par <a href="https://www.twitter.com/zeratorsc2">ZeratoR</a>. Tous les participants de la compétition doivent s'abonner à la <strong>chaine Twitch</strong> du vainqueur.
              </p>
            </div>
            <div class="content-section">
              <h2>
                Règles
              </h2>
              <h3>Règles de base</h3>
              <ul>
                <li>
                  3 parties (4 en cas d'égalité au bout de 3 parties)
                </li>
                <li>
                  Une fois par mois
                </li>
                <li>
                  Uniquement des streamers (affiliate ou partner)
                </li>
                <li>
                  La moyenne de votre classement dans les 3 parties détermine votre place en finale. Ce qui veut dire que quelqu'un qui fait top 3 - top 3 - top 3 gagnera face à quelqu'un qui fait top 1 - top 1 puis top 10.
                </li>
                <li>
                  Les kills ne changent rien aux points
                </li>
                <li>
                  Mode de jeu: TPP (non FPP)
                </li>
                <li>
                  Solo uniquement, pas de duo ni de squad
                </li>
                <li>
                  Si vous êtes dans le top 15, vous devez fermer votre tchat de stream.
                </li>
                <li class="content-section-important">
                  Quand le gagnant sera désigné, il fadra vous abonner à lui EN LIVE devant vos viewers.
                </li>
              </ul>
            </div>
            <div class="content-section">
              <h3>
                Handicap
              </h3>
              <p>
                Pour certains joueurs jugés trop fort (niveau professionnel sur le jeu), nous leurs avons mis un handicap pour équilibrer les parties.
              </p>
              <ul>
                <li>
                  Pas de stuff T2/T3 SAUF casque T2
                </li>
                <li>
                  Pas d'utilisation de Painkiller / boisson
                </li>
                <li>
                  Pas le droit de loot le drop
                </li>
                <li>
                  Pas d'utilisation ni de 8x, ni de 15x
                </li>
              </ul>
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

    h2, h3{
      font-family: 'BigNoodle', 'Roboto', sans-serif;
      font-style: italic;
    }

    h2{
      font-size: 28pt;
    }

    h3{
      font-size: 20pt;
      font-style: normal;
      color: $green;
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
          margin-bottom: 16px;

          a{
            color: $green;
          }

          &-important{
            font-weight: 500;
            color: $green;
          }
        }
      }

      &-list{
        width: 35%;
      }
    }
  }
</style>
