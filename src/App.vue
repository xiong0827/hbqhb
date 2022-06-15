<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="less">
body {
  display: flex;
  justify-content: center;
  flex-direction: row;
  height: 100vh;
  #app {
    position: relative;
    background-color: #fff;
    max-width: 412px;
    flex: 1;
    display: flex;
    border:1px solid silver;
  }
}
</style>
