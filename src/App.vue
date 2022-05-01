<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="less">
body {
  display: flex;
  justify-content: flex-start;
  #app {
    width: 100%;
    height: 100vh;
    max-width: 412px;
    // background: pink;
    display: flex;
  }
}
</style>
