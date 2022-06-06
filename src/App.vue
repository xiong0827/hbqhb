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
  #app {
   flex: 1;
    max-width: 412px;
    display: flex;
  }
}
</style>
