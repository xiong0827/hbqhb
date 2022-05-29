<template>
  <div class="classifycontainer" >
    <Searchinput placeholdervalue="搜索更多关键词" toppx="40" />
    <div class="classifylist"   v-if="classList">
      <li
    
        v-for="(gclass) in classList"
        :key="gclass.classname"
        @click="getclassgoods(gclass.classname)"
        :class="{ active: gclassone == gclass.classname }"
      >
        <a href="">
          <img :src="gclass.classurl" alt="" />
          <p>{{ gclass.classname }}</p>
        </a>
      </li>
    </div>
    <!-- <div class="classinfo"> -->
    <van-list
    v-show="goodsCount"
      class="classinfo"
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
      offset="300"
      :error.sync="error"
      error-text="请求失败，点击重新加载"
      
    >
      <li
        v-for="goods,index in list"
        :key="index"
        v-show="goods._id"
        @click="
          $router.push({
            name: 'goodsinfo',
            query: {
              goods_id: goods.goods_id,
            },
          })
        "
      >
        <img v-if="goods.goodsphoto[0]" v-lazy="goods.goodsphoto[0]" alt="" />
        <a href="">{{ goods.title }}</a>
        <i>{{ goods.gprice }}</i>
      </li>
    </van-list>
  </div>
</template>

<script>
import { Toast } from "vant";
import { mapState } from "vuex";
export default {
  data() {
    return {
      searchcode: "",
      gclassone: this.$route.query.classname,
      pagenum: 4,
      atpage: 1,
      isLoading: false,
      loading: false, // 是否处在加载状态
      finished: false, // 是否已加载完成
      error: false,
      list: [],
      total: 0,
    };
  },
  mounted() {
   
 
      this.$store.dispatch("goods/getClass");
        this.getList();
     

  },
  beforeUpdate()
  {
  
  },
  methods: {
    getclassgoods(classname) {
      this.$router.replace({
        name:'classify',
        query:{
          classname
        }
      })
    },
    async getGoodsList() {
      await this.$store.dispatch("goods/getGoodsList", {
        pagenum: this.pagenum,
        atpage: this.atpage,
        gclassone: this.gclassone,
      });
    },
    async getList() {
     await this.getGoodsList();
      this.total = this.goodsCount;
      if (this.goodsCount == 0) {
        this.list = []; // 清空数组
        this.finished = true; // 停止加载
      }
      // 若数据条数不等于0
      this.total = this.goodsInfoList.length; // 给数据条数赋值
      for (const key in this.goodsInfoList) {
        this.list.push(this.goodsInfoList[key]);
      }
      // 将数据放入list中
      this.loading = false; // 加载状态结束
      // 如果list长度大于等于总数据条数,数据全部加载完成
      if (this.list.length >= this.goodsCount) {
        this.finished = true; // 结束加载状态
      }
    },
    onLoad() {
      // 若加载条到了底部
      this.getList(); // 调用上面方法,请求数据
      this.atpage++;
    },
    onRefresh() {
      this.finished = false; // 清空列表数据
      this.loading = true; // 将 loading 设置为 true，表示处于加载状态
      this.atpage = 1; // 分页数赋值为1
      this.list = []; // 清空数组
      this.onLoad(); // 重新加载数据
    },
  },
  computed: {
    //商品列表
    ...mapState("goods", ["goodsInfoList", "goodsCount", "classList"]),
  },
  
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
    .active {
      background: cornflowerblue;
    }
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    li {
      padding-top: 10px;
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
          margin-bottom: 10%;
          width: 44px;
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
  .classinfo {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 100%;
    height: 34%;
    li {
      width: 45%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      position: relative;

      a {
        font-family: NunitoSans-Regular;
        font-size: 14px;
        font-weight: normal;
        letter-spacing: 0px;
        color: #5f5f5f;
      }
      span {
        position: absolute;
        right: 15px;
        bottom: 69px;
      }
      img {
        width: 100%;
        height: 175px;
        box-shadow: 1px 2px 3px darkgrey;
      }
      i {
        font-family: NunitoSans-Bold;
        font-size: 14px;
        font-weight: bold;
        letter-spacing: 0px;
        color: crimson;
      }
    }
  }
}
</style>