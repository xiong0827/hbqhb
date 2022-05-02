<template>
  <div class="cityData">
    <van-field
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
    </van-popup>
  </div>
</template>

<script>
import CityData from "@/units/app";
export default {
  name: "SelectSite",
  mounted() {
    console.log(CityData);
  },
  data() {
    return {
      show1: false,
      fieldValue: "",
      cascaderValue: "",
      // 选项列表，children 代表子选项，支持多级嵌套
      options: CityData,
    };
  },
  methods: {
    onFinish({ selectedOptions }) {
      this.show1 = false;
      this.fieldValue = selectedOptions.map((option) => option.text).join("/");
    },
  },
};
</script>

<style lang="less" scoped>
</style>