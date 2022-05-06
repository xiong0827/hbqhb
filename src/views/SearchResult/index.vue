<template>
  <div class="searchResult">
    <Searchinput placeholdervalue="搜索关键词" toppx="40" />
    <div class="nav">
      <van-tabs
        title-inactive-color="#2F2F4A"
        title-active-color="#F75858"
        background="#EDF0F5"
      >
        <van-tab class="tab1" title="球鞋">
          <div class="nav1">
            <img src="./images/鞋1.svg" alt="" />
            <div class="nav1Info">
              <h3>Men’s Football Shoes BB5592</h3>
              <b>九五新</b>
              <h4>$150</h4>
            </div>
          </div>
          <div class="nav1">
            <img src="./images/鞋1.svg" alt="" />
            <div class="nav1Info">
              <h3>Men’s Football Shoes BB5592</h3>
              <b>九五新</b>
              <h4>$150</h4>
            </div>
          </div>
          <div class="nav1">
            <img src="./images/鞋1.svg" alt="" />
            <div class="nav1Info">
              <h3>Men’s Football Shoes BB5592</h3>
              <b>九五新</b>
              <h4>$150</h4>
            </div>
          </div>
        </van-tab>
        <van-tab title="标签 2">内容 2</van-tab>
        <van-tab title="标签 3">内容 3</van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchResult",
};
</script>

<style lang="less" scoped>
.searchResult {
  flex: 1;

  .nav {
    margin-top: 59px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    .tab1 {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      .nav1 {
        margin-top: 35px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        position: relative;
        backdrop-filter: blur(2rem);

        img {
          position: absolute;
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
          justify-content: space-around;
          align-items: center;
          border-radius: 10px;

          h3 {
            margin-top: 40px;
            font-family: Roboto-Regular;
            font-size: 14px;
            font-weight: normal;
            line-height: 20px;
            letter-spacing: 0.7px;
            color: #2f2f4a;
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