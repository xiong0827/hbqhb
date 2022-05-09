<template>
  <div class="fans">
    <!-- 顶部 -->
    <div class="background">
      <div class="top">
        <div>{{$route.query.title}}</div>
      </div>
      <!-- 搜索框 -->
      <div class="search">
        <Searchinput placeholdervalue="你可能感兴趣的人" toppx="30" />
      </div>
    </div>
    <!-- 底部 -->
    <div class="bottom">
      <li class="content">
        <span class="pic">
          <img src="./images/Oval Copy 2.png" alt="" />
        </span>
        <span class="language">
          <li class="name">
            <p><a href="">张三</a></p>
          </li>
          <li class="say">是的，今晚可以和你一同</li>
        </span>
        <span class="btn">
          <button>关注</button>
        </span>
      </li>

      <li class="content">
        <span class="pic">
          <img src="./images/Oval Copy 2.png" alt="" />
        </span>
        <span class="language">
          <li class="name">
            <p><a href="">李四</a></p>
          </li>
          <li class="say">什么时候会有新产品?迫不及待</li>
        </span>
        <span class="btn">
          <button>关注</button>
        </span>
      </li>

      <li class="content">
        <span class="pic">
          <img src="./images/Oval Copy 2.png" alt="" />
        </span>
        <span class="language">
          <li class="name">
            <p><a href="">王五</a></p>
          </li>
          <li class="say">谢谢，很高兴订阅这个最好的产品</li>
        </span>
        <span class="btn">
          <button>关注</button>
        </span>
      </li>

      <li class="content">
        <span class="pic">
          <img src="./images/Oval Copy 2.png" alt="" />
        </span>
        <span class="language">
          <li class="name">
            <p><a href="">刘一</a></p>
          </li>
          <li class="say">谢谢</li>
        </span>
        <span class="btn">
          <button>关注</button>
        </span>
      </li>

      <li class="content">
        <span class="pic">
          <img src="./images/Oval Copy 2.png" alt="" />
        </span>
        <span class="language">
          <li class="name">
            <p><a href="">赵六</a></p>
          </li>
          <li class="say">你好，货物送的快不快</li>
        </span>
        <span class="btn">
          <button>关注</button>
        </span>
      </li>

      <li class="content">
        <span class="pic">
          <img src="./images/Oval Copy 2.png" alt="" />
        </span>
        <span class="language">
          <li class="name">
            <a href="">李八</a>
          </li>
          <li class="say">谢谢你我非常高兴</li>
        </span>
        <span class="btn">
          <button>关注</button>
        </span>
      </li>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.fans {
  flex: 1;
  .background {
    background: #ff6e53;
    padding-bottom: 15px;
    // 顶部
    .top {
      display: flex;
      position: relative;
      flex: 30%;
      padding-top: 10%;
      // 消息
      div {
        background: #ff6e53;
        width: 100px;
        height: 30px;
        font-family: Roboto-Medium;
        font-size: 20px;
        font-weight: 500;
        line-height: 28px;
        letter-spacing: 1.43px;
        color: #ffffff;
        position: absolute;
        left: 50%;
        margin-left: -50px;
        margin-top: 10px;
        top: 35%;
      }
    }
  }
  .bottom {
    display: flex;
    background: #f9fbff;
    flex-direction: column;
    align-items: center;
    border-radius: 20px 20px 0 0;
    margin-top: 10px;
    .content {
      list-style: none;
      width: 328px;
      height: 88px;
      border-radius: 10px;
      background: rgb(241, 232, 232);
      box-shadow: 0 6px 14px 0px rgba(0, 0, 0, 0.2);
      margin-top: 20px;
      display: flex;
      align-items: center;
      .pic {
        display: block;
        width: 60px;
        height: 60px;
        border: 2px dashed #b8b6b6;
        margin: 10px;
        box-sizing: border-box;
        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }
      .language {
        width: 170px;
        margin-top: 15px;
        background: rgb(241, 232, 232);
        display: flex;
        flex-direction: column;
        justify-content: center;
        .name {
          margin-top: -15px;
          a {
            font-family: Roboto-Medium;
            font-size: 14px;
            font-weight: 500;
            letter-spacing: 0.5px;
            color: #2f2f4a;
          }
        }
        .say {
          width: 170px;
          font-family: Roboto-Regular;
          font-size: 12px;
          font-weight: normal;
          letter-spacing: 0.46px;
          color: #88888f;
          background: rgb(241, 232, 232);
          margin-bottom: 10px;
          margin-top: 5px;
        }
      }
      .btn {
        width: 60px;
        height: 56px;
        margin: 0 5px;
        display: flex;
        align-items: center;
        button {
          border-radius: 20px;
          line-height: 20px;
          background: #e5f01c;
          box-sizing: border-box;
          border: 1px solid rgba(0, 0, 0, 0.4);
          box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.3);
          width: 60px;
          height: 20px;
        }
      }
    }
  }
}
</style>