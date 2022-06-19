<template>
  <div class="groom">
    <Backleft backsize="30" margin="20" />

    <!-- 上部分 -->
    <div class="title" v-show="!isLoading">
      <p>热点新闻</p>
    </div>
    <!-- 下部分 -->
    <div class="container" v-if="!isLoading">
      <div
        class="card"
        v-for="(Article, index) in NewsList"
        :key="index"
        :alt="Article.ArticleSummary"
        @click="showModel(index)"
      >
        <!-- 头像 -->
        <span class="top">
          <li class="a">
            <img :src="Article.AuthorHeadImageUrl" alt="" />
          </li>
          <li class="b">
            <p class="name">{{ Article.AuthorName }}</p>
          </li>
          <li class="c">
            <Share />
          </li>
        </span>
        <!-- 留言 -->
        <span class="say">
          <p>
            {{ Article.ArticleTitle }}
          </p>
          <img :src="Article.ArticleCoverImageUrl" />
          <i class="time">{{ Article.ArticlePublishDateTime }}</i>
        </span>
        <!-- 操作 -->
        <span class="control">
          <li>
            <p><van-icon name="like-o" size="30" /></p>
            <p>喜欢</p>
          </li>
          <li>
            <p><van-icon name="chat-o" size="30" /></p>
            <p>评论</p>
          </li>
          <li>
            <p><van-icon name="share-o" size="30" /></p>
            <p>分享</p>
          </li>
        </span>
      </div>
      <div class="choose-order">
        <PaginAction
          :pageNo="page"
          :pageSize="limit"
          :total="DataStatus.DataTotalCount"
          :continues="5"
          @getPageNo="getPageNo"
        />
      </div>
    </div>

    <van-loading size="24px" vertical v-if="isLoading">加载中...</van-loading>
    <!-- <Tabbar /> -->
  </div>
</template>

<script>
import { Dialog } from "vant";
export default {
  data() {
    return {
      page: 1,
      limit: 2,
      NewsList: {},
      isLoading: false,
      DataStatus: {},
    };
  },
  mounted() {
    try {
      this.getDate();
    } catch (error) {
      this.$dialog.alert({
        message: "获取新闻列表失败" + error,
      });
    }
  },
  methods: {
    async getDate() {
      this.isLoading = true;
      let result = await this.$api.reqGetNewsList();
      this.DataStatus = result.DataStatus;
      if (result.DataStatus.StatusCode == 100) {
        this.NewsList = result.Data;
        this.isLoading = false;
      } else {
        this.$dialog.alert({
          message: "获取新闻列表失败" + error,
        });
      }
    },
    getPageNo(page) {
      this.page = page;
      this.getDate();
    },
    //获取模态框信息
    showModel(index) {
      Dialog.confirm({
        title: "主要内容",
        message: this.NewsList[index].ArticleContentWithTags,
        confirmButtonText: "查看原文",
        cancelButtonText: "返回首页",
        width: "360px",
      })
        .then(() => {
          window.location.href = this.NewsList[index].ArticleUrl;
        })
        .catch(() => {});
    },
  },
  computed: {

  },
};
</script>

<style lang="less" scoped>
.groom {
  flex: 1;
  background: #ff6d55;
  display: flex;
   justify-content:flex-start;
   flex-direction: column;
  .back {
    margin: 10px;
  }
  // 上部分
  .title {
    width: 90px;
    height: 28px;
    margin-left: 24px;
    margin-top: 20px;
    p {
      font-family: Roboto-Medium;
      font-size: 20px;
      font-weight: 500;
      line-height: 28px;
      letter-spacing: 1.43px;
      color: #ffffff;
      margin-top: -15px;
    }
  }
  .production {
    width: 130px;
    height: 20px;
    margin-left: 72px;
    margin-top: 20px;
    p {
      font-family: Roboto-Regular;
      font-size: 14px;
      font-weight: normal;
      line-height: 20px;
      letter-spacing: 0.23px;
      color: #ffffff;
    }
  }
  // 下部分
  .container {
    background: #f9fbff;
    border-radius: 20px;
    // height: 100%;
    width: 100%;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    li {
      list-style: none;
    }
    .card {
      margin: 15px 0;
      display: flex;
      width: 90%;
      flex-direction: column;
      align-items: center;
      border-radius: 10px;
      background: #ccc;
      box-shadow: 0px 6px 14px 0px rgba(0, 0, 0, 0.3);
    }
    // 头像
    .top {
      width: 80%;
      height: 50px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin-top: 20px;
      .a {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }
      .b {
        margin-left: 10px;
        height: 100%;
        width: 200px;
        display: flex;
        flex-direction: column;
        p {
          height: 50%;
          width: 100%;
        }
        .name {
          font-family: Roboto-Medium;
          font-size: 18px;
          font-weight: 500;
          letter-spacing: 0.17px;
          color: #2f2f4a;
        }
      }
      .c {
        width: 32px;
        height: 32px;
      }
    }
    // 留言
    .say {
      width: 80%;
      img {
        height: 160px;
        width: 100%;
      }
      p {
        font-family: Roboto-Regular;
        font-size: 15px;
        font-weight: normal;
        letter-spacing: 0.17px;
      }
      .time {
        margin-top: 10px;
        float: right;
      }
    }
    // .操作
    .control {
      width: 80%;
      height: 60px;
      display: flex;
      li {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        p {
          font-size: 18px;
          font-family: Roboto-Regular;
          font-weight: normal;
          letter-spacing: 0.5px;
          color: #2f2f4a;
        }
      }
    }
  }
}
</style>