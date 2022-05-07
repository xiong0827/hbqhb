<template>
  <div class="home">
    <div class="container">
      <div class="top">
        <img src="./images/logo.png" alt="" />
        <span><p>还不起花呗</p></span>
      </div>
      <div class="search">
        <Searchinput placeholdervalue="搜索更多关键词" toppx="5" />
        <div class="more">
          <router-link to="/classify">更多>></router-link>
        </div>
      </div>
      <div class="classify">
        <li>
          <a href="">
            <img src="./images/png1.png" alt="" />
            <p>时尚美妆</p>
          </a>
        </li>
        <li>
          <a href="">
            <img src="./images/png1.png" alt="" />
            <p>时尚美妆</p>
          </a>
        </li>
        <li>
          <a href="">
            <img src="./images/png1.png" alt="" />
            <p>时尚美妆</p>
          </a>
        </li>
        <li>
          <a href="">
            <img src="./images/png1.png" alt="" />
            <p>时尚美妆</p>
          </a>
        </li>
        <li>
          <a href="">
            <img src="./images/png1.png" alt="" />
            <p>时尚美妆</p>
          </a>
        </li>
        <li>
          <a href="">
            <img src="./images/png1.png" alt="" />
            <p>时尚美妆</p>
          </a>
        </li>
      </div>
      <van-pull-refresh v-model="isLoading"  success-text="刷新成功" @refresh="onRefresh">
      <div class="goodslist">
        <li v-for="goods in goodsInfoList" :key="goods.goods_id">
          <a href="">
            <img v-if="goods.goodsphoto" v-lazy="goods.goodsphoto[0]" alt="" />
            <div>
              <p>{{ goods.title }}</p>
            </div>
            <b>{{ goods.gprice }}$</b>
            <div class="want">
              <i v-if="goods.wantlist">{{ goods.wantlist.length }}</i>
              <p>想要</p>
            </div>
            <div class="wantbuy">我想要</div>
          </a>
        </li>
      </div>
      </van-pull-refresh>
    </div>
    <Tabbar name="home" />
    
  </div>
</template>

<script>
import { Toast } from 'vant';
import { mapState } from "vuex";
export default {
  data() {
    return {
      searchcode: "",
      pagenum: 6,
      atpage: 2,
      isLoading:false
    };
  },
  mounted() {
    this.getGoodsList();
  },
  methods: {
    async getGoodsList() {
      // let params=new FormData()
      // params.append('pagenum',this.pagenum)
      // params.append('atpage',this.atpage)
      // console.log();
      await this.$store.dispatch("goods/getGoodsList", {
        pagenum: this.pagenum,
        atpage: this.atpage,
      })

    },
   async onRefresh() {
      let max=Math.ceil(this.goodsCount / this.pagenum)
      console.log(max);
      let ratpage=Math.floor(Math.random() * (max - 1 + 1)) + 1;
      this.atpage=ratpage
      await this.getGoodsList()
      this.isLoading=false
    },
  },
  computed: {
    goodsCount() {
      return this.goodsInfoList.goodsCount;
    },
    ...mapState("goods", ["goodsInfoList",'goodsCount']),
    //商品图片
    // goodsphoto(goods)
    // {
    //   console.log(goods);
    //   return goods.goodsphoto[0]
    // }
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
  overflow: scroll;
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
        margin-bottom: 10px;
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
          height: 68.3%;
          width: 100%;
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
    //   overflow: scroll;
      flex: 7;
      flex-wrap: wrap;
      justify-content: space-evenly;

      li {
        width: 40%;
        height: 230px;
        border-radius: 3px;
        display: flex;
        flex-direction: column;
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
              color: gainsboro;
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
            height: 50px;
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