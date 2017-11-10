<template>
  <div id="app-logo">
    <div class="app-logo">
      <div class="app-logo-big">
        FFS
        <div class="app-logo-edition">
          #&nbsp;1
        </div>
      </div>
      <div class="app-logo-sub">
        Fight for <span>Sub</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app-logo',
  };
</script>

<style lang="scss" scoped>
  @import '~assets/scss/style.scss';

  .app-logo{
    width: 300px;
    
    &-big, &-sub{
      text-shadow: 0 3px 3px rgba(black, 0.5);
    }

    &-edition{
      box-shadow: 0 3px 3px rgba(black, 0.5);
      text-shadow: none;
    }
    
    &-big{
      position: relative;
      color: white;
      font-size: 100pt;
      font-family: 'BigNoodle', 'Roboto', sans-serif;
      text-align: center;
    }

    &-edition{
      position: absolute;
      font-size: 12pt;
      background-color: $green;
      color: white;

      width: 40px;
      height: 40px;
      border-radius: 40px;
      text-align: center;
      line-height: 40px;
      bottom: 25px;
      right: 20px;
    }

    &-sub{
      position: relative;
      top: -20px;
      color: white;
      text-transform: uppercase;
      font-size: 40pt;
      font-family: 'BigNoodle', 'Roboto', sans-serif;
      font-style: italic;
      text-align: center;

      span{
        color: $green;
      }
    }
  }
</style>
