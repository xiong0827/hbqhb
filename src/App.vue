<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="less">
body {
  display: flex;
  justify-content: center;
  flex-direction: row;
  height: 100vh;
  overflow-x: hidden;
  ::-webkit-scrollbar,scrollbar {
    /* 滚动条整体部分 */
    height: 2px;
    width: 2px;
  }
  #app {
    position: relative;
    background-color: #fff;
    max-width: 412px;
    flex: 1;
    display: flex;
    border: 1px solid silver;
  }
}
</style>
