<template>
<div class="buyout">
    <van-card 
 v-for="count in 2" :key="count"
    num="1"
    price="30.00"
    title="发布时间"
    thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
  >
    <template #tags>
        <van-cell  value="华为mate40pro" />
          <van-cell  v-model="status" />
    </template>
    <template #footer>
      <van-button size="small" hairline type="info">编辑发布</van-button>
      <van-button size="small" hairline type="danger">删除发布</van-button>
    </template>
     
  </van-card>
</div>

</template>

<script>
export default {
   data() {
    return {
      show: false,
      status:'发布中'
    };
  },
methods: {
},
}
</script>

<style lang="less" scoped>

</style>