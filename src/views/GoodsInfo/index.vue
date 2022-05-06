<template>
  <div class="goodsinfo">
    <div class="top">
      <Backtop />
      <div class="top1">
        <div class="ava">
          <img src="./images/头像.svg" alt="" /><b>沸羊羊</b>
        </div>
        <div class="follow">
          <van-button class="btn" round type="info">+关注</van-button>
        </div>
      </div>
      <div class="center">
        <div class="price">
          <b>$150</b>
        </div>
        <div class="goodsname">Men's Football Shoes BB5592</div>
        <div class="goodsinfo1">
          shoes are very light to wear shoes with original grade quality, ORI
          grade shoes are shoes that are packaged with boxes according to the
          original shoes with superior quality.
        </div>
        <div class="goodssvg">
          <img src="./images/鞋1.svg" alt="" />
          <img src="./images/鞋1.svg" alt="" />
          <img src="./images/鞋1.svg" alt="" />
          <img src="./images/鞋1.svg" alt="" />
        </div>
      </div>
    </div>
    <div class="collect">
      <h4>留言</h4>
      <div class="collectbox1">
        <img src="./images/logo.png" alt="" />
        <input type="text" placeholder="请留言，询问更多细节" />
      </div>
      <div class="collectbox2">
        <img src="./images/logo.png" alt="" />
        <h5>张三</h5>
        <b>balabalabala</b>
      </div>
      <div class="collectbox3">
        <img src="./images/logo.png" alt="" />
        <h5>张三</h5>
        <b>balabalabala</b>
      </div>
      <div class="collectbox4">
        <a href="#">查看全部留言>></a>
      </div>
    </div>
    <div class="bottom">
      <div class="mind"><van-icon name="like-o" size="40px" /><b>400</b></div>
      <div class="bit"><van-icon name="star-o" size="40px" /><b>400</b></div>
      <div class="buy">
        <van-button round type="info" class="btn">购买</van-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsInfo",
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
          margin-top: 5px;
          margin-left: 20px;
          vertical-align: middle;
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
        font-size: 12px;
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
        img {
          margin-top: 71px;
          width: 50%;
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
    align-items: flex-start;
    flex-wrap: wrap;
    img {
      margin-left: 50px;
      width: 8%;
    }
    h5 {
      margin-left: 5px;
    }
    b {
      font-family: Inter-Medium;
      font-size: 14px;
      font-weight: 500;
      line-height: 35.78px;
      letter-spacing: 0px;
      color: #3d3d3d;
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
      line-height: 35.78px;
      letter-spacing: 0px;
      color: #3d3d3d;
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
    width: 100%;
    height: 70px;
    position: fixed;
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
        width: 76px;
        height: 44px;
        background: #e94b64;
        color: #c0bd21;
      }
    }
  }
}
</style>