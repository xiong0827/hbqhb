<template>
  <div class="news">
    <div class="main" v-if="!isLoading" >
      <div class="news-item" v-for="Article,index in NewsList" :key="index" :alt="Article.ArticleSummary">
        <img class="thumb" :src="Article.ArticleCoverImageUrl"  />
        <div class="right-box">
          <h1 class="title">{{Article.ArticleTitle}}</h1>
          <div class="tags">
            <span>{{Article.ArticleType}}</span>
          </div>
          <div class="footer">
            <div>
              <span>{{Article.AuthorName}}</span>&nbsp;&nbsp;
              <span>{{Article.ArticlePublishDateTime}}</span>
            </div>
            <span>{{}}</span>
          </div>
        </div>
      </div>
    </div>
    <van-loading size="24px" vertical v-if="isLoading">加载中...</van-loading>
  </div>
</template>

<script>
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
            message:'<li>获取新闻列表失败</li>'+error
        })
    }
  },
  methods: {
    async getDate() {
      this.isLoading = true;
      let result = await this.$api.reqGetNewsList();
      this.DataStatus = result.DataStatus;
      if (this.DataStatus.StatusCode == 100) {
        this.NewsList = result.Data;
        this.isLoading = false;
      }
    },
    getPageNo(page) {
      this.page = page;
      this.getDate();
    },
  },
  computed: {},
};
</script>

<style lang="less" scoped>
.news {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
.main{
    margin-top: 20px;
      .news-item {
    display: flex;
    border: 1px solid #eee;
    width: 90%;
    padding: 10px;
    margin-bottom: 5px;
  }

  .thumb {
    display: block;
    width: 42%;
    height: 140px;
    background-color: #ccc;
    margin-right: 10px;
  }

  .right-box {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 12px;
    flex: 1;
  }

  .title {
    font-size: 20px;
    font-weight: normal;
  }

  .tags span {
    display: block;
    float: left;
    background-color: #f0f0f0;
    line-height: 20px;
    padding: 0 10px;
    border-radius: 10px;
    margin-right: 8px;
  }

  .footer {
    display: flex;
    justify-content: space-between;
  }
}
}
</style>