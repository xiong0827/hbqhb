<template>
  <div class="releaseGoods">
    <div class="top">
      <div class="topLeft" @click="$router.push(
        {
          name:'add'
        }
      )">
        <router-link to="">取消</router-link>
      </div>
      <div class="topRight">
        <van-button class="topButton btn1" round type="info">存草稿</van-button>
        <van-button class="topButton btn" round type="info" @click="issuegoods"
          >发布</van-button
        >
      </div>
    </div>
    <div class="title">
      <textarea v-model="title" placeholder="写标题，能吸引更多人"></textarea>
    </div>
    <div class="center">
      <textarea
        v-model="details"
        placeholder=" 卖家都关心品牌型号、入手渠道、转手原因...."
      ></textarea>
      <UpLoader v-on:getfile="getphoto" maxnum='5' />
    </div>
    <div class="footer">
      <van-field
        style="width: 80%"
        id="classxuanze"
        readonly
        clickable
        name="picker"
        :value="gclassone"
        label="选择分类"
        placeholder="点击选择分类"
        @click="showPicker = true"
      />
      <van-popup v-model="showPicker" position="bottom">
        <van-picker
          show-toolbar
          :columns="columns"
          @confirm="onConfirm"
          @cancel="showPicker = false"
        />
      </van-popup>
      <div class="price">
        <div class="priceLeft">
          <van-icon name="balance-o" size="40" /><b>价格</b>
        </div>
        <div class="priceRight">
          <van-field
            type="number"
            v-model.number="gprice"
            name="pattern"
            placeholder="价格为低于入手价更容易卖出"
            :rules="[{ pattern, message: '请输入正确内容' }]"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Dialog } from "vant";
export default {
  name: "ReleaseGoods",
  data() {
    return {
      //类别
      gclassone: "",
      //价格
      gprice: 0,
      pattern: /^\d{1,5}$/,
      title: "",
      details: "",
      gphoto: [],
      columns: [
        "手机数码",
        "女装",
        "男装",
        "运动户外",
        "生活百货",
        "游戏装备",
        "技能服务",
        "学习资料",
        "卡卷交易",
        "服饰配件",
      ],
      showPicker: false,
    };
  },
  mounted() {},
  methods: {
    onConfirm(value) {
      this.gclassone = value;
      this.showPicker = false;
    },
    async getphoto(files) {
      this.gphoto = [];
      files.forEach((element) => {
        this.gphoto.push(element);
      });
    },
    async issuegoods() {
      if (
        this.getphoto.length > 0 &&
        this.title &&
        this.details &&
        this.gprice &&
        this.gclassone
      ) {
        let data = new FormData();
        data.append("details", this.details.trim());
        data.append("title", this.title.trim());
        data.append("gclassone", this.gclassone);
        data.append("gprice", this.gprice);
        this.gphoto.forEach((element) => {
         
          data.append("photo", element.file);
        });
        let result = await this.$api.reqIssuegoods(data);
        if (result.status == 200) {
          Dialog.confirm({
            title: "成功提示",
            message: "发布新商品成功",
            confirmButtonText: "查看详情",
            cancelButtonText: "继续查看",
          })
            .then(() => {
              this.$router.push({ name:"goodsinfo",query:{
            goods_id:result.goods_id
          }});
            })
            .catch(() => {
              this.gprice = 0;
              this.gclassone = "";
            });
        } else {
          this.$dialog
            .alert({
              message: result.message + "发布商品失败",
            })
            .then(() => {});
        }
      } else {
        this.$dialog
          .alert({
            message: "请填写完整数据",
          })
          .then(() => {});
      }
    },
  },
};
</script>

<style lang="less" scoped>
.releaseGoods {
  flex: 1;
  overflow-x: hidden;

  background: #f2f2f2;

  .top {
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;

    .topLeft {
      margin-left: 4%;
      width: 36px;
      height: 26px;
      font-family: Inter-SemiBold;
      font-size: 18px;
      font-weight: 600;
      line-height: 26px;
      letter-spacing: -0.9px;
      color: #333232;
    }

    .topRight {
      width: 50%;
      height: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;

      .topButton {
        width: 45%;
        height: 45px;
        font-family: Poppins-Medium;
        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
        letter-spacing: 0px;
        color: #1a1a1a;
        border: 1px solid rgba(0, 0, 0, 0.4);
      }

      .btn1 {
        background: #fff;
      }

      .btn {
        background: #e5f01c;
      }
    }
  }

  .title {
    width: 100%;
    // height: 100px;
    background: #fff;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    textarea {
      width: 100%;
      height: 100%;
      border: none;
      resize: none;
      margin-left: 5%;
      font-family: Inter-SemiBold;
      font-size: 24px;
      font-weight: 600;
      line-height: 50px;
      letter-spacing: -0.9px;
      color: #514a4a;
    }
  }

  .center {
    margin-top: 10px;
    width: 100%;
    height: 55%;
    position: relative;
    background: #fff;

    textarea {
      width: 100%;
      height: 100%;
      border: none;
      resize: none;
      font-family: Inter-SemiBold;
      font-size: 18px;
      font-weight: 600;
      line-height: 26px;
      letter-spacing: -0.9px;
      color: #7d7171;
    }
  }

  .footer {
    padding-top: 20px;
    width: 100%;
    height: 375px;
    margin-top: 20px;
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;

    .price {
      padding-top: 10px;
      width: 100%;
      height: 63px;
      display: flex;
      justify-content: space-evenly;
      align-items: center;

      .priceLeft {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 20%;

        b {
          font-family: Inter-SemiBold;
          font-size: 18px;
          font-weight: 600;
          line-height: 26px;
          letter-spacing: -0.9px;
          color: #3d3d3d;
        }
      }

      .priceRight {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 60%;
        margin-right: 10px;

        b {
          font-family: Roboto-Bold;
          font-size: 24px;
          font-weight: bold;
          line-height: 20px;
          letter-spacing: 1.2px;
          color: #f75858;
        }

        span {
          font-family: Roboto-Bold;
          font-size: 24px;
          font-weight: bold;
          line-height: 20px;
          letter-spacing: 1.2px;
          color: #c3b7b7;
        }
      }
    }
  }
}
</style>