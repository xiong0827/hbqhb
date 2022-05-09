<template>
  <div class="maindata">
    <Backtop />
    <div class="head">
      <div class="headLeft">
        <b>头像</b>
      </div>
      <div class="headRight">
        <van-image round width="60px" height="60px" :src="userInfo.avatarurl" />
        <UpLoaderOne />
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
          name="picker"
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
        <van-cell
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
        />
      </van-cell-group>
      <SelectSite  :address=userInfo.address  />
    </div>
    <div class="footer">
      <van-button round type="info" class="btn" @click="clearinfo">取消</van-button>
      <van-button round type="info" class="btn" @click="setInfo"
        >保存</van-button
      >
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "MainData",
  mounted() {
    try {
      this.$store.dispatch("user/getUserInfo");
    } catch (error) {
      Toast("获取用户信息失败");
    }
    this.$on('updateAddress',function(newaddress){
      this.address=newaddress
    })
  },
  data() {
    return {
     
     
     
      show: false,
      minDate: new Date(1900, 0, 1),
      maxDate: new Date(2006, 0, 31),
      tipsMsg: "保存成功",
      //选择性别

      columns: ["男", "女"],
      showPicker: false,
         birthday:null,
        nickname:null,
        address:null,
        avatarurl: [],
        gender: null,
    };
  },

  methods: {
    onClickLeft() {
      Toast("返回");
    },
    formatDate(date) {
      return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    },
    onConfirmDate(date) {
      this.show = false;
      this.date = this.formatDate(date);
    },
    // Dialog() {
    //   this.$dialog
    //     .alert({

    //       message: this.tipsMsg,
    //     })
    //     .then(() => {
    //       this.$router.push("main");
    //     });
    // },
    async getphoto(files) {
      this.avatarurl = [];
      files.forEach((element) => {
        this.avatarurl.push(element);
      });
    },
    //清空信息
    clearinfo()
    {
    
      location.reload();
     
    },
    //保存信息
    async setInfo() {
        try {
    await  this.$store.dispatch('user/updateInfo')
    } catch (error) {
      
    }
    },
    //选择性别
    onConfirmSex(value) {
      this.usex = value;
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