<template>
  <div class="searchdiv" :style="{ 'margin-top': toppx + 'px' }">
    <div @click="back" class="searchicon">
      <van-icon name="arrow-left" size="24" />
    </div>
    <van-field
      class="searchinput"
      v-model="searchcode"
      :placeholder="placeholdervalue"
      @click="$router.push('/search')"
    />
    <div class="searchicon" @click="toResult">
      <van-icon name="search" size="24" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Searchinput",
  props: ["placeholdervalue", "toppx"],
  mounted()
  {
 
  },
  data() {
    return {
      searchcode: "",

    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    toResult(code) {
     
          if (
        !localStorage.getItem("searchHistory") &&
        this.searchcode.trim() !=""
      ) {
        localStorage.setItem(
          "searchHistory",
          JSON.stringify([{ code: this.searchcode }])
        );
      }
      else if(this.searchcode.trim() =="")
      {
       
      } 
      else {
        let searchH = JSON.parse(localStorage.getItem("searchHistory"));
        //判断是否有次记录
        let searchindex=searchH.findIndex(search =>{return this.searchcode==search.code})
        console.log(searchindex);
        if(searchindex == -1) {
          searchH.push({code:this.searchcode})
          // localStorage.removeItem('searchHistory')
          localStorage.setItem(
          "searchHistory",
          JSON.stringify(searchH)
        )
        
        }
      }
      if (this.searchcode.trim()!='') {
         this.$router.replace({
        name: "searchresult",
        query: {
          searchcode: this.searchcode.trim(),
        },
      });
      }
      else{
        this.$router.replace({
          name: "searchresult",
        })
      }
      
     
    },
  },
  computed:{
  
  }
};
</script>

<style lang="less" scoped>
.searchdiv {
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