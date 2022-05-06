<template>
  <div class="orderGoods">
    <van-nav-bar left-arrow title="购买宝贝" @click-left="onClickLeft" />
    <div class="buyOrder">
      <div class="buyOrderInfo">
        <h3>物品名称</h3>
        <b>Rp129.000</b>
        <div class="stepper1">
          <van-stepper
            v-model="value"
            theme="round"
            button-size="22"
            disable-input
          />
          <div class="note">Note</div>
          <div class="collect">
            <van-icon name="like-o" size="18px" color="#eee" />
          </div>
        </div>
      </div>
      <div class="buyOrderImg">
        <img src="./images/肉丸.png" alt="" />
      </div>
    </div>
    <div class="buyBottom">
      <div class="bottomTop">
        <h4>Popular dishes from this resto</h4>
        <div class="address">
          <div class="addressTop">
            <h2>距离</h2>
            <a href="">选择地址</a>
          </div>
          <div class="addressBottom"><b>·</b>配送时间</div>
        </div>
      </div>
      <div class="bottom">
        <div class="puy">
          <div class="puyImg">
            <img src="./images/付钱.svg" alt="" width="40px" height="40px" />
            <b>·应用付款</b>
          </div>
          <h3>Rp129.000</h3>
        </div>
        <div class="button">
          <van-button round type="info" class="btn">圆形按钮</van-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OrderGoods",
  data() {
    return {
      value: 1,
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="less" scoped>
.orderGoods {
  background: #eeeeee;
  flex: 1;
  overflow-x: hidden;
  .buyOrder {
    background: #fff;
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: space-between;
    padding-top: 60px;
    .buyOrderInfo {
      margin-left: 5px;
      width: 50%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      h3 {
        font-family: Inter-SemiBold;
        font-size: 18px;
        font-weight: 600;
        line-height: 26px;
        letter-spacing: -0.9px;
        color: #3d3d3d;
      }
      b {
        font-family: Roboto-Regular;
        font-size: 14px;
        font-weight: normal;
        line-height: 20px;
        letter-spacing: 0.7px;
        color: #2f2f4a;
      }
      .stepper1 {
        width: 100%;
        height: 15%;
        margin-top: 50%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        .note {
          text-align: center;
          border: 1px solid #dcdde1;
          border-radius: 40%;
          width: 20%;
          height: 80%;
          line-height: 22px;
          font-family: Roboto-Regular;
          font-size: 10px;
          font-weight: normal;
          letter-spacing: 0.7px;
          color: #2f2f4a;
        }
      }
      .collect {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 12%;
        height: 80%;
        background: #dcdde1;
        border-radius: 50%;
        .van-icon {
          margin-top: 2px;
        }
      }
    }
    .buyOrderImg {
      margin-right: 5px;
      width: 30%;
      height: 30%;
      img {
        width: 100%;
      }
    }
  }
  .buyBottom {
    background: #fff;
    width: 100%;
    height: 65%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 10px;
    .bottomTop {
      width: 100%;
      height: 112px;

      h4 {
        padding-top: 20px;
        padding-left: 5px;
        font-family: Inter-Medium;
        font-size: 13px;
        font-weight: 500;
        line-height: 18px;
        letter-spacing: -0.65px;
        color: #333232;
      }
      .address {
        background: #e8e8e8;
        margin-top: 15px;
        width: 98%;
        height: 60px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        .addressTop {
          display: flex;
          justify-content: space-between;
        }
        .addressBottom {
          position: relative;
          bottom: 0;
          margin-left: 5px;
        }
      }
    }
    .bottom {
      width: 100%;
      height: 20%;
      background: #fff;
      .puy {
        margin-left: 30px;
        width: 100%;
        height: 32px;
        display: flex;
        justify-content: flex-start;
        align-items: center;

        .puyImg {
          width: 100px;
          border-radius: 16px;
          background: #fdedf0;
          box-sizing: border-box;
          border: 1px solid #ffe1e6;
          img {
            vertical-align: middle;
          }
        }
        h3 {
          margin-left: 20px;
        }
      }
      .button {
        display: flex;
        justify-content: flex-end;
        .btn {
          margin-right: 10px;
          width: 130px;
          height: 44px;
          border: none;
          background: #e94b64;
          font-family: Inter-SemiBold;
          font-size: 16px;
          font-weight: 600;
          line-height: 20px;
          letter-spacing: -0.8px;
          color: #c0bd21;
        }
      }
    }
  }
}
</style>