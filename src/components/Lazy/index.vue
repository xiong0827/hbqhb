<template>
  <van-list
    class="goodslist"
    v-model="loading"
    :finished="finished"
    finished-text="没有更多了"
    @load="onLoad"
    offset="300"
    :error.sync="error"
    error-text="请求失败，点击重新加载"
    v-if="goodsCount"
  >
    <slot :list="list"></slot>
  </van-list>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "GoodsList",
  mounted() {
    this.getGoodsList();
  },
  data() {
    return {
      searchcode: "",
      pagenum: 6,
      atpage: 1,
      isLoading: false,
      loading: false, // 是否处在加载状态
      finished: false, // 是否已加载完成
      list: [],
      total: 0,
      gpricesort: 0,
      pricestatus: true,
      gtimesort: 0,
      timestatus: true,
      error: false,
    };
  },
  methods: {
    async getGoodsList() {
      if (this.gpricesort == 0 && this.gtimesort == 0) {
        await this.$store.dispatch("goods/getGoodsList", {
          pagenum: this.pagenum,
          atpage: this.atpage,
          searchkeyword: this.$route.query.searchcode,
        });
      } else {
        if (this.gpricesort) {
          await this.$store.dispatch("goods/getGoodsList", {
            pagenum: this.pagenum,
            atpage: this.atpage,
            searchkeyword: this.$route.query.searchcode,
            gpricesort: this.gpricesort,
          });
        } else if (this.gtimesort) {
          await this.$store.dispatch("goods/getGoodsList", {
            pagenum: this.pagenum,
            atpage: this.atpage,
            searchkeyword: this.$route.query.searchcode,
            gtimesort: this.gtimesort,
          });
        }
      }
    },
    async getList() {
      await this.getGoodsList();
      this.total = this.goodsCount;
      if (this.goodsCount == 0) {
        // 判断获取数据条数若等于0
        this.list = []; // 清空数组
        this.finished = true; // 停止加载
      }
      // 若数据条数不等于0
      this.total = this.goodsInfoList.length; // 给数据条数赋值
      for (const key in this.goodsInfoList) {
        this.list.push(this.goodsInfoList[key]);
      }
      // 将数据放入list中
      this.loading = false; // 加载状态结束
      // 如果list长度大于等于总数据条数,数据全部加载完成
      if (this.list.length >= this.goodsCount) {
        this.finished = true; // 结束加载状态
      }
    },
    onLoad() {
      // 若加载条到了底部
      this.getList(); // 调用上面方法,请求数据
      this.atpage++;
    },
    onRefresh() {
      this.finished = false; // 清空列表数据
      this.loading = true; // 将 loading 设置为 true，表示处于加载状态
      this.atpage = 1; // 分页数赋值为1
      this.list = []; // 清空数组
      this.onLoad(); // 重新加载数据
    },
  },
  computed: {
    ...mapState("goods", ["goodsInfoList", "goodsCount"]),
  },
};
</script>

<style>
</style>