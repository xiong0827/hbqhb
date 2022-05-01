<template>
  <div class="register">
    <div class="top">
      <router-link class="topspan1"><<返回</router-link>>
      <router-link class="topspan2">登录>></router-link>
    </div>
    <div class="center">
      <h1>Register</h1>
      <div class="registersvg">
        <img src="./images/svg2.svg" alt="" />
      </div>
      <div class="phone">
        <van-icon class="icon" name="manager" color="#700BEF" size="30" /><input
          type="text"
          placeholder="手机号"
        />
      </div>
      <div class="code">
        <van-icon class="icon" name="comment" color="#700BEF" size="30" /><input
          type="text"
          name=""
          id=""
          placeholder="验证码"
        />
      </div>
      <div class="password">
        <van-icon class="icon" name="lock" color="#700BEF" size="30" /><input
          type="password"
          name=""
          id=""
          placeholder="密码"
        />
      </div>
    </div>
    <div class="bottom">
      <van-button round type="info" class="button1">注册</van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
};
</script>

<style lang="less" scoped>
.register {
  flex: 1;
  overflow: hidden;
  .top {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 6%;
    a {
      width: 15%;
      height: 100%;
      text-align: center;
      display: flex;
      align-items: center;
      color: #3d3d3d;
      font-size: 16px;
      font-weight: 600;
      font-family: Inter-SemiBold;
    }
    .topspan1 {
      margin-left: 10px;
      display: flex;
      justify-content: center;
      position: relative;
      z-index: 2;
      &:after {
        content: " ";
        width: 180px;
        height: 180px;
        transform: rotate(107.69deg);
        background: linear-gradient(
          155deg,
          #92e1d3 25%,
          #92e1d3 25%,
          rgba(226, 226, 226, 0) 90%,
          rgba(226, 226, 226, 0) 90%
        );
        position: absolute;
        border-radius: 50%;
        top: -60px;
        left: -65px;
        z-index: -1;
      }
    }
    .topspan2 {
      display: flex;
      justify-content: center;
      margin-right: 10px;
    }
  }
  .center {
    height: 80%;
    // background: pink;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    h1 {
      width: 183px;
      height: 67px;
      font-family: RobotoRoman-Medium;
      font-size: 48px;
      font-weight: normal;
      line-height: 67px;
    }
    input {
      width: 325px;
      height: 50px;
      border-radius: 30px;
      background: rgba(111, 11, 239, 0.3);
      outline: none;
      border: 0px;
      font-family: Roboto-Regular;
      font-size: 24px;
      font-weight: normal;
      line-height: 34px;
      letter-spacing: 0px;
      color: rgba(111, 11, 239, 0.5);
      text-align: center;
    }
    .phone {
      position: relative;
      .icon {
        position: absolute;
        left: 25.77px;
        top: 8.25px;
        width: 26px;
        height: 30.88px;
      }
    }
    .code {
      position: relative;
      .icon {
        position: absolute;
        left: 25.77px;
        top: 8.25px;
        width: 26px;
        height: 30.88px;
      }
    }
    .password {
      position: relative;
      .icon {
        position: absolute;
        left: 25.77px;
        top: 8.25px;
        width: 26px;
        height: 30.88px;
      }
    }
  }
  .bottom {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10%;
    .button1 {
      width: 325px;
      height: 50px;
      border-radius: 30px;
      background: #6f0bef;
      font-size: 23px;
      font-weight: normal;
      line-height: 32px;
    }
  }
}
</style>