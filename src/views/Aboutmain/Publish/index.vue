<template>
<div class="buyout">
    <van-card 
 v-for=" goods in mainGoodsList" :key="goods._id"
  @click="$router.push({
      name:'goodsinfo',
      query:{
        goods_id:goods.goods_id
      }
    })"
    num="1"
    :price="goods.gprice"
    :title="goods.gdate"
    :thumb="goods.goodsphoto[0]"
  >
    <template #tags>
        <van-cell  :value="goods.title" />
          <van-cell  :value="goods.gstatus==1?'发布中':'已卖出'" />
    </template>
    <template #footer>
      <van-button size="small" hairline type="info">编辑发布</van-button>
      <van-button size="small" hairline type="danger">删除发布</van-button>
    </template>
     
  </van-card>
</div>

</template>

<script>
import {mapState} from 'vuex'
export default {
   data() {
    return {
      show: false,
      
    };
  },
  mounted()
  {
    this.$store.dispatch('goods/getMainGoodsList')
  },
methods: {
},
computed:{
  ...mapState('goods',['mainGoodsList'])
}
}
</script>

<style lang="less" scoped>

</style>