<template>
  <div id="ranking">
    <div class="ranking">
      <div class="wrap">
        <div>
          <h1>
            Classement
          </h1>
          <p>
            Ci-dessous vous trouvez le classement de tous nos participants à cet édition de l'événement.
          </p>

          <v-data-table
            v-bind:headers="headers"
            :items="items"
            hide-actions
            class="elevation-1"
          >
            <template slot="items" scope="props">
              <td>{{ props.item.name }}</td>
              <td class="text-xs-right">{{ props.item.game1 }}</td>
              <td class="text-xs-right">{{ props.item.game2 }}</td>
              <td class="text-xs-right">{{ props.item.game3 }}</td>
              <td class="text-xs-right">{{ props.item.game4 }}</td>
              <td class="text-xs-right">{{ props.item.average }}</td>
              <td class="text-xs-right">{{ props.item.rank }}</td>
            </template>
          </v-data-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import faker from 'faker';

  export default {
    name: 'ranking',
    data() {
      return {
        headers: [
          {
            text: 'Nom',
            align: 'left',
            sortable: false,
            value: 'name',
          },
          {
            text: '1ère partie',
            value: 'game1',
          },
          {
            text: '2ème partie',
            value: 'game2',
          },
          {
            text: '3ème partie',
            value: 'game3',
          },
          {
            text: 'Partie complémentaire',
            value: 'game4',
          },
          {
            text: 'Moyenne',
            value: 'average',
          },
          {
            text: 'Rang',
            value: 'rank',
          },
        ],
        items: Array.from(new Array(100).keys()).map((k, i) => ({
          value: false,
          name: faker.name.findName(),
          game1: i + 1,
          game2: i + 1,
          game3: i + 1,
          game4: i + 1,
          average: faker.random.number(10),
          rank: faker.random.number(100),
        })),
      };
    },
  };
</script>

<style lang="scss" scoped>
  @import '~assets/scss/style.scss';

  .ranking{
    color: white;

    h1, h2{
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
