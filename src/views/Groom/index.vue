<template>
  <div class="groom">
    <Backleft backsize="30" margin="20" />
    <Tabbar />
    <!-- 上部分 -->
    <div class="title">
      <p>宝藏圈子</p>
    </div>
    <div class="production">
      <p>有趣的灵魂万里挑一</p>
    </div>
    <!-- 下部分 -->
    <div class="container">
      <div class="card">
        <!-- 头像 -->
        <span class="top">
          <li class="a">
            <img src="./images/Oval Copy 2.png" alt="" />
          </li>
          <li class="b">
            <p class="name">王二</p>
            <p class="time">3分钟前</p>
          </li>
          <li class="c">
            <Share />
          </li>
        </span>
        <!-- 留言 -->
        <span class="say">
          <p>
            <a href="">
              这里是最新的产品,休闲或正式的工作穿着舒适
              <img src="./images/Bitmap.png" alt=""
            /></a>
          </p>
        </span>
        <!-- 操作 -->
        <span class="control">
          <li>
            <p><van-icon name="like-o" size="30" /></p>
            <p>喜欢</p>
          </li>
          <li>
            <p><van-icon name="chat-o" size="30" /></p>
            <p>评论</p>
          </li>
          <li>
            <p><van-icon name="share-o" size="30" /></p>
            <p>分享</p>
          </li>
        </span>
      </div>

      <div class="card">
        <!-- 头像 -->
        <span class="top">
          <li class="a">
            <img src="./images/Oval Copy 2.png" alt="" />
          </li>
          <li class="b">
            <p class="name">张三</p>
            <p class="time">5小时前</p>
          </li>
          <li class="c">
            <Share />
          </li>
        </span>
        <!-- 留言 -->
        <span class="say">
          <p>
            <a href="">
              非常舒适的鞋子
              <img src="./images/Bitmap.png" alt=""
            /></a>
          </p>
        </span>
        <!-- 操作 -->
        <span class="control">
          <li>
            <p><van-icon name="like-o" size="30" /></p>
            <p>喜欢</p>
          </li>
          <li>
            <p><van-icon name="chat-o" size="30" /></p>
            <p>评论</p>
          </li>
          <li>
            <p><van-icon name="share-o" size="30" /></p>
            <p>分享</p>
          </li>
        </span>
      </div>

      <div class="card">
        <!-- 头像 -->
        <span class="top">
          <li class="a">
            <img src="./images/Oval Copy 3.png" alt="" />
          </li>
          <li class="b">
            <p class="name">李四</p>
            <p class="time">3分钟前()广告</p>
          </li>
          <li class="c">
            <Share />
          </li>
        </span>
        <!-- 留言 -->
        <span class="say">
          <p>
            <a href="">
              这里是最新的产品,适合休闲或正式的工作
              <img src="./images/Bitmap.png" alt=""
            /></a>
          </p>
        </span>
        <!-- 操作 -->
        <span class="control">
          <li>
            <p><van-icon name="like-o" size="30" /></p>
            <p>喜欢</p>
          </li>
          <li>
            <p><van-icon name="chat-o" size="30" /></p>
            <p>评论</p>
          </li>
          <li>
            <p><van-icon name="share-o" size="30" /></p>
            <p>分享</p>
          </li>
        </span>
      </div>

      <div class="card">
        <!-- 头像 -->
        <span class="top">
          <li class="a">
            <img src="./images/Oval Copy 3.png" alt="" />
          </li>
          <li class="b">
            <p class="name">李四</p>
            <p class="time">3分钟前()广告</p>
          </li>
          <li class="c">
            <van-icon name="ellipsis" size="30" color="black" />
          </li>
        </span>
        <!-- 留言 -->
        <span class="say">
          <p>
            <a href="">
              这里是最新的产品,适合休闲或正式的工作
              <img src="./images/Bitmap.png" alt=""
            /></a>
          </p>
        </span>
        <!-- 操作 -->
        <span class="control">
          <li>
            <p><van-icon name="like-o" size="30" /></p>
            <p>喜欢</p>
          </li>
          <li>
            <p><van-icon name="chat-o" size="30" /></p>
            <p>评论</p>
          </li>
          <li>
            <p><van-icon name="share-o" size="30" /></p>
            <p>分享</p>
          </li>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {},
};
</script>

<style lang="less" scoped>
.groom {
  flex: 1;
  background: #ff6d55;
  .back {
    margin: 10px;
  }
  // 上部分
  .title {
    width: 90px;
    height: 28px;
    margin-left: 24px;
    margin-top: 20px;
    p {
      font-family: Roboto-Medium;
      font-size: 20px;
      font-weight: 500;
      line-height: 28px;
      letter-spacing: 1.43px;
      color: #ffffff;
      margin-top: -15px;
    }
  }
  .production {
    width: 130px;
    height: 20px;
    margin-left: 72px;
    margin-top: 20px;
    p {
      font-family: Roboto-Regular;
      font-size: 14px;
      font-weight: normal;
      line-height: 20px;
      letter-spacing: 0.23px;
      color: #ffffff;
    }
  }
  // 下部分
  .container {
    background: #f9fbff;
    border-radius: 20px;
    // height: 100%;
    width: 100%;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    li {
      list-style: none;
    }
    .card {
      margin-top: 30px;
      display: flex;
      width: 90%;
      flex-direction: column;
      align-items: center;
      border-radius: 10px;
      background: #ccc;
      box-shadow: 0px 6px 14px 0px rgba(0, 0, 0, 0.3);
    }
    // 头像
    .top {
      width: 80%;
      height: 50px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin-top: 20px;
      .a {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }
      .b {
        height: 100%;
        width: 200px;
        display: flex;
        flex-direction: column;
        p {
          height: 50%;
          width: 100%;
        }
        .name {
          font-family: Roboto-Medium;
          font-size: 18px;
          font-weight: 500;
          letter-spacing: 0.17px;
          color: #2f2f4a;
        }
        .time {
          font-family: Roboto-Regular;
          font-size: 16px;
          font-weight: normal;
          letter-spacing: 0.17px;
          color: #b1b1bb;
        }
      }
      .c {
        width: 32px;
        height: 32px;
      }
    }
    // 留言
    .say {
      width: 80%;
      p {
        font-family: Roboto-Regular;
        font-size: 12px;
        font-weight: normal;
        line-height: 36px;
        letter-spacing: 0.17px;
        color: #adadb7;
      }
    }
    // .操作
    .control {
      width: 80%;
      height: 60px;
      display: flex;
      li {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        p {
          font-size: 18px;
          font-family: Roboto-Regular;
          font-weight: normal;
          letter-spacing: 0.5px;
          color: #2f2f4a;
        }
      }
    }
  }
}
</style>