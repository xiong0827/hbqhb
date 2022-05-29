<template>
  <div class="maindata">
    <Backtop />
    <div class="head">
      <div class="headLeft">
        <b>头像</b>
      </div>
      <div class="headRight">
        <van-image round width="60px" height="60px" :src="userInfo.avatarurl" />
        <UpLoaderOne v-on:getfile="getphoto" />
      </div>
    </div>
    <div class="input">
      <van-cell-group>
        <van-field
          v-model="nickname"
          label="昵称"
          :placeholder="userInfo.nickname"
        />
      </van-cell-group>
      <van-cell-group>
        <van-field
          readonly
          clickable
          name="datetimePicker"
          :value="gender"
          label="性别"
          :placeholder="userInfo.gender"
          @click="showPicker = true"
        />
        <van-popup v-model="showPicker" position="bottom">
          <van-picker
            show-toolbar
            :columns="columns"
            @confirm="onConfirmSex"
            @cancel="showPicker = false"
          />
        </van-popup>
      </van-cell-group>
      <van-cell-group>
        <!-- <van-cell
          title="生日"
          v-model="birthday"
          @click="show = true"
          :placeholder="userInfo.birthday"
        />
        <van-calendar
          v-model="show"
          :min-date="minDate"
          :max-date="maxDate"
          @confirm="onConfirmDate"
        /> -->
        <van-field
          readonly
          clickable
          name="datetimePicker"
          :value="birthday"
          label="时间选择"
          :placeholder="userInfo.birthday"
          @click="showDate = true"
        />
        <van-popup v-model="showDate" position="bottom">
          <van-datetime-picker
            type="date"
            :min-date="minDate"
            :max-date="maxDate"
            v-model="currentDate"
            @confirm="onConfirmDate"
            @cancel="showDate = false"
          />
        </van-popup>
      </van-cell-group>
      <SelectSite :address="userInfo.address" @updateAddress='getaddress' />
    </div>
    <div class="footer">
      <van-button round type="info" class="btn" @click="clearinfo"
        >取消</van-button
      >
      <van-button round type="info" class="btn" @click="saveData"
        >保存</van-button
      >
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
import { mapState } from "vuex";
export default {
  name: "MainData",
  mounted() {
    this.getUserInfo();
  },
  data() {
    return {
      showDate: false,
      minDate: new Date(1900, 0, 1),
      maxDate: new Date(),
      currentDate: new Date(2001, 0, 1),
      tipsMsg: "保存成功",
      //选择性别
      avatar: [],
      columns: ["男", "女"],
      showPicker: false,
      birthday: null,
      nickname: null,
      address: null,
      gender: null,
    };
  },

  methods: {
    //获取个人信息
    async getUserInfo() {
      try {
        await this.$store.dispatch("user/getUserInfo");
      } catch (error) {
        Toast("获取用户信息失败");
      }
    },
    //保存信息
    async saveData() {
      let data = {
        nickname: this.nickname,
        address: this.address,
        gender: this.gender,
        birthday: this.birthday,
      };
      try {
        let result = await this.$store.dispatch("user/updateInfo", data);
        await Toast(result);
        location.reload();
      } catch (error) {
        Toast(error);
      }
    },
    getaddress(newAddress)
    {
this.address=newAddress
    },
    onClickLeft() {
      Toast("返回");
    },
    formatDate(date) {
      return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    },
    onConfirmDate(date) {
      this.showDate = false;
      this.birthday =this.formatDate(date);
      console.log(this.birthday);
    },
    async getphoto(files) {
      let data = new FormData();
      console.log(files);
      data.append("avatarurl", files[0].file);
      console.log(data);
      try {
        let result = await this.$store.dispatch("user/updateUserAvatar", data);
        await Toast(result);
        this.getUserInfo();
      } catch (error) {
        Toast(error);
      }
    },
    //清空信息
    clearinfo() {},
    //保存信息
    //选择性别
    onConfirmSex(value) {
      this.gender = value;
      this.showPicker = false;
    },
  },
  computed: {
    ...mapState("user", ["userInfo"]),
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
      width: 20%;
      height: 60px;
      margin-right: 10px;
      border-radius: 10px;
      background-color: #353b48;
    }
  }
}
</style>