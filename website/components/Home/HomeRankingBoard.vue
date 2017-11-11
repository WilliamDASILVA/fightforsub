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
            <td class="text-xs-right">{{ props.item.calories }}</td>
            <td class="text-xs-right">{{ props.item.fat }}</td>
            <td class="text-xs-right">{{ props.item.carbs }}</td>
            <td class="text-xs-right">{{ props.item.protein }}</td>
            <td class="text-xs-right">{{ props.item.sodium }}</td>
            <td class="text-xs-right">{{ props.item.calcium }}</td>
            <td class="text-xs-right">{{ props.item.iron }}</td>
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
            text: 'Dessert (100g serving)',
            align: 'left',
            sortable: false,
            value: 'name',
          },
          { text: 'Calories', value: 'calories' },
          { text: 'Fat (g)', value: 'fat' },
          { text: 'Carbs (g)', value: 'carbs' },
          { text: 'Protein (g)', value: 'protein' },
          { text: 'Sodium (mg)', value: 'sodium' },
          { text: 'Calcium (%)', value: 'calcium' },
          { text: 'Iron (%)', value: 'iron' },
        ],
        items: [
          {
            value: false,
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            sodium: 87,
            calcium: '14%',
            iron: '1%',
          },
        ],
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
