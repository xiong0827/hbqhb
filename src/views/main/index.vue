<template>
  <div class="main">
    <!-- 上部分 -->
   
    <div class="top">
      <a href="#" class="a">
        <li></li>
        <li></li>
        <li></li>
      </a>
      <van-icon @click="$router.go(-1)" class="back" name="arrow-left" color="#ffffff" size="30" />
      <div class="portrait">
        <img src="./images/我的发布.png" alt="" />
      </div>
      <div class="name">还不起花呗</div>
      <div class="line"></div>
      <div class="rectangle">
        <li>关注</li>
        <li>粉丝</li>
        <li>历史</li>
      </div>
    </div>
    <!-- 下部分 -->
    <div class="bottom">
      <li @click="topublish('publish')">
        <div class="out" >
          <div class="fabu">
            <img src="./images/我的发布.png" alt="" />
          </div>
        </div>
        <div class="char">我的发布</div>
        <div class="num">(1)</div>
        <div class="ion">
          <van-icon name="arrow" class="tubiao" color="#2F2F4A" size="30" />
        </div>
      </li>

      <li @click="topublish('buyout')">
        <div class="out">
          <div class="fabu">
            <img src="./images/我买到的.png" alt="" />
          </div>
        </div>
        <div class="char">我的买到</div>
        <div class="num">(1)</div>
        <div class="ion">
          <van-icon name="arrow" class="tubiao" color="#2F2F4A" size="30" />
        </div>
      </li>

      <li>
        <div class="out">
          <div class="fabu">
            <img src="./images/我的帖子.png" alt="" />
          </div>
        </div>
        <div class="char">我的帖子</div>
        <div class="num">(1)</div>
        <div class="ion">
          <van-icon name="arrow" class="tubiao" color="#2F2F4A" size="30" />
        </div>
      </li>

      <li @click="topublish('sell')">
        <div class="out">
          <div class="fabu">
            <img src="./images/我收藏的.png" alt="" />
          </div>
        </div>
        <div class="char">我收藏的商品</div>
        <div class="num">(1)</div>
        <div class="ion">
          <van-icon name="arrow" class="tubiao" color="#2F2F4A" size="30" />
        </div>
      </li>

      <li>
        <div class="out">
          <div class="fabu">
            <img src="./images/我收藏的.png" alt="" />
          </div>
        </div>
        <div class="char">我收藏的帖子</div>
        <div class="num">(1)</div>
        <div class="ion">
          <van-icon name="arrow" class="tubiao" color="#2F2F4A" size="30" />
        </div>
      </li>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    topublish(to)
    {
      this.$router.push({
        name:to
      })
    
    }
  }
};
</script>

<style lang="less" scoped>
.main {
  flex: 1;
  display: flex;
  flex-direction: column;
  background: #ff6e53;
  //返回

  // 上部分
  .top {
    background: #ff6e53;
    position: relative;
    flex: 30%;
    padding-top: 20%;
    // 小点
    .a {
      width: 30px;
      position: absolute;
      display: inline-block;
      right: 5%;
      top: 1%;
      li {
        margin-top: 30px;
        display: inline-block;
        height: 4px;
        width: 4px;
        background: #fff;
        border-radius: 50%;
        margin-left: 3px;
      }
    }
    .back{
            position: absolute;
            left: 5%;
            top: 5%;
    }
    // 头像
    .portrait {
      height: 100px;
      width: 100px;
      background: #fff;
      border-radius: 50%;
      margin: 0 auto;
    }
    img {
      border-radius: 50%;
      width: 100%;
      height: 100%;
    }
    // 名字
    .name {
      height: 23px;
      width: 105px;
      font-family: Roboto-Bold;
      font-size: 20px;
      font-weight: bold;
      letter-spacing: 1px;
      color: #f9fbff;
      margin: 10px auto;
    }
    // 线
    .line {
      width: 100%;
      height: 47px;
      background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0.3) 0%,
        rgba(255, 255, 255, 0.3) 0%,
        rgba(215, 215, 215, 0) 100%,
        rgba(215, 215, 215, 0) 100%
      );
    }
    // 矩形框
    .rectangle {
      display: flex;
      width: 312px;
      height: 74px;
      line-height: 74px;
      margin: 30px auto;
      border-radius: 10px;
      overflow: hidden;
      background: linear-gradient(
        103deg,
        rgba(255, 255, 255, 0.85) 1%,
        rgba(255, 255, 255, 0.85) 1%,
        rgba(255, 255, 255, 0.7) 99%,
        rgba(255, 255, 255, 0.7) 99%
      );
      box-shadow: 0px 2px 8px 0px rgba(108, 0, 0, 0.1);
      li {
        list-style: none;
        flex: 1;
        display: flex;
        flex-direction: column;
        background: #ff776a;
        font-family: Roboto-Medium;
        font-size: 18px;
        font-weight: 500;
        letter-spacing: 0.9px;
        color: #f9fbff;
        text-align: center;
     
      }
    }
  }
  //   下方
  .bottom {
    background: #666;
    flex: 50%;
    display: flex;
    flex-direction: column;
    border-radius: 25px 25px 0px 0px;
         overflow-y: scroll;
        overflow-x: hidden;
    li {
      display: flex;
      list-style: none;
      flex: 6;
      background: #f9fbff;
      border-bottom: 1px solid #ccc;
  
      .out {
        flex: 14%;
        height: 60px;
        background: #fff;
        margin: 20px 0 20px 20px;
        border-radius: 10px;
        .fabu {
          width: 40px;
          height: 40px;
          // background: url(./images/我的发布.png) no-repeat;
          // background-size: cover;
          // margin: 20px 0 15px 15px;
          transform: translate(10px, 10px);
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
      .char {
        flex: 26%;
        text-align: center;
        line-height: 101px;
        font-family: Roboto-Regular;
        font-size: 14px;
        font-weight: normal;
        letter-spacing: 1px;
        color: #2f2f4a;
      }
      .num {
        flex: 30%;
        letter-spacing: 0.7px;
        color: #2f2f4a;
        font-family: Roboto-Regular;
        font-size: 14px;
        font-weight: normal;
        line-height: 101px;
      }
      .ion {
        flex: 20%;
        .tubiao {
          margin-top: 35px;
          margin-right: 0;
        }
      }
    }
  }
}
</style>