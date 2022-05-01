<template>
<div class="sell">
    <van-card 
 v-for="count in 2" :key="count"
    num="1"
    price="30.00"
    title="收藏时间"
    thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
  >
    <template #tags>
        <van-cell  value="华为mate40pro" />
      
    </template>
    <template #footer>
      <van-button size="small" hairline type="info">查看详情</van-button>
      <van-button size="small" hairline type="danger">取消收藏</van-button>
    </template>
     
  </van-card>
</div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>

</style>