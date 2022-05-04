<template>
  <div class="chat">
    <div class="top">
      <div class="head">
        <a href="#" class="a">
          <li></li>
          <li></li>
          <li></li>
        </a>
        <van-icon
          @click="$router.go(-1)"
          class="back"
          name="arrow-left"
          color="#ffffff"
          size="30"
        />
      </div>
    </div>
    <div class="center">
      <span class="img">
        <img src="./images/1.png" alt="" />
      </span>
      <span class="name"> 张三 </span>
    </div>
    <div class="container">
      <li>
        <p class="time">18:09</p>
        <p class="content">什么时候有新产品，迫不及待了</p>
      </li>
      <li>
        <p class="time">18:19</p>
        <p class="content">新产将在下季度准备完毕</p>
      </li>
      <li>
        <p class="time">18:22</p>
        <p class="content">有多少新产品将会问世</p>
      </li>
      <li>
        <p class="time">18:24</p>
        <p class="content">有10个新产品将会制造</p>
      </li>
      <li>
        <p class="time">18:25</p>
        <p class="content">好厉害，我很期待</p>
      </li>
      <li>
        <p class="time">18:30</p>
        <p class="content">谢谢你</p>
      </li>
    </div>
    <div class="bottom">
      <div class="down">
        <li><van-icon name="like-o" size="40" /></li>
        <li><input type="text" placeholder="想跟他说点什么......" /></li>
        <li><van-icon name="edit" size="40" /></li>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.chat {
  flex: 1;

  .top {
    .head {
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
      .back {
        position: absolute;
        left: 5%;
        top: 20%;
      }
    }
  }
  .center {
    background: #ff6e53;
    height: 100px;
    width: 100%;
    display: flex;
    align-items: center;

    .img {
      height: 50px;
      width: 50px;
      background: olive;
      margin-left: 30px;
      border-radius: 50%;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .name {
      height: 30px;
      font-family: Roboto-Medium;
      font-size: 20px;
      font-weight: 500;
      letter-spacing: 0.5px;
      color: #ffffff;
      margin-left: 20px;
      margin-top: 10px;
    }
  }

  .container {
    width: 100%;
    background: #fff;
    border-radius: 10px 10px 0 0;
    display: flex;
    flex-direction: column;
    li {
      list-style: none;
      margin: 20px 0;
      display: flex;
      flex-direction: column;
      width: 200px;
      .time {
        flex: 20%;
        font-family: Roboto-Regular;
        font-size: 12px;
        font-weight: normal;
        line-height: 18px;
        letter-spacing: 0.46px;
        color: #8f8c9c;
        margin-left: 20px;
        margin-top: 5px;
      }
      .content {
        flex: 80%;
        font-family: Roboto-Regular;
        font-size: 14px;
        font-weight: normal;
        line-height: 18px;
        letter-spacing: 0.5px;
        color: #2f2f4a;
        margin-left: 20px;
        width: 120px;
        margin-bottom: 5px;
      }
    }
    li:nth-of-type(odd) {
      background: #f9f2f5;
      border-radius: 0px 10px 10px 0px;
    }
    li:nth-of-type(even) {
      background: #d5b6fb;
      align-self: flex-end;
      box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.04);
      border-radius: 10px 0px 0px 10px;
    }
  }
  .bottom {
    height: 70px;
    width: 412px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 0;
    .down {
      height: 60px;
      width: 80%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      border: 2px solid #d7d9df;
      border-radius: 10px;
      box-sizing: border-box;
      margin-bottom: 15px;
      margin-right: 20px;
      li:nth-of-type(odd) {
        list-style: none;
      }
      li:nth-of-type(even) {
        list-style: none;

        input {
          height: 40px;
          border: none;
          border-left: 2px solid #9a9ba8;
          font-size: 16px;
        }
      }
    }
  }
}
</style>