<template>
  <div class="home">
    <!-- <van-pull-refresh
      v-model="isLoading"
      success-text="刷新成功"
      @refresh="onRefresh"
    > -->
      <div class="container">
        <div class="top">
          <img src="./images/logo.png" alt="" />
          <span><p>还不起花呗</p></span>
        </div>
        <div class="search">
          <Searchinput placeholdervalue="搜索更多关键词" toppx="5"  />
          <div class="more">
            <router-link to="/classify">更多>></router-link>
          </div>
        </div>
        <div class="classify">
          <li>
            <router-link :to="{name:'classify',query:{
              classname:'运动户外'
            }}">
              <img src="./images/户外运动2.jpg" alt="" />
              <p>户外运动</p>
            </router-link>
          </li>
          <li>
            <router-link :to="{name:'classify',query:{
              classname:'生活百货'
            }}">
              <img src="./images/生活用品2.webp" alt="" />
              <p>生活百货</p>
            </router-link>
          </li>
          <li>
            <router-link :to="{name:'classify',query:{
              classname:'女装'
            }}">
              <img src="./images/女装.webp" alt="" />
              <p>女装</p>
            </router-link>
          </li>
          <li>
            <router-link :to="{name:'classify',query:{
              classname:'手机数码'
            }}">
              <img src="./images/digital.webp" alt="" />
              <p>手机数码</p>
            </router-link>
          </li>
          <li>
            <router-link :to="{name:'classify',query:{
              classname:'卡卷交易'
            }}">
              <img src="./images/coupon.jpg" alt="" />
              <p>卡卷交易</p>
            </router-link>
          </li>
          <li>
            <router-link :to="{name:'classify',query:{
              classname:'游戏装备'
            }}"> 
              <img src="./images/game.webp" alt="" />
              <p>游戏装备</p>
            </router-link>
          </li>
        </div>

      
        <van-list
          class="goodslist"
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
          offset="300"
          :error.sync="error"
          error-text="请求失败，点击重新加载"
          v-if="goodsCount"
        >
           
          <!-- <van-pull-refresh
        v-model="isLoading"
        success-text="刷新成功"
        @refresh="onRefresh"
      > -->
          <!-- <div   class="goodslist"> -->
          <li  v-for="goods,index in list" :key="index" v-show="goods">
            <router-link
              :to="{
                name: 'goodsinfo',
                query: {
                  goods_id: goods.goods_id,
                },
              }"
            >
              <img
                v-if="goods.goodsphoto"
                v-lazy="goods.goodsphoto[0]"
                alt=""
              />
              <div>
                <p>{{ goods.title }}</p>
              </div>
              <b>￥ {{ goods.gprice }}</b>
              <div class="want">
                <i v-if="goods.wantlist">{{ goods.wantlist.length }}</i>
                <p>想要</p>
              </div>
              <div class="wantbuy">我想要</div>
            </router-link>
          </li>
          <!-- </div> -->
        </van-list>
     
        <!-- </van-pull-refresh> -->
      </div>
    <!-- </van-pull-refresh> -->
    <Tabbar name="home" />
  </div>
</template>

<script>
import { Toast } from "vant";
import { mapState } from "vuex";
export default {
  data() {
    return {
      searchcode: "",
      pagenum: 6,
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
this.getGoodsList()
  },
  methods: {
    async getGoodsList() {
      await this.$store.dispatch("goods/getGoodsList", {
        pagenum: this.pagenum,
        atpage: this.atpage,
      });
    },
    async onRefresh() {
      let max = Math.ceil(this.goodsCount / this.pagenum);
      let ratpage = Math.floor(Math.random() * (max - 1 + 1)) + 1;
      this.atpage = ratpage;
      await this.getList();
      this.isLoading = false;
    },
   async  getList() {
     await this.getGoodsList();
      this.total= this.goodsCount
      if (this.goodsCount == 0) {
        // 判断获取数据条数若等于0
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
    ...mapState("goods", ["goodsInfoList", "goodsCount"]),
    //商品图片
    // goodsphoto(goods)
    // {
    //   console.log(goods);
    //   return goods.goodsphoto[0]
    // }
    ratpage()
    {
      let max = Math.ceil(this.goodsCount / this.pagenum);
   return Math.floor(Math.random() * (max - 1 + 1)) + 1;
    }
  },
  watch: {
    // pagenum:{
    // }
  },
};
</script>

<style lang="less" scoped>
.home {
  flex: 1;
  display: flex;
  overflow-x: hidden;
  .container {
    flex: 1;
    display: flex;
    flex-direction: column;
    div {
      display: flex;
    }
    .top {
      flex: 1;
      align-items: center;
      justify-content: flex-start;
      margin-top: 4%;
      img {
        padding-left: 3%;
       
      }
      span {
        margin-left: 7%;
        p {
          font-family: Roboto-Medium;
          font-size: 20px;
          font-weight: 500;
          letter-spacing: 0px;
          color: rgba(0, 0, 0, 0.87);
        }
      }
    }
    .search {
      flex: 1;
      flex-direction: column;
      .more {
        flex: 1;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        margin: 10px 0;
        a {
          padding-right: 5%;
          font-family: SourceHanSansCN-Regular;
          font-size: 10px;
          font-weight: normal;
          line-height: 16px;
          letter-spacing: 0px;
          color: #3d3d3d;
        }
      }
    }
    .classify {
      flex: 3;
      flex-wrap: wrap;
      li {

        width: 33%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        text-align: center;
        margin-bottom: 5px;
     
        img {
            box-shadow: 0px 2px 0px 2px darkgray;
      width:110px;
           height: 80px;
        }
        p {
          font-family: Roboto-Regular;
          font-size: 12px;
          margin-top: 10%;
          font-weight: normal;
          letter-spacing: 0px;
          color: rgba(0, 0, 0, 0.87);
        }
      }
    }
    .goodslist {
      margin-top: 2%;
      justify-content: space-evenly;
      display: flex;
      flex-wrap: wrap;
      padding-bottom: 60px;
      li {
        width: 45%;
        height: 280px;
        border-radius: 3px;
        display: flex;
        flex-direction: row;
        border-bottom: 1px solid darkgray;
        background: #ffffff;
        list-style-type: none;
        box-shadow: 2px 5px 3px gainsboro;
        margin-bottom: 5%;
        a {
          width: 100%;
          height: 100%;
          position: relative;
          img {
            width: 100%;
            height: 56%;
          }
          .wantbuy {
            position: absolute;
            right: 3%;
            bottom: 8%;
            width: 40%;
            height: 10%;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 4px;
            border-radius: 20px;
            background: #070707;
            color: #ffffff;
            box-sizing: border-box;
            border: 1px solid #151414;
          }
          .want {
            width: 60%;
            height: 35px;
            display: flex;
            align-items: center;
            margin-left: 5%;
            i {
              font-family: Roboto-Medium;
              font-size: 10px;
              font-weight: 500;
              letter-spacing: 0px;
              color:darkred;
              margin-right: 4%;
            }
            p {
              font-family: Roboto-Medium;
              font-size: 10px;
              font-weight: 500;
              letter-spacing: 0px;
              color: #3d3d3d;
            }
          }
          b {
            display: block;
            width: 100%;
            font-family: Roboto-Medium;
            font-size: 14px;
            font-weight: 500;
            letter-spacing: 0px;
            color: #e90000;
            display: flex;
            margin-left: 5%;
          }
          div {
            width: 100%;
            height: 65px;
            overflow: hidden;
            p {
              font-family: Roboto-Regular;
              font-size: 18px;
              font-weight: normal;
              line-height: 22px;
              letter-spacing: 0px;
              color: rgba(0, 0, 0, 0.87);
            }
          }
        }
      }
    }
  }
}
</style>