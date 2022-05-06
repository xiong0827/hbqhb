<template>
  <div class="resetPassword">
    <div class="top">
      <router-link class="topspan1" to="/main"><<返回</router-link>
    </div>
    <div class="center">
      <h1>ResetRegister</h1>
      <div class="registersvg">
        <img src="./images/svg2.svg" alt="" />
      </div>
      <div class="password old">
        <van-icon class="icon" name="lock" color="#700BEF" size="30" /><input
          type="password"
          name=""
          id=""
          placeholder="原密码"
        />
      </div>
      <div class="password new">
        <van-icon class="icon" name="lock" color="#700BEF" size="30" /><input
          type="password"
          name=""
          id=""
          placeholder="新密码"
        />
      </div>
      <div class="password repeat">
        <van-icon class="icon" name="lock" color="#700BEF" size="30" /><input
          type="password"
          name=""
          id=""
          placeholder="再次密码"
        />
      </div>
    </div>
    <div class="bottom">
      <van-button round type="info" class="button1" @click="Dialog"
        >确定</van-button
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "ResetPassword",
  data() {
    return {
      phone_id: "",
      code: "",
      timer: 0,
      //弹出信息
      tipsMsg: "修改成功",
    };
  },
  methods: {
    getcode() {
      if (!this.phonenum) {
      }
      this.timer = 5;
      var timer = setInterval(() => {
        this.timer--;
        if (this.timer == 0) {
          clearInterval(timer);
        }
      }, 1000);
    },
    Dialog() {
      this.$dialog
        .alert({
          // title:'标题呀',
          message: this.tipsMsg,
        })
        .then(() => {
          this.$router.push("main");
        });
    },
  },
};
</script>

<style lang="less" scoped>
.resetPassword {
  flex: 1;
  overflow: hidden;
  .top {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 8%;
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
      width: 20%;
      justify-content: center;
      align-items: center;
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
      width: 20%;
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
      width: 75%;
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
      input {
        text-align: center;
      }
      .icon {
        position: absolute;
        left: 25.77px;
        top: 8.25px;
        width: 26px;
        height: 30.88px;
      }
      .getcode {
        position: absolute;
        top: 5%;
        right: 4%;
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