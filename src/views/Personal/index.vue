<template>
  <div class="personal">
    <!-- 头部 -->
    <div class="head">
      <li @click="$router.go(-1)">
        <van-icon name="arrow-left" class="c" size="20" />
      </li>
      <li>
        <van-icon name="more-o" class="d" size="20" />
      </li>
    </div>
    <!-- 头像 -->
    <div class="center">
      <span class="header">
        <img v-lazy="userInfo.avatarurl" alt="" />
      </span>
      <span class="name">{{userInfo.nickname}}</span>
    </div>
    <div class="num">
      <span class="care">
        <li>350</li>
        <li>关注</li>
      </span>
      <span class="fan">
        <li>364</li>
        <li>粉丝</li>
      </span>
    </div>
    <!-- 矩形框 -->
    <div class="cube">
      <div class="follow">
        <van-icon name="user-o" size="30" class="a" />
        <a href="#">关注</a>
      </div>
      <div class="massages">
        <van-icon name="guide-o" size="30" class="b" />
        <a href="#">发消息</a>
      </div>
    </div>
    <!-- 隔行 -->
    <div class="baby">全部宝贝</div>
    <!-- 底部 -->
    <div class="bottom">
      <span v-for="goods in mainGoodsList" :key="goods._id" @click="$router.push(
        {
          name:'goodsinfo',
          query:{
            goods_id:goods.goods_id
          }
        }
      )">
        <div class="img">
          <img v-if="goods.goodsphoto[0]" v-lazy='goods.goodsphoto[0]' alt="" />
        </div>
        <ul>
          <li><p>{{goods.gdate}}</p></li>
          <li><p>{{goods.title}}</p></li>
          <li><p>{{goods.gprice}}</p></li>
        </ul>
      </span>
    </div>
  </div>
</template>

<script>
import {Toast} from 'vant'
import {mapState} from 'vuex'
export default {
  mounted()
  { try {
     this.$store.dispatch('user/getUserInfo',this.$route.query.phone_id)
     this.$store.dispatch('goods/getMainGoodsList',this.$route.query.phone_id)
  } catch (error) {
    Toast(Error)
  }
   

  },
  computed:
  {
 ...mapState('user',['userInfo']),
 ...mapState('goods',['mainGoodsList'])
  }
}
</script>

<style lang="less" scoped>
.personal {
  flex: 1;
  background: #ffffff;
  //   头部
  .head {
    height: 80px;
    // background: skyblue;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    li {
      list-style: none;
    }
    .c {
      margin-left: 20px;
    }
    .d {
      margin-right: 20px;
    }
  }
  //   中间
  .center {
    height: 200px;
    width: 100%;
    // background: #999;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    // 头像
    .header {
      height: 100px;
      width: 100px;
      //   background: orange;
      border: 1px solid black;
      border-radius: 50%;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
    .name {
      transform: translateY(-20px);
      height: 23px;
      width: 123px;
      text-align: center;
      //   border: 1px solid black;
      font-family: Roboto-Medium;
      font-size: 20px;
      font-weight: 500;
      letter-spacing: 0.5px;
      color: #1d1717;
    }
  }
  //   数字
  .num {
    transform: translateY(-30px);
    height: 100px;
    display: flex;
    justify-content: space-between;
    .care,
    .fan {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding-left: 80px;
      li:nth-child(1) {
        list-style: none;
        width: 28px;
        height: 34px;
        background: #ffffff;
        font-family: AirbnbCerealApp-Medium;
        font-size: 16px;
        font-weight: normal;
        line-height: 34px;
        letter-spacing: 0px;
        color: #110c26;
      }
      li:nth-child(2) {
        list-style: none;
        width: 38px;
        height: 21px;
        background: #ffffff;
        font-family: Roboto-Medium;
        font-size: 18px;
        font-weight: 500;
        letter-spacing: 0.9px;
        color: #acaab5;
      }
    }
    .fan {
      padding-right: 80px;
    }
  }
  //   矩形框
  .cube {
    transform: translateY(-20px);
    display: flex;
    justify-content: space-around;
    .follow {
      width: 154px;
      height: 50px;
      border-radius: 10px;
        display: flex;
        justify-content: center;
       align-items: center;
        flex-direction: row;
      border: 1.5px solid #5668ff;
      .a {
        transform: translate(-5px, 5px);
      }
      a {
        font-family: AirbnbCerealApp-Book;
        font-size: 16px;
        font-weight: normal;
    
        letter-spacing: 0px;
             color: #5668ff;
      }
    }
    .massages {
      width: 154px;
      height: 50px;
      border-radius: 10px;
      border: 1.5px solid #5668ff;
      text-align: center;
      .b {
        transform: translate(-5px, 5px);
      }
      a {
        font-family: AirbnbCerealApp-Book;
        font-size: 16px;
        font-weight: normal;
        line-height: 50px;
        letter-spacing: 0px;
        color: #5668ff;
      }
    }
  }
  // 隔行
  .baby {
    text-align: center;
    margin-top: 30px;
    margin-left: 15px;
    width: 106px;
    height: 44px;
    border-radius: 20px;
    background: #e5f01c;
    box-sizing: border-box;
    border: 1px solid rgba(0, 0, 0, 0.4);
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.3);
    font-family: Poppins-Medium;
    font-size: 14px;
    font-weight: 500;
    line-height: 44px;
    letter-spacing: 0px;
    color: #1a1a1a;
  }
  //   底部
  .bottom {
    margin-top: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #f7f7f9;

    span {
    
      display: block;
      width: 327px;
      height: 112px;
      overflow: hidden;
      border-radius: 16px;
      box-shadow: 0px 8px 25px 0px rgba(82, 88, 143, 0.07);
      border-bottom: 3px solid white;
      display: flex;
      justify-content: center;
      align-items: center;
      .img {
        margin-left: 20px;
        height: 80px;
        width: 90px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      ul {
        margin-left: 10px;
        height: 80px;
        width: 235px;
        display: flex;
        flex-direction: column;
        li:nth-child(1) {
          width: 100%;
          height: 20px;
          font-family: AirbnbCerealApp-Medium;
          font-size: 12px;
          font-weight: normal;
          line-height: 17px;
          letter-spacing: 0px;
          color: #5668ff;
        }
        li:nth-child(2) {
          width: 100%;
          height: 40px;
          font-family: AirbnbCerealApp-Medium;
          font-size: 14px;
          overflow: hidden;
          font-weight: normal;
          letter-spacing: 0px;
          color: #110c26;
        }
        li:nth-child(3) {
          width: 100%;
          height: 20px;
          font-family: Roboto-Medium;
          font-size: 14px;
          font-weight: 500;
          line-height: 20px;
          letter-spacing: 0px;
          color: #e90000;
        }
      }
    }
  }
}
</style>