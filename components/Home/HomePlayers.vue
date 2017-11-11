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
        <pre>
          {{ streams }}
        </pre>
      </div>
    </div>
  </div>
</template>

<script>
  import TwitchGlobal from '~/services/twitch/global';
  import HomePlayersItem from './HomePlayers/HomePlayersItem';

  export default {
    name: 'home-players',
    components: {
      HomePlayersItem,
    },
    created() {
      TwitchGlobal.getUsers(this.streams.map(k => k.twitch)).then((res) => {
        if (res.status === 200) {
          this.images = res.data.users.map(k => ({
            name: k.name,
            image: k.logo,
          }));
          this.images.forEach((image) => {
            const index = this.streams.findIndex(v => v.twitch === image.name);
            if (index >= 0) {
              this.streams[index].image = image.image;
            }
          });
        }
      });
    },
    methods: {
    },
    data() {
      return {
        images: [],
        streams: [
          {
            name: 'Aayley',
            twitch: 'aayley',
          },
          {
            name: 'Acemodai',
            twitch: 'acemodai',
          },
          {
            name: 'Aiekillu',
            twitch: 'aiekillu',
          },
          {
            name: 'Alderiate',
            twitch: 'alderiate',
          },
          {
            name: 'Alphacast',
            twitch: 'esl_alphacast',
          },
          {
            name: 'As2pik',
            twitch: 'as2pik',
          },
          {
            name: 'Aypierre',
            twitch: 'aypierre',
          },
          {
            name: 'Bboy',
            twitch: 'mrbboy45',
          },
          {
            name: 'BestMarmotte',
            twitch: 'bestmarmotte',
          },
          {
            name: 'Caelan',
            twitch: 'caelaneuw',
          },
          {
            name: 'Chachatoy',
            twitch: 'chachatoy',
          },
          {
            name: 'Chap',
            twitch: 'chap_gg',
          },
          {
            name: 'Chinavanora',
            twitch: 'chinavanora',
          },
          {
            name: 'Counfouzz',
            twitch: 'counfouzz',
          },
          {
            name: 'Dahmien7',
            twitch: 'dahmien7',
            handi: true,
          },
          {
            name: 'Degun',
            twitch: 'esl_degun',
          },
          {
            name: 'Dfg',
            twitch: 'drfeelgood',
          },
          {
            name: 'DjBoucherie',
            twitch: 'djboucherie',
          },
          {
            name: 'Doigby',
            twitch: 'doigby',
          },
          {
            name: 'Domingo',
            twitch: 'domingo',
          },
          {
            name: 'Drunge',
            twitch: 'drunge59',
          },
          {
            name: 'Ero_G',
            twitch: 'ero_g',
          },
          {
            name: 'Fukano',
            twitch: 'fukano',
          },
          {
            name: 'Gius',
            twitch: 'gius',
          },
          {
            name: 'Gob',
            twitch: 'gobgg',
          },
          {
            name: 'Gotaga',
            twitch: 'gotaga',
          },
          {
            name: 'Gryngoss',
            twitch: 'gryngoss',
          },
          {
            name: 'HeyarTV',
            twitch: 'heyartv',
          },
          {
            name: 'Haraw',
            twitch: 'haraw',
          },
          {
            name: 'Hexakii',
            twitch: 'hexakii',
          },
          {
            name: 'Hilliuss',
            twitch: 'hilliuss',
          },
          {
            name: 'IonixTV',
            twitch: 'ionix_tv',
          },
          {
            name: 'Jbzz',
            twitch: 'jbzzed',
          },
          {
            name: 'Jeel',
            twitch: 'jeeltv',
          },
          {
            name: 'Jessaipa',
            twitch: 'jessaipa',
          },
          {
            name: 'Jiraya',
            twitch: 'jirayalecochon',
          },
          {
            name: 'Jogau',
            twitch: 'Jogau',
          },
          {
            name: 'Jusdas',
            twitch: 'jusdas',
          },
          {
            name: 'Kalissu',
            twitch: 'kalissu_',
          },
          {
            name: 'Kameto',
            twitch: 'kamet0',
          },
          {
            name: 'Kanjo',
            twitch: 'Kanjo',
          },
          {
            name: 'KawaiiSC2',
            twitch: 'kawaiisc2',
          },
        ],
        // streams: Array.from(new Array(100).keys()).map(() => ({
        //   name: faker.name.findName(),
        //   image: faker.image.avatar(),
        //   views: faker.random.number(100000),
        //   handicap: faker.random.boolean(),
        //   status: 'confirmed',
        // })),
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
