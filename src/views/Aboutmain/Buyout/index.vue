<template>
<div class="buyout">
    <van-card 
 v-for="count in 5" :key="count"
    num="1"
    price="30.00"
    title="时间"
    thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
  >
    <template #tags>
      <van-image
      style="margin-top:10px"
        round
        width="2rem"
        height="2rem"
        src="https://img01.yzcdn.cn/vant/cat.jpeg"
      >
      </van-image>
        <van-cell  value="华为mate40pro" />
    </template>
    <template #footer>
       <van-button size="small" hairline type="info">查看详情</van-button>
      <van-button size="small" hairline type="info">联系卖家</van-button>
      <van-button size="small" hairline type="danger">删除订单</van-button>
      
    </template>
  </van-card>
</div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
</style>