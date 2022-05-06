<template>
  <div class="releaseGoods">
    <div class="top">
      <div class="topLeft" @click="$router.go(-1)">
        <router-link to="">取消</router-link>
      </div>
      <div class="topRight">
        <van-button class="topButton btn1" round type="info">存草稿</van-button>
        <van-button class="topButton btn" round type="info">发布</van-button>
      </div>
    </div>
    <div class="title">
      <textarea placeholder="     写标题，能吸引更多人"></textarea>
    </div>
    <div class="center">
      <textarea
        placeholder="    卖家都关心品牌型号、入手渠道、转手原因...."
      ></textarea>
      <UpLoader />
    </div>
    <div class="footer">
      <div class="price">
        <div class="priceLeft">
          <van-icon name="balance-o" size="40" /><b>价格</b>
        </div>
        <div class="priceRight"><b>$150</b><span>></span></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ReleaseGoods",
};
</script>

<style lang="less" scoped>
.releaseGoods {
  flex: 1;
  overflow-x: hidden;

  background: #f2f2f2;
  .top {
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    .topLeft {
      margin-left: 4%;
      width: 36px;
      height: 26px;
      font-family: Inter-SemiBold;
      font-size: 18px;
      font-weight: 600;
      line-height: 26px;
      letter-spacing: -0.9px;
      color: #333232;
    }
    .topRight {
      width: 50%;
      height: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .topButton {
        width: 45%;
        height: 45px;
        font-family: Poppins-Medium;
        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
        letter-spacing: 0px;
        color: #1a1a1a;
        border: 1px solid rgba(0, 0, 0, 0.4);
      }
      .btn1 {
        background: #fff;
      }
      .btn {
        background: #e5f01c;
      }
    }
  }
  .title {
    width: 100%;
    height: 50px;
    background: #fff;
    textarea {
      width: 100%;
      height: 100%;
      border: none;
      resize: none;
      font-family: Inter-SemiBold;
      font-size: 24px;
      font-weight: 600;
      line-height: 50px;
      letter-spacing: -0.9px;
      color: #514a4a;
    }
  }
  .center {
    margin-top: 10px;
    width: 100%;
    height: 55%;
    position: relative;
    background: #fff;
    textarea {
      width: 100%;
      height: 100%;
      border: none;
      resize: none;
      font-family: Inter-SemiBold;
      font-size: 18px;
      font-weight: 600;
      line-height: 26px;
      letter-spacing: -0.9px;
      color: #7d7171;
    }
  }
  .footer {
    width: 100%;
    height: 375px;
    margin-top: 20px;
    background: #fff;
    .price {
      padding-top: 20px;
      width: 100%;
      height: 63px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .priceLeft {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 20%;
        b {
          font-family: Inter-SemiBold;
          font-size: 18px;
          font-weight: 600;
          line-height: 26px;
          letter-spacing: -0.9px;
          color: #3d3d3d;
        }
      }
      .priceRight {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 20%;
        margin-right: 10px;
        b {
          font-family: Roboto-Bold;
          font-size: 24px;
          font-weight: bold;
          line-height: 20px;
          letter-spacing: 1.2px;
          color: #f75858;
        }
        span {
          font-family: Roboto-Bold;
          font-size: 24px;
          font-weight: bold;
          line-height: 20px;
          letter-spacing: 1.2px;
          color: #c3b7b7;
        }
      }
    }
  }
}
</style>