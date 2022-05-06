<template>
  <div class="maindata">
    <Backtop />
    <div class="head">
      <div class="headLeft">
        <b>头像</b>
      </div>
      <div class="headRight">
        <van-image
          round
          width="40px"
          height="40px"
          src="https://img01.yzcdn.cn/vant/cat.jpeg"
        />
      </div>
    </div>
    <div class="input">
      <van-cell-group>
        <van-field v-model="userinfo.nickname" label="昵称" />
      </van-cell-group>
      <van-cell-group>
        <van-field v-model="userinfo.sex" label="性别" />
      </van-cell-group>
      <van-cell title="生日" :value="date" @click="show = true" />
      <van-calendar
        v-model="show"
        :min-date="minDate"
        :max-date="maxDate"
        @confirm="onConfirm"
      />
      <SelectSite />
    </div>
    <div class="footer">
      <van-button round type="info" class="btn">取消</van-button>
      <van-button round type="info" class="btn" @click="Dialog"
        >保存</van-button
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "MainData",
  data() {
    return {
      date: "",
      userinfo: {
        nickname: "",
        sex: "",
        address: "",
      },
      show: false,
      minDate: new Date(1990, 0, 1),
      maxDate: new Date(2000, 0, 31),
      tipsMsg: "保存成功",
    };
  },

  methods: {
    onClickLeft() {
      Toast("返回");
    },
    formatDate(date) {
      return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    },
    onConfirm(date) {
      this.show = false;
      this.date = this.formatDate(date);
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
.maindata {
  flex: 1;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  font-family: Poppins-Medium;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0px;
  color: #404040;
  .head {
    height: 70px;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .headLeft {
      margin-left: 5%;
    }
    .headRight {
      margin-right: 5%;
    }
  }
  .input {
    height: 60%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .footer {
    width: 100%;
    height: 15%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .btn {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 18%;
      height: 60px;
      margin-right: 10px;
      border-radius: 10px;
      background: linear-gradient(
        139deg,
        #ff6a88 0%,
        #ff6a88 0%,
        #ff6a88 124%,
        #ff6a88 124%
      );
    }
  }
}
</style>