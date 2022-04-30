<template>
<van-tabbar class="tabbar" v-model="newactive">
  <van-tabbar-item to="home" icon="home-o">主页</van-tabbar-item>
  <van-tabbar-item to="list" icon="search">分类</van-tabbar-item>
   <van-tabbar-item class="add" to="list" icon="plus"></van-tabbar-item>
  <van-tabbar-item to="cart" icon="friends-o">购物车</van-tabbar-item>
  <van-tabbar-item to="my" icon="setting-o">我的</van-tabbar-item>
</van-tabbar>
</template>

<script>

export default {
name:'Tabbar',
props:['active'],

data() {
    return {
        newactive:this.active
    }
},
computed:{
 
}

}
</script>

<style lang="less" scoped>
.tabbar{
    height: 80px;
    width: 100%;
    max-width: 960px;
    .add{
    border: 1px solid snow;
    border-radius: 50%;
    background: silver;
      .van-tabbar-item__icon{
        font-size: 38px;
    }
    .van-tabbar--fixed{
   left: calc(960px - 50%);
    }
}
}

</style>