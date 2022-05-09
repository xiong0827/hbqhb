<template>
  <div class="search">
    <Searchinput placeholdervalue="搜索商品" toppx="30" />

    <div class="clear">
      <a href="">
        <li class="one">最近搜索</li>
      </a>
      <a @click="claerSearch">
        <li class="two">清除</li>
      </a>
    </div>
    <div class="recent">
      <a v-for="item in searchHistory" :key="item.code">
        <li
          class="a"
          @click="
            $router.replace({
              name: 'searchresult',
              query: {
                searchcode: item.code,
              },
            })
          "
        >
          {{ item.code }}
        </li>
        <li class="b"><van-icon name="guide-o" size="35" color="#6b91f3" /></li>
      </a>
    </div>
  </div>
</template>

<script>
import { Dialog } from "vant";
export default {
  computed: {
    searchHistory() {
      return JSON.parse(localStorage.getItem("searchHistory"));
    },
  },
  methods: {
    claerSearch() {
      Dialog.confirm({
        title: "提示",
        message: "您确定要清空记录吗",
        confirmButtonText: "确认",
        cancelButtonText: "取消",
      })
        .then(() => {
          localStorage.removeItem("searchHistory");
          // location.reload();
        })
        .catch(() => {});
    },
  },
};
</script>

<style lang="less" scoped>
.search {
  flex: 1;
  .clear {
    width: 328px;
    height: 32px;
    margin: auto;
    margin-top: 24px;
    margin-bottom: 24px;
    display: flex;
    justify-content: space-between;
    a {
      text-decoration: none;
    }
    .one {
      list-style: none;
      font-family: Roboto-Medium;
      font-size: 20px;
      font-weight: 500;
      line-height: 28px;
      letter-spacing: 0px;
      color: rgba(0, 0, 0, 0.87);
    }
    .two {
      list-style: none;
      font-family: SourceHanSansCN-Regular;
      font-size: 18px;
      font-weight: normal;
      letter-spacing: 0em;
      color: #4a85ef;
    }
  }
  .recent {
    display: flex;
    flex-direction: column;
    align-items: center;
    a {
      width: 360px;
      height: 48px;
      border-top: 1px solid #ececec;
      display: flex;
      justify-content: space-between;
      .a {
        font-family: Roboto-Regular;
        font-size: 20px;
        font-weight: normal;
        line-height: 20px;
        letter-spacing: 0px;
        color: rgba(0, 0, 0, 0.87);
        list-style: none;
        width: 296px;
        height: 20px;
        margin: auto 15px;
      }
      .b {
        list-style: none;
        margin-top: 8px;
        margin-right: 15px;
      }
    }
  }
}
</style>