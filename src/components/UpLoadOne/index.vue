<template>
  <div class="UpLoaderone" :style="{ opacity: isshow }">
    <van-uploader
      class="uploader"
     
      accept="'image/*'"
      v-model="fileList"
      max-count="1"
       :after-read="afterRead"
      :before-delete="beforeDelete"
     :before-read="beforeRead"
     image-fit="cover"
      :preview-image="false"
     
    >
    </van-uploader>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  name: "UpLoaderOne",
  data() {
    return {
      isshow: 0,
      fileList: [
        // { url: "https://img01.yzcdn.cn/vant/leaf.jpg" },
        // // Uploader 根据文件后缀来判断是否为图片文件
        // // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
        // { url: "https://cloud-image", isImage: true },
      ],
    };
  },
  methods: {
    beforeRead(files)
    {
    if (files.size / 1024 > 3000) {
          Toast("图片过大");
         reject(false)
        }
        else{
       return true
        }
    },
    async afterRead(files) {
      // 此时可以自行将文件上传至服务器
      this.$emit("getfile", this.fileList);
      this.isshow = 1;
    },
    beforeDelete()
    {
      this.isshow=0;
      return true
    },
 
    
  },
};
</script>

<style lang="less" scoped>
.UpLoaderone {
  position: absolute;
  right: 10px;
  top: 60px;
  z-index: 2;
  border-radius: 50%;
}
</style>