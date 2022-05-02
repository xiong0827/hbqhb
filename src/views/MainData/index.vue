<template>
  <div class="maindata">
    <van-nav-bar
      title="个人资料"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
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
        <van-field v-model="userinfo.vipname" label="会员名" />
      </van-cell-group>
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
      <!-- <van-field
        v-model="fieldValue"
        is-link
        readonly
        label="地区"
        @click="show1 = true"
      />
      <van-popup v-model="show1" round position="bottom">
        <van-cascader
          v-model="cascaderValue"
          title="请选择所在地区"
          :options="options"
          @close="show1 = false"
          @finish="onFinish"
        />
      </van-popup> -->
    </div>
    <div class="footer">
      <van-button round type="info" class="btn">取消</van-button>
      <van-button round type="info" class="btn">保存</van-button>
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
        vipname: "",
        nickname: "",
        sex: "",
        address: "",
      },
      show: false,
      minDate: new Date(1990, 0, 1),
      maxDate: new Date(2000, 0, 31),
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