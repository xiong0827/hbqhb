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
      <van-button size="small" v-show="dangershow"  hairline type="danger" @click="alertsell(goods.goods_id)">取消收藏</van-button>
      <van-button size="small" v-show="!dangershow" hairline type="danger" @click="alertsell(goods.goods_id)">收藏</van-button>
    </template>
     
  </van-card>
</div>
</template>

<script>
import { Toast } from 'vant'
import {mapGetters} from 'vuex'
export default {
  data() {
    return {
      dangershow:true
    }
  },
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
   },
  async alertsell(goods_id)
   {
   try {
     await this.$store.dispatch('goods/addWantList',goods_id)
    // await this.getwantlist()
    this.dangershow=!this.dangershow
   } catch (error) {
     Toast(error)
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