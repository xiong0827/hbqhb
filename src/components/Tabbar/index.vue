<template>
  <van-tabbar class="tabbar" v-model="activename">
    <van-tabbar-item to="home" name="home" icon="home-o">主页</van-tabbar-item>
    <van-tabbar-item to="list" icon="cashier-o">广场</van-tabbar-item>
    <van-tabbar-item class="add" to="list" icon="plus"></van-tabbar-item>
    <van-tabbar-item to="cart" icon="comment-o">消息</van-tabbar-item>
    <van-tabbar-item to="my" icon="contact">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  name: "Tabbar",
  props: ["name"],

  data() {
    return {
     activename:this.name
    };
  },
  computed: {},
};
</script>

<style lang="less" scoped>
.tabbar {
   height:56px;
  max-width: 412px;
  .add{
 background: #147BDF;
 border-radius: 40%;
 i{
   font-size: 20px;
 }
  }
}
</style>