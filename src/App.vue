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
    height: 92vh;
    width: 100%;
    max-width: 412px;
    display: flex;
  }
}
</style>
