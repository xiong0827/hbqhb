<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="less">
body {
  display: flex;
  justify-content: flex-start;
  width: 100%;
  height: 92vh;
  #app {
   flex: 1;
    max-width: 412px;
    display: flex;
  }
}
</style>
