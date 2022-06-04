<template>
  <div class="register">
    <div class="top">
      <router-link class="topspan1" to="/welcome"> <<返回 </router-link>
      <router-link class="topspan2" to="/login">登录>></router-link>
    </div>
    <div class="center">
      <h1>注册账号</h1>
      <div class="registersvg">
        <img src="./images/svg2.svg" alt="" />
      </div>
      <div class="phone">
        <van-icon class="icon" name="manager" color="#700BEF" size="30" /><input
          :class="{ outline: check.checkPhone() == false }"
          v-model.number="phone_id"
          type="tel"
          placeholder="手机号"
        />
      </div>
      <div class="code">
        <van-icon class="icon" name="comment" color="#700BEF" size="30" /><input
          v-model.number="code"
          type="number"
          :class="{ outline: code.length < 6 }"
          name=""
          placeholder="验证码"
          max="6"
        />
        <van-button
          type="info"
          size="30"
          round
          class="getcode"
          v-if="timer == 0 && check.checkPhone()"
          @click="getcode"
          >获取验证码
        </van-button>
        <van-button
          type="info"
          disabled
          round
          class="getcode"
          v-else-if="timer == 0 && !check.checkPhone()"
          @click="getcode"
        >
          获取验证码</van-button
        >
        <van-button disabled class="getcode" round v-else
          >{{ timer }}秒后重发</van-button
        >
      </div>
      <div class="password">
        <van-icon class="icon" name="lock" color="#700BEF" size="30" /><input
          type="password"
          :class="{ outline: check.checkPassword() == false }"
          v-model="password"
          name=""
          placeholder="密码 六位以上的字母数字"
        />
      </div>
      <div class="password">
        <van-icon class="icon" name="lock" color="#700BEF" size="30" /><input
          type="password"
          :class="{ outline: check.checkRePassword() == false }"
          v-model="repassword"
          name=""
          placeholder="再次输入密码"
        />
      </div>
      <div class="bottom">
        <van-button round type="info" class="button1" @click="userRegister"
          >注册</van-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import checkObj from "@/units/check";
import { mapState } from "vuex";
export default {
  name: "Register",
  data() {
    return {
      phone_id: "",
      code: "",
      password: "",
      repassword: "",
      timer: 0,
      tipsMsg: "",
    };
  },
  methods: {
    async getcode() {
      try {
        await this.$store.dispatch("user/getCode", { phone_id: this.phone_id });
        this.timer = 60;
        var timer = setInterval(() => {
          this.timer--;
          if (this.timer == 0) {
            clearInterval(timer);
          }
        }, 1000);
      } catch (err) {
        this.$dialog
          .alert({
            message: err,
          })
          .then(() => {
            this.tipsMsg = "";
          });
      }
    },
    //注册
    async userRegister() {
      if (this.check.checkCode(this.phonecode)) {
        try {
          const { phone_id, password } = this;
          let result = await this.$store.dispatch("user/Register", {
            phone_id,
            password,
          });
          this.$dialog
            .alert({
              message: result,
            })
            .then(() => {
              this.$store.commit("user/GETCODE", "");
              this.$router.push({ name: "login" });
            });
        } catch (error) {
          this.$dialog
            .alert({
              message: error,
            })
            .then(() => {
              this.tipsMsg = "";
              this.code = "";
            });
        }
      } else if (!this.check.checkCode(this.phonecode)) {
        if (!this.checkPhoneAndPwd.checkAll()) {
          this.$dialog
            .alert({
              message: "手机号或密码格式错误",
            })
            .then(() => {});
        } else {
          this.$dialog
            .alert({
              message: "验证码错误",
            })
            .then(() => {
              this.code = "";
            });
        }
      } else {
        this.$dialog
          .alert({
            message: "请先获取验证码",
          })
          .then(() => {
            this.code = "";
          });
      }
    },
  },
  computed: {
    check() {
      return new checkObj({
        phone: this.phone_id,
        code: this.code,
        password: this.password,
        repassword: this.repassword,
      });
    },
    checkPhoneAndPwd() {
      return new checkObj({
        phone: this.phone_id,
        password: this.password,
        repassword: this.repassword,
      });
    },
    //注册按钮状态
    registerShow() {
      if (
        this.code != "" &&
        this.check.checkPhone() &&
        this.check.checkPassword() &&
        this.check.checkRePassword()
      ) {
        return true;
      } else {
        return false;
      }
    },
    ...mapState("user", ["phonecode"]),
  },
};
</script>

<style lang="less" scoped>
.register {
  flex: 1;
  overflow-x: hidden;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;

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
    height: 85%;
    // background: pink;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    > div {
      margin-top: 20px;
    }
    .bottom {
      display: flex;
      justify-content: center;
      align-items: center;

      .button1 {
        width: 325px;
        height: 50px;
        border-radius: 30px;
        font-size: 23px;
        font-weight: normal;
        line-height: 32px;
      }
    }
    h1 {
      width: 100%;
      height: 67px;
      font-family: RobotoRoman-Medium;
      font-size: 48px;
      font-weight: normal;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 2;
    }

    input {
      width: 325px;
      height: 40px;
      border-radius: 30px;
      background: rgba(111, 11, 239, 0.3);
      outline: none;
      border: 0px;
      font-family: Roboto-Regular;
      font-size: 20px;
      font-weight: normal;
      letter-spacing: 0px;
      color: rgba(111, 11, 239, 0.5);
      text-align: center;
    }

    .outline {
      border: 2px solid #e84118;
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
        right: 0;
        height: 97%;
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
}
</style>