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
        <Searchinput placeholdervalue="搜索更多关键词" toppx="5" />
        <div class="more">
          <a @click="toRouters('classify')">更多>></a>
        </div>
      </div>
      <div class="classify">
        <li>
          <a
            @click="
              toRouters('classify', {
                classname: '户外运动',
              })
            "
          >
            <img src="./images/户外运动2.jpg" alt="" />
            <p>户外运动</p>
          </a>
        </li>
        <li>
          <a
            @click="
              toRouters('classify', {
                classname: '生活百货',
              })
            "
          >
            <img src="./images/生活用品2.webp" alt="" />
            <p>生活百货</p>
          </a>
        </li>
        <li>
          <a
            @click="
              toRouters('classify', {
                classname: '女装',
              })
            "
          >
            <img src="./images/女装.webp" alt="" />
            <p>女装</p>
          </a>
        </li>
        <li>
          <a
            @click="
              toRouters('classify', {
                classname: '手机数码',
              })
            "
          >
            <img src="./images/digital.webp" alt="" />
            <p>手机数码</p>
          </a>
        </li>
        <li>
          <a
            @click="
              toRouters('classify', {
                classname: '卡卷交易',
              })
            "
          >
            <img src="./images/coupon.jpg" alt="" />
            <p>卡卷交易</p>
          </a>
        </li>
        <li>
          <a
            @click="
              toRouters('classify', {
                classname: '游戏装备',
              })
            "
          >
            <img src="./images/game.webp" alt="" />
            <p>游戏装备</p>
          </a>
        </li>
      </div>

      <!-- <van-pull-refresh
        v-model="isLoading"
        success-text="刷新成功"
        @refresh="onRefresh"
      > -->
   
        <GoodsList>
          <template slot-scope="{ list }">
    
            <li v-for="(goods, index) in list" :key="index" v-show="goods">
              <a
                @click="
                  toRouters('goodsinfo', {
                    goods_id: goods.goods_id,
                  })
                "
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
              </a>
            </li>
          </template>
        </GoodsList>
    
      <!-- </div> -->
    </div>
    <Tabbar name="home" />
  </div>
</template>

<script>
import { toRouter } from "@/units/tologin";
import GoodsList from "@/components/Lazy";
export default {
  components: {
    GoodsList,
  },
  data() {
    return {};
  },
  methods: {
    toRouters: toRouter,
  },
};
</script>

<style lang="less" scoped>
.home {
  flex: 1;
  display: flex;
  flex-direction: column;
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
          border: 2px solid silver;
          width: 110px;
          border-radius: 8px;
          height: 80px;
          box-shadow: 1px 2px 1px #5f5f5f;
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
              color: darkred;
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