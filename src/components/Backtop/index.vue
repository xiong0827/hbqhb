<template>
  <van-nav-bar :title="titletext" left-arrow @click-left="onClickLeft" />
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["backrouter"],
  mounted() {},
  methods: {
    onClickLeft() {
      // if (this.backrouter == "main") {
      //   this.$router.push({
      //     name: this.backrouter,
      //     query: {
      //       editShow: false,
      //     },
      //   });
      // } else if (this.backrouter != "main") {
      //   this.$router.push({ name: this.backrouter });
      // } else {
      this.$router.go(-1);
      // }
    },
  },
  computed: {
    titletext() {
      return this.$route.meta.titletext;
    },
  },
};
</script>

<style lang="less" scoped>
</style>