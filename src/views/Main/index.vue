<template>
  <div class="main">
    <!-- 上部分 -->

    <div class="mian1" v-show="editShow">
      <div class="top">
        <a href="#" class="a" v-show="isshow" @click="tores">
          <li></li>
          <li></li>
          <li></li>
        </a>
        <van-icon
          @click="$router.push('home')"
          class="back"
          name="arrow-left"
          color="#ffffff"
          size="30"
        />
        <div class="portrait">
          <van-image
            v-if="userInfo.avatarurl"
            :src="userInfo.avatarurl"
            round
            width="100"
            height="100"
            @click="showAvatar(userInfo.avatarurl)"
          />
          <van-image
            v-else
            round
            width="100"
            height="100"
            src="http://101.43.12.130:3000/uploads/avatarurl/avatar_1651829121291-82.png"
            @click="showAvatar('http://101.43.12.130:3000/uploads/avatarurl/avatar_1651829121291-82.png')"
          />
        </div>
        <div class="name" v-if="userInfo.nickname" @click="skipLogin">
          {{ userInfo.nickname }}
        </div>
        <div class="name" v-else @click="skipLogin">点击去登录</div>
        <div class="rectangle">
          <li @click="topublish('fans', '我的关注')">关注</li>
          <li @click="topublish('fans', '我的粉丝')">粉丝</li>
          <li>历史</li>
        </div>
      </div>
      <!-- 下部分 -->
      <div class="bottom">
        <li @click="topublish('publish')">
          <div class="out">
            <div class="fabu">
              <img src="./images/我的发布.png" alt="" />
            </div>
          </div>
          <div class="char">我的发布</div>
          <div class="num"></div>
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
          <div class="num"></div>
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
          <div class="num"></div>
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
          <div class="num"></div>
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
          <div class="num"></div>
          <div class="ion">
            <van-icon name="arrow" class="tubiao" color="#2F2F4A" size="30" />
          </div>
        </li>
      </div>
    </div>
    <div class="mian2" v-show="!editShow">
      <div class="top1">
        <van-icon
          color="blcak"
          @click="editShow = !editShow"
          class="back"
          name="arrow-left"
          size="30"
        />
        <h3>个人选项</h3>
      </div>
      <div class="bottom">
        <van-cell title="个人资料" is-link to="maindata" />
        <van-cell title="重置密码" is-link to="resetpassword" />
        <van-cell title="退出登录" is-link @click="exitLogin" />
      </div>
    </div>
     <Tabbar name="main" v-if="editShow"/>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { Dialog,ImagePreview} from "vant";
export default {
  mounted() {
    this.getUserInfo();
  },
  name: "Main",
  data() {
    return {
      editShow: true,
    };
  },
  methods: {
    //图片预览
    showAvatar(url) {
      ImagePreview([url]);
    },
    //获取用户信息
    async getUserInfo() {
      try {
        await this.$store.dispatch("user/getUserInfo");
      } catch (err) {
        this.tologin();
      }
    },
    //去登录
    tologin() {
      setTimeout(() => {
        Dialog.confirm({
          title: "登录提示",
          message: "立刻去登录",
          confirmButtonText: "立刻登录",
          cancelButtonText: "稍后登录",
        })
          .then(() => {
            this.$router.push({ name: "login" });
          })
          .catch(() => {
            console.log(1);
          });
      }, 200);
    },
    exitLogin() {
      Dialog.confirm({
        title: "提示",
        message: "确定要退出吗",
        confirmButtonText: "确认",
        cancelButtonText: "取消",
      })
        .then(() => {
          localStorage.removeItem("token");
          this.$router.push({ name: "main" });
          location.reload();
        })
        .catch(() => {});
    },
    topublish(to, title) {
      if (this.isshow == true) {
        this.$router.push({
          name: to,
          query: {
            title,
          },
        });
      } else {
        this.tologin();
      }
    },
    skipLogin() {
      this.$router.push("/login");
    },
    tores() {
      this.editShow = !this.editShow;
    },
  },
  computed: {
    ...mapState("user", ["userInfo"]),
    isshow() {
      return localStorage.getItem("token") ? true : false;
    },
  },
};
</script>

<style lang="less" scoped>
.main {
  flex: 1;

  //返回
  .mian1 {
    display: flex;
    flex-direction: column;
    background: #ff6e53;
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
      .back {
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
        text-align: center;
      }
      // 线

      // 矩形框
      .rectangle {
        display: flex;
        width: 312px;
        height: 74px;
        line-height: 74px;
        margin: 30px auto;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 3px 2px 8px 0px rgba(108, 0, 0, 0.1);
        background: linear-gradient(
          103deg,
          rgba(255, 255, 255, 0.85) 1%,
          rgba(255, 255, 255, 0.85) 1%,
          rgba(255, 255, 255, 0.7) 99%,
          rgba(255, 255, 255, 0.7) 99%
        );

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
      margin-bottom: 50px;
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

  .mian2 {
    display: flex;
    flex-direction: column;
    .top1 {
      background: #efefef;
      position: relative;
      flex: 30%;
      padding-top: 20%;
      display: flex;
      align-items: center;
      .back {
        position: absolute;
        left: 5%;
        top: 30%;
      }
      h3 {
        position: absolute;
        top: 10%;
        left: 42%;
        font-family: Inter-SemiBold;
        font-size: 18px;
        font-weight: 600;
        line-height: 26px;
        letter-spacing: -0.9px;
        color: #3d3d3d;
      }
    }
    .bottom {
      margin-top: 20px;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      li {
        list-style: none;
        height: 50px;
      }
    }
  }
}
</style>