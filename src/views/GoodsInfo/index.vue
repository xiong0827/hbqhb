<template>
  <div class="goodsinfo">
    <Backtop />
    <div class="top" v-if="goodsinfo && issueper">
      <div class="top1">
        <div class="ava">
          <img
            :src="issueper.avatarurl"
            @click="
              $router.push({
                name: 'personal',
                query: {
                  phone_id: issueper.phone_id,
                },
              })
            "
            alt=""
          /><b>{{ issueper.nickname }}</b>
        </div>
        <div class="follow">
          <van-button class="btn" round type="info">+关注</van-button>
        </div>
      </div>
      <div class="center">
        <div class="price">
          <b>￥{{ goodsinfo.gprice }}</b>
        </div>
        <div class="goodsname">{{ goodsinfo.title }}</div>
        <div class="goodsinfo1">
          {{ goodsinfo.details }}
        </div>
        <div class="goodssvg">
          <img
            v-for="(img, index) in goodsphoto"
            :key="index"
            :src="img"
            alt=""
          />
        </div>
      </div>
    </div>
    <div class="collect" v-if="goodsIsShow && seeUserInfo">
      <h4>留言</h4>
      <div class="collectbox1">
        <img :src="seeUserInfo.avatarurl" alt="" />
        <input
          type="text"
          v-model="replytitle"
          placeholder="请留言，询问更多细节"
        />
      </div>
      <div
        class="collectbox2"
        v-for="reply in replayInfo"
        :key="reply.reply_id"
        v-show="goodsinfo.greply"
      >
        <img :src="reply.avatarurl" alt="" />
        <h5>{{ reply.nickname }}</h5>
        <b>{{ reply.replytitle }}</b>
      </div>
      <div class="collectbox4">
        <a href="#">查看全部留言>></a>
      </div>
    </div>
    <div class="bottom" v-if="seeUserInfo">
      <div class="mind" @click="addlike">
        <van-icon name="like" color="red" size="40px" /><b>{{
          goodsinfo.likes
        }}</b>
      </div>

      <div class="bit" @click="addwantlist" v-show="goodsinfo.wantshow == -1">
        <van-icon name="star-o" size="40px" /><b>{{
          goodsinfo.wantlist ? goodsinfo.wantlist.length : 0
        }}</b>
      </div>
      <div class="bit" v-show="goodsinfo.wantshow != -1">
        <van-icon name="star" color="red" size="40" @click="addwantlist" /><b>{{
          goodsinfo.wantlist ? goodsinfo.wantlist.length : 0
        }}</b>
      </div>
      <div class="buy">
        <van-button @click="addreply" round type="info" size="50" class="btn"
          >留言</van-button
        >
        <van-button
          v-show="goodsinfo.isbuy != 0"
          round
          type="info"
          size="50"
          class="btn"
          @click="gosubmit"
          >购买</van-button
        >
        <van-button
          round
          v-show="goodsinfo.isbuy == 0"
          type="info"
          class="btn"
          size="50"
          >编辑信息</van-button
        >
      </div>
    </div>
    <van-empty image="error" v-if="!goodsIsShow" description="商品不见了" />
  </div>
</template>

<script>

import { mapState } from "vuex";
export default {
  name: "GoodsInfo",
  data() {
    return {
      goodsIsShow: true,
      replytitle: "",
    };
  },
  mounted() {
    try {
      this.getgoodsinfo();
      setTimeout(() => {
        this.getisseinfo(this.goodsinfo.phone_id);
      }, 200);
    } catch (error) {}
  },
  //商品详情
  computed: {
    //商品详情
    ...mapState("goods", ["goodsinfo"]),
    //发布人信息
    // issueper() {
    //   return this.goodsinfo.issueper || {};
    // },
    ...mapState("user", { issueper: "issueper" }),
    //图片信息
    goodsphoto() {
      return this.goodsinfo.goodsphoto || [];
    },
    // 游客信息
    seeUserInfo() {
      return this.goodsinfo.seeuserinfo || {};
    },
    //replayInfo
    replayInfo() {
      return this.goodsinfo.greply || [];
    },
  },
  methods: {
    //获取商品信息
    async getgoodsinfo() {
      try {
        await this.$store.dispatch(
          "goods/getGoodsInfo",
          this.$route.query.goods_id
        );
      } catch (error) {
        this.goodsIsShow = false;
      }
    },
    //商品点赞
   async addlike () {
      try {
        await this.$store.dispatch(
          "goods/getUserLike",
          this.goodsinfo.goods_id
        );
        this.getgoodsinfo();
      } catch (error) {
        this.$dialog
          .alert({
            message: error,
          })
          .then(() => {});
      }
    },
    //收藏
   async addwantlist() {
      try {
        await this.$store.dispatch(
          "goods/addWantList",
          this.goodsinfo.goods_id
        );

        this.getgoodsinfo();
      } catch (error) {
        this.$dialog
          .alert({
            message: error,
          })
          .then(() => {});
      }
    },
    //留言
    async addreply() {
      try {
        if (this.replytitle.trim().length > 0) {
          await this.$store.dispatch("goods/addReply", {
            goods_id: this.goodsinfo.goods_id,
            replytitle: this.replytitle,
          });
           this.replytitle = "";
          this.getgoodsinfo();
        } else {
          this.$dialog
            .alert({
              message: "不允许回复空",
            })
            .then(() => {
              this.replytitle = "";
            });
        }
      } catch (error) {
        this.$dialog
          .alert({
            message: error,
          })
          .then(() => {
            this.replytitle = "";
          });
      }
    },
    //获取发布者信息
    async getisseinfo() {
      await this.$store.dispatch(
        "user/getIsserUserInfo",
        this.goodsinfo.phone_id
      );
    },
    //过去浏览者信息
    async getseeuserinfo() {
      await this.$store.dispatch("user/getUserInfo");
    },
    gosubmit() {
            this.$router.push({
              name: "ordergoods",
              query: {
                goods_id: this.goodsinfo.goods_id,
              },
            });
    },
  },
};
</script>
<style lang="less" scoped>
.goodsinfo {
  flex: 1;
  .top {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    .top1 {
      display: flex;
      justify-content: center;
      width: 100%;
      .ava {
        width: 70%;
        img {
          width: 20%;
          margin-top: 5px;
          margin-right: 5%;
          margin-left: 5%;
          vertical-align: middle;
          border-radius: 50%;
        }
        b {
          font-size: 18px;
          font-weight: normal;
          line-height: 38px;
          letter-spacing: 0px;
          color: #000000;
          font-family: SourceHanSansCN-Regular;
          vertical-align: middle;
        }
      }
      .follow {
        width: 25%;
        .btn {
          width: 100%;
          align-items: center;
          align-self: stretch;
          border-radius: 20px;
          background: #ffffff;
          box-sizing: border-box;
          border: 1px solid rgba(0, 0, 0, 0.4);
          color: #000000;
        }
      }
    }
    .center {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      .price {
        margin-top: 45px;
        margin-left: 35px;
        font-family: Roboto-Bold;
        font-size: 36px;
        font-weight: bold;
        line-height: 20px;
        letter-spacing: 1.2px;
        color: #f75858;
      }
      .goodsname {
        width: 80%;
        margin-top: 38px;
        margin-left: 35px;
        font-family: Roboto-Regular;
        font-size: 20px;
        font-weight: normal;
        line-height: 28px;
        letter-spacing: 1px;
        color: #2f2f4a;
      }
      .goodsinfo1 {
        margin-top: 16px;
        margin-left: 35px;
        width: 83%;
        font-family: Roboto-Regular;
        font-size: 16px;
        font-weight: normal;
        line-height: 20px;
        letter-spacing: 0.8px;
        color: #2f2f4a;
      }
      .goodssvg {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        margin-bottom: 30px;
        img {
          margin-top: 10px;
          width: 90%;
        }
      }
    }
  }
  .collect {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-bottom: 80px;
    h4 {
      padding-left: 9px;
      padding-top: 7px;
      font-family: Roboto-Regular;
      font-size: 18x;
      font-weight: normal;
      line-height: 20px;
      letter-spacing: 0.7px;
      color: #3d3d3d;
      margin-bottom: 10px;
    }
  }
  .collectbox1 {
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    flex-wrap: wrap;
    img {
      margin-left: 5px;
      width: 10%;
      height: 50px;
      width: 50px;
      border-radius: 50%;
    }
    input {
      width: 70%;
      padding: 8px;
      border-radius: 20px;
      background: #d8d8d8;
      box-shadow: 0px 1px 0px 0px #e6e6e6;
      margin-right: 5%;
      margin-top: 1%;
    }
  }
  .collectbox2 {
    margin-top: 20px;
    display: flex;
    justify-content: flex-start;
    align-items: stretch;
    flex-wrap: wrap;
    img {
      margin-left: 50px;
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
    h5 {
      margin-left: 5px;
     transform:translateY(-20px)
    }
    b {
      transform:translateX(-25px);
      margin-top: 6%;
      font-family: Inter-Medium;
      font-size: 14px;
      font-weight: 500;
      letter-spacing: 0px;
      display: flex;
      justify-content: flex-start;
      align-items: stretch;
      color: #3d3d3d;
      width: 50%;
    }
  }
  .collectbox3 {
    margin-top: 20px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    img {
      margin-left: 80px;
      width: 8%;
    }
    h5 {
      margin-left: 5px;
    }
    b {
      font-family: Inter-Medium;
      font-size: 14px;
      font-weight: 500;
      letter-spacing: 0px;
      color: #3d3d3d;
      width: 40%;
    }
  }
  .collectbox4 {
    width: 100%;
    text-align: center;
    a {
      font-family: SourceHanSansCN-Regular;
      font-size: 12px;
      font-weight: normal;
      line-height: 24px;
      letter-spacing: 0px;
      color: #767676;
    }
  }
  .bottom {
    background: #fff;
    height: 70px;
    position: fixed;
    max-width: 412px;
    width: 100%;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .mind {
      margin-left: 5px;
      b {
        font-size: 12px;
        font-weight: normal;
        letter-spacing: 0.5px;
        color: #2f2f4a;
      }
    }
    .bit {
      b {
        font-size: 12px;
        font-weight: normal;
        letter-spacing: 0.5px;
        color: #2f2f4a;
      }
    }
    .buy {
      margin-right: 5px;
      .btn {
        padding: 10px 0;
        margin-right: 10px;
        width: 76px;
        height: 44px;
        background: #686de0;
        color: #ffffff;
      }
    }
  }
}
</style>