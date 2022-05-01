<template>
        <van-nav-bar
  :title="titletext"
  left-arrow
  @click-left="onClickLeft"
/>
</template>

<script>
export default {
 data() {
     return {
       
     }
 },
 mounted()
 {

 },
  methods: {
    onClickLeft() {
     this.$router.go(-1)
    },

  },
  computed:{
      titletext()
      {
          return this.$route.meta.titletext
      }
  }
}
</script>

<style lang="sss" scoped>

</style>