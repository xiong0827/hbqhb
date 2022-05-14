<template>
  <div class="UpLoader">
    <van-uploader
      class="uploader"
      v-model="fileList"
      accept="image/png,image/jpeg,image/jpg,application/pdf"
      multiple
      :max-count="maxnum"
      :max-size="500 * 1024" 
      :after-read="afterRead"
    >
    </van-uploader>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  props: ["maxnum"],
  name: "UpLoader",
  data() {
    return {
      fileList: [
        // { url: "https://img01.yzcdn.cn/vant/leaf.jpg" },
        // // Uploader 根据文件后缀来判断是否为图片文件
        // // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
        // { url: "https://cloud-image", isImage: true },
      ],
    };
  },
  methods: {
    async afterRead(files) {
      // 此时可以自行将文件上传至服务器
      this.$emit("getfile", this.fileList);
    },
  },
};
</script>

<style lang="less" scoped>
.UpLoader {
  float: left;
  width: 100%;
  position: relative;
  position: absolute;
  bottom: 50px;
}

.van-uploader__wrapper {
  position: absolute;
  bottom: 5px;
}

.van-uploader[data-v-39ebf3c1] {
  top: 0px;
  left: 20px;
  width: 40%;
  height: 160px;
}

.van-uploader__wrapper {
  width: 100% !important;
  height: 100% !important;

  .van-uploader__upload {
    width: 165px !important;
    height: 100% !important;
  }
}

// }
</style>