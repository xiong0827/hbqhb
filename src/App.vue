<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="less">
body {
  display: flex;
  justify-content: flex-start;
  width: 100vw;
  height: 100vh;
  max-width: 412px;
  #app {
    flex: 1;
    display: flex;
  }
}
</style>
