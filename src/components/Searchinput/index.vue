<template>
   <div class="searchdiv" :style="{'margin-top':toppx+'px' }" >
      <div @click="back" class="searchicon"><van-icon name="arrow-left" size="24"/></div>
      <van-field
        class="searchinput"
        v-model="searchcode"
        :placeholder="placeholdervalue"
      />
      <div class="searchicon"><van-icon name="search" size="24" /></div>
    </div>
</template>

<script>
export default {
props:['placeholdervalue','toppx'],
data() {
    return {
        
        searchcode:''
    }
},
methods:{
    back()
    {
        this.$router.go(-1)
    }
}
}
</script>

<style lang="less" scoped>
 .searchdiv {
    margin-bottom: 6px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    .searchinput {
      border-radius: 8px;
      border: 1px solid #bfbfbf;
    }
    .searchicon {
      height: 40px;
      width: 13.2%;
      display: block;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 3%;
    }
  }
</style>