<template>
  <div class="classifycontainer">
    <Searchinput placeholdervalue="搜索更多关键词" toppx="40" />
    <div class="classifylist">
      <li v-for="gclass,index in classList" :key="index">
        <a href="">
          <img :src="gclass.classurl" alt="" />
          <p>{{gclass.classname}}</p>
        </a>
      </li>

    </div>
    <div class="classinfo">
      <li>

        <img src="./images/灯.png" alt="" />
        <a href="">华为手机</a>
        <i>$ 12</i>
        <span>
          <van-icon name="bag-o" size="40" color="#ffffd" />
        </span>
      </li>
      <li>
        <img src="./images/灯.png" alt="" />
        <a href="">华为手机</a>
        <i>$ 12</i>
        <span>
          <van-icon name="bag-o" size="40" color="#ffffd" />
        </span>
      </li>
      <li>
        <img src="./images/灯.png" alt="" />
        <a href="">华为手机</a>
        <i>$ 12</i>
        <span>
          <van-icon name="bag-o" size="40" color="#ffffd" />
        </span>
      </li>
      <li>
         <img src="./images/灯.png" alt="" />
        <a href="">华为手机</a>
        <i>$ 12</i>
        <span>
          <van-icon name="bag-o" size="40" color="#ffffd" />
        </span>
      </li>
       <li>
         <img src="./images/灯.png" alt="" />
        <a href="">华为手机</a>
        <i>$ 12</i>
        <span>
          <van-icon name="bag-o" size="40" color="#ffffd" />
        </span>
      </li>
       <li>
         <img src="./images/灯.png" alt="" />
        <a href="">华为手机</a>
        <i>$ 12</i>
        <span>
          <van-icon name="bag-o" size="40" color="#ffffd" />
        </span>

      </li>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  data() {
    return {
      searchcode: "",
      gclassone:'',

    };
  },
  mounted()
  {
   
     try {
        this.$store.dispatch('goods/getClass')
     } catch (error) {
       alert('获取商品分类失败')
     }

  },
  methods:{
  
  }
  ,
  computed:{
    //商品列表
    ...mapState('goods',['classList'])
  }
  
};
</script>
<style lang="less" scoped>
.classifycontainer {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  .classifylist {
    margin-top: 19px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    li {
      width: 20%;
      list-style-type: none;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 3% 0;
      a {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        img {
          width: 100%;
          height: 44px;
          border-radius: 12px;
          background: #f5f5f5;
        }
        p {
          display: block;
          height: 20px;
          font-family: NunitoSans-SemiBold;
          font-size: 14px;
          font-weight: 600;
          line-height: 20px;
          letter-spacing: 0px;
          color: #232323;
        }
      }
    }
  }
  .classinfo{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
      width:100%;
      height:34% ;
   li{
       width: 45%;
       height: 100%;
       display: flex;
       flex-direction: column;
       justify-content:space-evenly;
      position: relative;
       margin-bottom: 5%;
a{
    font-family: NunitoSans-Regular;
font-size: 14px;
font-weight: normal;
letter-spacing: 0px;
color: #5F5F5F;
}
span{
    position: absolute;
    right: 15px;
    bottom: 69px;
}
       img{
           width: 100%;
 
       }
       i{
           font-family: NunitoSans-Bold;
font-size: 14px;
font-weight: bold;
letter-spacing: 0px;
color: #303030;
       }

   }
  }
}
</style>