<template>
  <div id="app-main-header">
    <div class="app-main-header">
      <div class="wrap">
        <div class="app-main-header-content">
          <app-logo/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import AppLogo from '@/components/Global/AppMainHeader/AppLogo';

  export default {
    name: 'app-main-header',
    components: {
      AppLogo,
    },
  };
</script>

<style lang="scss" scoped>
  @import '~assets/scss/style.scss';

  .app-main-header{
    background-color: $darkgrey;
    background-image: url('~/assets/img/header.jpg');
    background-size: cover;
    height: 220px;
    
    &-content{
    }
  }
</style>
