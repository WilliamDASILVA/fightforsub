<template>
  <div id="home-event-countdown">
    <div class="home-event-countdown">
      <div class="home-event-countdown-title">
        L'événement commence le
      </div>
      <div class="home-event-countdown-value">
        {{ $moment(date).format('dddd DD MMMM [à] HH:mm') }}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'home-event-countdown',
    props: {
      date: {
        required: true,
      },
    },
  };
</script>

<style lang="scss" scoped>
  @import '~assets/scss/style.scss';

  .home-event-countdown{
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid rgba(white, 0.1);
    padding-bottom: 16px;
    margin-bottom: 32px;

    &-title, &-value{
      text-align: center;
    }
    &-value{
      font-family: 'BigNoodle', 'Roboto', sans-serif;
      font-size: 24pt;
      color: $green;
    }
  }
</style>
