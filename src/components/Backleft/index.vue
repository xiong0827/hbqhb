<template>
      <a @click="$router.go(-1)" ><van-icon name="arrow-left" :style="{'margin':margin+'px'}"  :size="backsize" /></a>
</template>

<script>
export default {
props:['backsize','margin']
}
</script>

<style lang="less" scoped>

</style>