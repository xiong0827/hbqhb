<template>
  <div class="msg">
    <!-- 顶部 -->
    <div class="top">
      <div>消息</div>
      <Share />
    </div>
    <!-- 搜索框 -->
    <div class="search">
      <Searchinput placeholdervalue="搜索联系人" toppx="30" />
    </div>
    <!-- 底部 -->
    <div class="bottom" @click="$router.push({name:'chat'})">
      <li>
        <span class="pic">
          <img src="./images/1.png" alt="" />
        </span>
        <span class="language">
          <li class="name">
            <a href="">张三</a>
            <p>10:44</p>
          </li>
          <li class="say">是的，今晚可以和你一同</li>
        </span>
      </li>

      <li>
        <span class="pic">
          <img src="./images/2.png" alt="" />
        </span>
        <span class="language">
          <li class="name">
            <a href="">李四</a>
            <p>12:00</p>
          </li>
          <li class="say">什么时候会有新产品?迫不及待</li>
        </span>
      </li>

      <li>
        <span class="pic">
          <img src="./images/3.png" alt="" />
        </span>
        <span class="language">
          <li class="name">
            <a href="">王五</a>
            <p>5天前</p>
          </li>
          <li class="say">谢谢，很高兴订阅这个最好的产品</li>
        </span>
      </li>

      <li>
        <span class="pic">
          <img src="./images/4.png" alt="" />
        </span>
        <span class="language">
          <li class="name">
            <a href="">刘一</a>
            <p>3天前</p>
          </li>
          <li class="say">谢谢</li>
        </span>
      </li>

      <li>
        <span class="pic">
          <img src="./images/5.png" alt="" />
        </span>
        <span class="language">
          <li class="name">
            <a href="">赵六</a>
            <p>04/27/2022</p>
          </li>
          <li class="say">你好，货物请送快一点</li>
        </span>
      </li>

      <li>
        <span class="pic">
          <img src="./images/6.png" alt="" />
        </span>
        <span class="language">
          <li class="name">
            <a href="">李八</a>
            <p>04/24/2022</p>
          </li>
          <li class="say">谢谢你我非常高兴</li>
        </span>
      </li>
    </div>
    <Tabbar />
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.msg {
  flex: 1;
  background: #ff6e53;
  color: black;
  // 顶部
  .top {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 80px;
    position: relative;
    // flex: 30%;
    // padding-top: 20%;
    // 消息
    div {
      width: 44px;
      height: 30px;
      font-family: Roboto-Medium;
      font-size: 20px;
      font-weight: 500;
      line-height: 28px;
      letter-spacing: 1.43px;
      color: #ffffff;
      // position: absolute;
      // left: 50%;
      // margin-left: -22px;
      margin-top: 50px;
      // top: 35%;
    }
    // 圆点
    .share {
      width: 30px;
      position: absolute;
      top: -50%;
      margin-left: 87%;
      color: #2f2f4a;
    }
  }
  .bottom {
    height: 100%;
    display: flex;
    background: #f9fbff;
    flex-direction: column;
    align-items: center;
    border-radius: 20px;
    margin-top: 20px;
    li {
      list-style: none;
      width: 328px;
      height: 88px;
      border-radius: 10px;
      background: rgb(241, 232, 232);
      // box-shadow: 0px 6px 14px 0px rgba(0, 0, 0, 0.06);
      margin-top: 20px;
      display: flex;
      .pic {
        display: block;
        width: 56px;
        height: 56px;
        border-radius: 50%;
        border: 1px solid black;
        margin: 15px;
        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }
      .language {
        width: 220px;
        height: 56px;
        margin-top: 15px;
        background: rgb(241, 232, 232);
        display: flex;
        flex-direction: column;
        justify-content: center;
        .name {
          width: 220px;
          height: 16px;
          margin-bottom: -20px;
          display: flex;
          justify-content: space-between;
          a {
            font-family: Roboto-Medium;
            font-size: 14px;
            font-weight: 500;
            letter-spacing: 0.5px;
            color: #2f2f4a;
          }
          p {
            font-family: Roboto-Regular;
            font-size: 12px;
            font-weight: normal;
            line-height: 18px;
            letter-spacing: 0.46px;
            color: #aeaeb9;
          }
        }
        .say {
          width: 192px;
          height: 40px;
          font-family: Roboto-Regular;
          font-size: 12px;
          font-weight: normal;
          line-height: 40px;
          letter-spacing: 0.46px;
          color: #88888f;
          background: rgb(241, 232, 232);
        }
      }
    }
  }
}
</style>