<template>
  <div class="main">
    <!-- 上部分 -->

    <div class="mian1" v-show="editShow">
      <div class="top">
        <a href="#" class="a" @click="editShow = !editShow">
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
          <img src="./images/我的发布.png" alt="" />
        </div>
        <div class="name" @click="skipLogin">请先登录</div>
        <div class="rectangle">
          <li>关注</li>
          <li>粉丝</li>
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
          <div class="num">(1)</div>
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
          <div class="num">(1)</div>
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
          <div class="num">(1)</div>
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
          <div class="num">(1)</div>
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
          <div class="num">(1)</div>
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
        <van-cell title="退出登录" is-link to="welcome" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Main",
  data() {
    return {
      editShow: true,
    };
  },
  // mounted() {
  //   if (this.$route.query.editShow) {
  //     // console.log(this.$route.query.editShow);
  //     // this.editShow = this.$route.query.editShow;
  //     // console.log(this.editShow);
  //     this.editShow = !this.editShow;
  //   }
  // },
  // beforeRouteEnter(to, from, next) {
  //   if (from.name == "maindata") {
  //     from.meta.editShow = true;
  //     // console.log(to, from);
  //     this.editShow = false;
  //   }
  //   next();
  // },
  methods: {
    topublish(to) {
      this.$router.push({
        name: to,
      });
    },
    skipLogin() {
      this.$router.push("welcome");
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
      overflow-y: scroll;
      overflow-x: hidden;
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
      .back {
        position: absolute;
        left: 5%;
        top: 30%;
      }
      h3 {
        position: absolute;
        top: 32%;
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