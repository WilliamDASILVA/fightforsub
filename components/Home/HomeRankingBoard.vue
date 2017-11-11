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
            <td class="text-xs-right">{{ props.item.rank }}</td>
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
  import faker from 'faker';

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
        items: Array.from(new Array(15).keys()).map((k, i) => ({
          value: false,
          name: faker.name.findName(),
          rank: i + 1,
        })),
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
