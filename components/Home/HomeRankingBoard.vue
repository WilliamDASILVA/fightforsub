<template>
  <div id="home-ranking-board">
    <div class="home-ranking-board">
      <div class="home-ranking-board-header">
        <h3>
          Classement
        </h3>
        <p>
          Top 15 des joueurs
        </p>
      </div>
      <div class="home-ranking-board-content">
        <v-data-table
          v-bind:headers="headers"
          :items="items"
          hide-actions
          class="elevation-1"
        >
          <template slot="items" scope="props">
            <td>{{ props.item.name }}</td>
            <td class="text-xs-right">1</td>
          </template>
        </v-data-table>
      </div>
      <div class="home-ranking-board-footer">
        <button
          class=""
        >

        </button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'home-ranking-board',
    data() {
      return {
        headers: [
          {
            text: 'Nom',
            align: 'left',
            sortable: false,
            value: 'name',
          },
          { text: 'Rang', value: 'rank' },
        ],
        items: [
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
        ],
        // items: Array.from(new Array(15).keys()).map((k, i) => ({
        //   value: false,
        //   name: faker.name.findName(),
        //   rank: i + 1,
        // })),
      };
    },
  };
</script>

<style lang="scss" scoped>
  @import '~assets/scss/style.scss';

  .home-ranking-board{
    &-header{
      position: relative;
      top: -30px;
      margin-bottom: -30px;
      padding: 0 16px 16px 16px;
      background: $green;
      color: white;

      p, h3{
        text-align: center;
      }

      h3{
        position: relative;
        font-family: 'BigNoodle', 'Roboto', sans-serif;
        font-style: italic;
        top: -30px;
        margin-bottom: -30px;

        @include text-shadow(0 3px 5px rgba(black, 0.5));
      }
      
      p{
        margin: 0;
      }
    }
  }
</style>
