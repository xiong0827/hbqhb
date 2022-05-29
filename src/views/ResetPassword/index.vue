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
        <van-icon
          class="icon"
          name="lock"
          color="#700BEF"
          @click="showpassword('1')"
          size="30"
        /><input
          type="password"
          name=""
          v-model="oldpassword"
          placeholder="原密码"
          ref="password1"
        />
      </div>
      <div class="password new">
        <van-icon
          class="icon"
          name="lock"
          color="#700BEF"
          size="30"
          @click="showpassword('2')"
        /><input
          type="password"
          ref="password2"
          name=""
          v-model="newpassword"
          placeholder="新密码"
          :class="{ outline: check.checkPassword() != true }"
        />
      </div>
      <div class="password repeat">
        <van-icon
          class="icon"
          name="lock"
          color="#700BEF"
          size="30"
          @click="showpassword('3')"
        /><input
          type="password"
          ref="password3"
          name=""
          v-model="repassword"
          placeholder="再次输入密码"
          :class="{ outline: check.checkRePassword() == false }"
        />
      </div>
    </div>
    <div class="bottom">
      <van-button
        round
        v-show="isshow"
        type="info"
        class="button1"
        @click="updatepassword"
        >确定</van-button
      >
    </div>
  </div>
</template>

<script>
import checkObj from "@/units/check";
export default {
  name: "ResetPassword",
  data() {
    return {
      oldpassword: "",
      newpassword: "",
      repassword: "",
      code: "",
      timer: 0,
      //弹出信息
      tipsMsg: "修改成功",
    };
  },
  methods: {
    showpassword(index) {
      switch (index) {
        case "1":
          if (this.$refs.password1.type == "text") {
            this.$refs.password1.type = "password";
          } else {
            this.$refs.password1.type = "text";
          }
          break;
        case "2":
          if (this.$refs.password2.type == "text") {
            this.$refs.password2.type = "password";
          } else {
            this.$refs.password2.type = "text";
          }
          break;
        case "3":
          if (this.$refs.password3.type == "text") {
            this.$refs.password3.type = "password";
          } else {
            this.$refs.password3.type = "text";
          }
          break;
        default:
          return;
      }
      // let index='password1'
      // console.log(this.$refs.index);
      // if (this.$refs.password.type == "text") {
      //   this.$refs.password.type = "password";
      // } else {
      //   this.$refs.password.type = "text";
      // }
    },
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
    async updatepassword() {
      try {
        let result = await this.$store.dispatch("user/upDatePassword", {
          oldpassword: this.oldpassword,
          password: this.newpassword,
        });
        this.$dialog
        .alert({
          // title:'标题呀',
          message:result+'请重新登录',
        })
        .then(() => {
          localStorage.removeItem('token')
          this.$router.replace("main");
          location.reload()
        });
      } catch (error) {
          this.$dialog
        .alert({
          // title:'标题呀',
          message:error,
        })
        .then(() => {
          this.newpassword='',
          this.oldpassword='',
          this.repassword=''
        });
      }
    },
  },
  computed: {
    check() {
      return new checkObj({
        password: this.newpassword,
        repassword: this.repassword,
      });
    },
    isshow() {
      return this.check.checkAll();
    },
  },
};
</script>

<style lang="less" scoped>
.resetPassword {
  flex: 1;
  overflow-x: hidden;
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
  .outline {
    border: 2px solid salmon;
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