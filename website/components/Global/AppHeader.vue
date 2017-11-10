<template>
  <div id="app-header">
    <div class="app-header">
      <div class="wrap">
        <nav>
          <ul>
            <li>
              <a href="">
                Hello
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app-header',
  };
</script>

<style lang="scss" scoped>
  @import '~assets/scss/style.scss';

  .app-header{
    background-color: $green;

    ul, li{
      margin: 0;
      padding: 0;
    }
  }
</style>
