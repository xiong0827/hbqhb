<template>
  <van-tabbar class="tabbar" v-model="activename">
    <van-tabbar-item to="home" name="home" icon="home-o">主页</van-tabbar-item>
    <van-tabbar-item to="groom" name="groom" icon="cashier-o"
      >广场</van-tabbar-item
    >
    <van-tabbar-item
      @click="toRouters('add')"
      class="add"
      name="add"
      to="add"
      icon="plus"
    ></van-tabbar-item>
    <van-tabbar-item to="msg" name="msg" icon="comment-o">消息</van-tabbar-item>
    <van-tabbar-item to="main" name="main" icon="contact">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script>
import { toRouter } from "@/units/tologin";

export default {
  name: "Tabbar",
  data() {
    return {};
  },
  computed: {
    activename: {
      get() {
        return this.$route.name;
      },
      set(newValue) {
        return newValue;
      },
    },
  },
  methods: {
    toRouters: toRouter,
  },
};
</script>

<style lang="less" scoped>
.tabbar {
  height: 64px;
  max-width: 412px;
  position: absolute;
  position: sticky;
  bottom: 0;
  .add {
    background: #ff6e53;
    border-radius: 40%;
    i {
      font-size: 20px;
    }
  }
}
</style>