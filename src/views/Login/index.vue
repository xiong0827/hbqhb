<template>
  <div class="login">
    <div class="Ellipse"></div>
    <div class="Ellipse2"></div>
    <span class="back">
      <router-link to="welcome"><<返回</router-link>
    </span>
    <span class="logintitle"><p>Login</p></span>
    <div class="phone">
      <van-icon class="icon" name="manager" color="#700BEF" size="30" /><input
        type="text"
        :class="{ outline: check.checkPhone() == false }"
        v-model="phone_id"
        placeholder="手机号"
      />
    </div>

    <div class="password">
      <van-icon
        class="icon"
        name="lock"
        color="#700BEF"
        size="30"
        @click="showpassword"
      /><input
        type="password"
        ref="password"
        :class="{ outline: check.checkPassword() == false }"
        v-model="password"
        name=""
        placeholder="密码"
      />
    </div>
    <span class="button" v-if="loginshow" @click="login"><a>登录</a></span>
    <span class="button" :style="{ opacity: 0.5 }" v-else><a>登录</a></span>
  </div>
</template>

<script>
import checkObj from "@/units/check";
import { mapState } from "vuex";
export default {
  data() {
    return {
      phone_id: "",
      password: "",
    };
  },
  computed: {
    loginshow() {
      if (this.check.checkPhone() && this.check.checkPassword()) {
        return true;
      } else {
        return false;
      }
    },
    check() {
      return new checkObj({
        phone: this.phone_id,
        password: this.password,
      });
    },
    ...mapState("user", ["token"]),
  },
  methods: {
    async login() {
      try {
        await this.$store.dispatch("user/userLogin", {
          phone_id: this.phone_id,
          password: this.password,
        });
        this.$dialog
          .alert({
            message: "登录成功",
          })
          .then(() => {
            this.$router.push({
              name: "home",
            });
          });
      } catch (error) {
        this.$dialog
          .alert({
            message: error.message,
          })
          .then(() => {
            this.password = "";
          });
      }
    },
    showpassword(e) {
      if (this.$refs.password.type == "text") {
        this.$refs.password.type = "password";
      } else {
        this.$refs.password.type = "text";
      }
    },
  },
};
</script>

<style lang="less" scoped>
.login {
  overflow: hidden;
  position: relative;

  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  input {
    width: 325px;
    height: 50px;
    border-radius: 30px;
    background: rgba(111, 11, 239, 0.3);
    outline: none;
    border: 0px;
    font-size: 24px;
    font-weight: normal;
    line-height: 34px;
    letter-spacing: 0px;
    color: rgba(111, 11, 239, 0.5);
    text-align: center;
  }
  .outline {
    border: 2px solid red;
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

  .button {
    width: 90%;
    height: 8%;
    border-radius: 30px;
    background: #6f0bef;
    display: flex;
    justify-content: center;
    align-items: center;
    a {
      font-family: Roboto-Regular;
      font-size: 23px;
      font-weight: normal;
      letter-spacing: 0px;
      color: #ffffff;
    }
  }

  .Ellipse {
    /* Ellipse 1 */
    position: absolute;
    right: -18%;
    top: -6%;
    width: 48%;
    height: 20%;
    border-radius: 50%;
    transform: rotate(107.69deg);
    background: linear-gradient(
      15deg,
      #92e1d3 25%,
      #92e1d3 25%,
      rgba(226, 226, 226, 0) 90%,
      rgba(226, 226, 226, 0) 90%
    );
  }
  .back {
    position: absolute;
    left: 5%;
    top: 2%;
    width: 15%;
    height: 5%;
    font-family: Inter-SemiBold;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: -0.8px;
    color: #3d3d3d;
  }
  .Ellipse2 {
    position: absolute;
    left: -35%;
    bottom: -13%;
    border-radius: 50%;
    width: 48%;
    height: 20%;
    transform: rotate(107.69deg);
    background: rgba(87, 204, 183, 0.2);
  }
  .logintitle {
    width: 49%;
    height: 18%;
    transform: translateY(30%);
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      font-family: RobotoRoman-Medium;
      font-size: 48px;
      font-weight: normal;
      letter-spacing: 0px;
      color: #000000;
    }
  }
}
</style>