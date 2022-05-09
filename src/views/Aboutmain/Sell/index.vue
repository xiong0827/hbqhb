<template>
<div class="sell">
    <van-card 
 v-for="goods in uwantlist" :key="goods.goods_id"
    num="1"
    :price="goods.gprice"
    :title="goods.collectiontime"
    v-show="goods.goodsphoto"
    :thumb="goods.goodsphoto[0]"
  >
    <template #tags>
        <van-cell  value="华为mate40pro" />
      
    </template>
    <template #footer>
      <van-button size="small" hairline type="info" @click="$router.push({
        name:'goodsinfo',
        query:{
          goods_id:goods.goods_id
        }
      })">查看详情</van-button>
      <van-button size="small" hairline type="danger" @click="alertsell">取消收藏</van-button>
    </template>
     
  </van-card>
</div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  mounted()
  {
   this.getwantlist()
  },
  methods:{
  async getwantlist()
   {
      try { 
      await  this.$store.dispatch('user/getUserInfo')
      }
          catch (error) {
        
      }
   }
  },
computed:{
  ...mapGetters('user',['uwantlist'])
  // wantlist()
  // {
  //   return this.$route.query.uwantlist
  // }
}
}
</script>

<style lang="less" scoped>

</style>