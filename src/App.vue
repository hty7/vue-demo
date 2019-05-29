<template>
  <v-app>
    <div id="app">
      <keep-alive>
        <router-view />
      </keep-alive>
    </div>
  </v-app>
</template>

<script>
export default {
}
</script>


<style lang="scss">
@import './style/common';
#app {
  font-size: 13px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
  height: 100%;
  background: #F5F5F5;
}

.slide-fade-r-enter-active {
  transition: all .3s ease;
}
.slide-fade-r-enter {
  transform: translateX(280px);
  opacity: 0;
}

</style>
