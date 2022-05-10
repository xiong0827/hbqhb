<template>
  <div class="searchResult">
    <Searchinput placeholdervalue="搜索关键词" toppx="40" />
    <div class="nav">
      <van-tabs
        title-inactive-color="#2F2F4A"
        title-active-color="#F75858"
        background="#EDF0F5"
        v-model="activeName"
        @click="onClick"
      >
        <van-empty v-if="goodsCount == 0" description="没有找到相关商品" />
        <van-tab class="tab1" name="zonghe" title="综合">
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
            <div
              class="nav1"
              v-for="(goods, index) in list"
              :key="index"
              v-show="goods"
              @click="
                $router.push({
                  name: 'goodsinfo',
                  query: {
                    goods_id: goods.goods_id,
                  },
                })
              "
            >
              <img
                v-if="goods.goodsphoto"
                v-lazy="goods.goodsphoto[0]"
                alt=""
              />
              <div class="nav1Info">
                <h3>{{ goods.title }}</h3>
                <b>{{ goods.gclassone }}</b>
                <h4>{{ goods.gprice }}</h4>
              </div>
            </div>
          </van-list>
        </van-tab>
        <van-tab class="tab1" name="price" title="价格" >
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
            <div
              class="nav1"
              v-for="(goods, index) in list"
              :key="index"
              v-show="goods"
              @click="
                $router.push({
                  name: 'goodsinfo',
                  query: {
                    goods_id: goods.goods_id,
                  },
                })
              "
            >
              <img
                v-if="goods.goodsphoto"
                v-lazy="goods.goodsphoto[0]"
                alt=""
              />
              <div class="nav1Info">
                <h3>{{ goods.title }}</h3>
                <b>{{ goods.gclassone }}</b>
                <h4>{{ goods.gprice }}</h4>
              </div>
            </div>
          </van-list>
        </van-tab>
        <van-tab class="tab1" title="时间" name="time" >
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
          <div
            class="nav1"
            v-for="(goods, index) in list"
            :key="index"
            v-show="goods"
            @click="
              $router.push({
                name: 'goodsinfo',
                query: {
                  goods_id: goods.goods_id,
                },
              })
            "
          >
            <img v-if="goods.goodsphoto" v-lazy="goods.goodsphoto[0]" alt="" />
            <div class="nav1Info">
              <h3>{{ goods.title }}</h3>
              <b>{{ goods.gclassone }}</b>
              <h4>{{ goods.gprice }}</h4>
            </div>
          </div>
        </van-list>
        </van-tab>
       
      </van-tabs>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "SearchResult",
  data() {
    return {
      searchcode: "",
      pagenum: 6,
      atpage: 1,
      isLoading: false,
      loading: false, // 是否处在加载状态
      finished: false, // 是否已加载完成
      error: false,
      list: [],
      total: 0,
      gpricesort: 0,
      pricestatus:true,
      gtimesort: 0,
      timestatus:true,
      activeName: "zonghe",
    };
  },
  mounted() {
    this.getGoodsList();
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
        }
       else if (this.gtimesort) {
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
    onClick(name, title) {
     
      if ((name == "price")) {
        this.gtimesort=0
        this.atpage=1
        if (this.pricestatus) {
          
          this.gpricesort = -1;
          this.pricestatus=false
          this.list = [];
        this.getList();
      
        }
        else{
          this.gpricesort=1
          this.pricestatus=true
          this.list = [];
        this.getList();
      
        }
            
      }
     else if (name == "time") {
       this.gpricesort=0
       
       this.atpage=1
        if (this.timestatus) {
          this.gtimesort = -1;
          this.timestatus=false
          
        }
        else{
          this.gtimesort=1
          this.timestatus=true
        }
            this.list = [];
        this.getList();
    
        
      }
      else if(name=='zonghe'){
        this.gtimesort=0
        this.gpricesort=0
        this.list=[]
        this.getList()
             }
    },
    // gprice()
    // {
    //  this.gpricesort = -1;
    //     this.list = [];
    //     this.getList();
    //     this.gpricesort = 0;
    // }
    //取消订单
  },
  computed: {
    ...mapState("goods", ["goodsInfoList", "goodsCount"]),
  },
};
</script>

<style lang="less" scoped>
.searchResult {
  flex: 1;

  .nav {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    .tab1 {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      .nav1 {
        margin-top: 30px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        position: relative;
        backdrop-filter: blur(2rem);

        img {
          position: absolute;
          width: 50%;
          height: 120px;
          border-radius: 10px;
          top: 0;
        }
        .nav1Info {
          width: 80%;
          height: 182px;
          margin-top: 40px;
          background: #edf4ff;
          z-index: -1;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          align-items: center;
          border-radius: 10px;

          h3 {
            transform: translateY(10px);
            margin-top: 20px;
            font-family: Roboto-Regular;
            font-size: 14px;
            font-weight: normal;
            letter-spacing: 0.7px;
            color: #2f2f4a;
            overflow: hidden;
            height: 20px;
          }
          b {
            font-family: Roboto-Regular;
            font-size: 14px;
            font-weight: normal;
            line-height: 20px;
            letter-spacing: 0.7px;
            color: #2f2f4a;
            
          }
          h4 {
            font-family: Roboto-Bold;
            font-size: 16px;
            font-weight: bold;
            line-height: 20px;
            letter-spacing: 0.8px;
            color: #f75858;
            margin-bottom: 10px;
          }
        }
      }
    }
  }
}
</style>