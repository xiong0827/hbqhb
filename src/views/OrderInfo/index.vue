<template>
  <div class="order">
    <!-- 顶部 -->
    <div class="top">
      <a href="#" class="a">
        <li></li>
        <li></li>
        <li></li>
      </a>
      <van-icon
        @click="$router.go(-1)"
        class="back"
        name="arrow-left"
        color="black"
        size="30"
      />
      <div class="deal">交易详情</div>
    </div>

    <div class="bottom">
      <!-- 商品详情 -->
      <div class="commodity">
        <div class="a">
          <li>
            <img @click="$router.push(
              {
                name:'goodsinfo',
                query:{
                  goods_id:goodsinfo.goods_id
                }
              }
            )" v-lazy="goodsinfo.gphoto" alt="" />
          </li>
          <li>{{ goodsinfo.title }}</li>
          <li>￥{{ goodsinfo.gprice }}</li>
        </div>
        <div class="b">
          <li>
            <span>商品总价</span>
            <span>￥{{ goodsinfo.gprice }}</span>
          </li>
          <li>
            <span>运费</span>
            <span>￥0.00</span>
          </li>
          <li>
            <span>实收款</span>
            <span>￥{{ goodsinfo.gprice }}</span>
          </li>
        </div>
      </div>
      <!-- 收货地址 -->
      <div class="location">
        <li>
          <span>收货地址</span>
          <span
            @click="
              $router.push({
                name: 'address',
              })
            "
            ><van-icon name="records" color="blue" size="24"
          /></span>
        </li>
        <li>{{ buserinfo.nickname }} {{ buserinfo.phone_id }}</li>
        <li>河南省商丘市梁园区平安街道睢阳大道中段236号商丘工学院</li>
      </div>
      <!-- 订单信息 -->
      <div class="card">
        <div class="title">
          <li>订单信息</li>
          <li><button>联系买家</button></li>
        </div>
        <div class="container">
          <li>买家昵称:{{ buserinfo.nickname }}</li>
          <li>
            <span>订单编号:{{ orderInfo.order_id }}</span>
            <span @click="copy(orderInfo.order_id)"><button>复制</button></span>
          </li>
          <li>宝贝快照:发生交易争议时，可作为判断依据</li>
          <!-- <li>支付宝交易号:20210205220011294814257</li> -->
          <li>交易时间:{{ orderInfo.ordertime }}</li>
        </div>
      </div>
    </div>
    <!-- 尾部 -->
    <div class="last">
      <button>联系卖家</button>
      <button @click="topay">{{ orderStatus }}</button>
    </div>
    <van-empty image="error" v-if="errorshow" description="商品不见了" />
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      errorshow: false,
    };
  },
  mounted() {
    this.getOrderInfo();
  },
  methods: {
    //获取订单详情
    async getOrderInfo() {
      try {
        await this.$store.dispatch(
          "order/getOrderInfo",
          this.$route.query.order_id
        );
      } catch (error) {
        this.$dialog
          .alert({
            message: error,
          })
          .then((this.errorshow = true));
      }
    },
    //复制订单信息
    copy(context)
    {
     document.execCommand('copy',false,context)
    },
    //去支付
    async topay() {
      if (this.orderInfo.orderstatus == 1) {
        let reuslt = await this.$store.dispatch("order/updateOrder",this.orderInfo.order_id);
        this.$dialog
          .alert({
            message: reuslt,
          })
          .then(()=>{
            this.getOrderInfo()
          });
      } else {
        return;
      }
    },
  },
  computed: {
    ...mapState("order", ["orderInfo"]),
    buserinfo() {
      return this.orderInfo.buserinfo || {};
    },
    goodsinfo() {
      return this.orderInfo.goodsinfo || {};
    },
    orderStatus() {
      switch (this.orderInfo.orderstatus) {
        case 1:
          return "去支付";
        case 2:
          return "已支付";
        case 3:
          return "已取消";
        default:
          return "已支付";
      }
    },
  },
};
</script>

<style lang="less" scoped>
.order {
  flex: 1;
  //   顶部
  .top {
    height: 100px;
    background: #ff6e53;
    position: relative;
    flex: 30%;
    padding-top: 20%;
    // 小点
    .a {
      width: 30px;
      position: absolute;
  
      right: 5%;
      top: 1%;
      li {
        margin-top: 30px;
        display: inline-block;
        height: 4px;
        width: 4px;
        background: black;
        border-radius: 50%;
        margin-left: 3px;
      }
    }
    .back {
      position: absolute;
      left: 5%;
      top: 10%;
    }
    .deal {
      height: 100px;
      width: 80%;
      background: #fff;
      border-radius: 20px;
      position: absolute;
      top: 100px;
      left: 40px;
      font-size: 25px;
      text-align: center;
      line-height: 100px;
      box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
    }
  }
  .bottom {
    background: #f2f2f2;
    // 商品详情
    .commodity {
      height: 300px;
      width: 100%;
      background: #fff;
      .a {
        display: flex;
        border-bottom: 1px solid #f7f7f7;
        li {
          list-style: none;
          margin: 60px 0 20px 10px;
          font-size: 18px;
        }
        li:nth-of-type(1) {
          height: 100px;
          width: 100px;
          img {
            width: 100%;
            height: 100%;
            border-radius: 10px;
          }
        }
        li:nth-of-type(2) {
          height: 100px;
          width: 180px;
        }
        li:nth-of-type(3) {
          height: 100px;
          width: 80px;
          color: #d1d1d1;
        }
      }
      .b {
        display: flex;
        flex-direction: column;
        font-size: 18px;
        li {
          list-style: none;
          width: 100%;
          height: 40px;
          line-height: 40px;
          color: #8c8c8c;
          display: flex;
          justify-content: space-between;
        }
        li:nth-of-type(3) {
          font-weight: 700;
          font-size: 20px;
          span:nth-of-type(1) {
            color: black;
          }
          span:nth-of-type(2) {
            color: #d31516;
          }
        }
        span {
          margin: 3px 10px;
        }
      }
    }
    // 收货地址
    .location {
      background: #fff;
      margin-top: 10px;
      display: flex;
      flex-direction: column;
      li {
        list-style: none;
        font-size: 18px;
        margin: 3px 10px;
        width: 95%;
        color: #8c8c8c;
      }
      li:nth-of-type(1) {
        color: black;
        font-weight: 700;
        display: flex;
        justify-content: space-between;
      }
    }
    // 订单信息
    .card {
      height: 300px;
      margin-top: 10px;
      background: #fff;
      .title {
        display: flex;
        justify-content: space-between;
        li {
          list-style: none;
          font-size: 18px;
          margin: 20px 10px;
          font-weight: 700;
          button {
            margin: 3px 10px;
            font-size: 16px;
            border-radius: 20px;
            border: 3px solid #f3f3f3;
            background: #fff;
            font-weight: 500;
          }
        }
      }
      .container {
        display: flex;
        flex-direction: column;
        padding-bottom: 100px;
        li {
          list-style: none;
          font-size: 18px;
          margin: 5px 10px;
          color: #7e7e7e;
          width: 95%;
        }
        li:nth-of-type(2) {
          display: flex;
          justify-content: space-between;
          button {
            font-size: 16px;
            border-radius: 10px;
            border: 3px solid #f3f3f3;
            background: #fff;
            font-weight: 500;
            transform: translateY(-3px);
          }
        }
      }
    }
  }
  .last {
    position: sticky;
    bottom: 0;
    left: 0;
    background: transparent;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: #fff;
    height: 60px;
    border-top: #7e7e7e 1px solid;
    button {
      width: 180px;
      height: 50px;
      border-radius: 20px;
      border: 2px solid #f3f3f3;
      font-size: 20px;
      font-weight: 700;
    }
    button:nth-of-type(2) {
      background: #ff6e53;
    }
  }
}
</style>