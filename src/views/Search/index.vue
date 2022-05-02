<template>
  <div class="search">
    <Searchinput placeholdervalue="搜索商品" toppx="30" />
   
    <div class="clear">
      <a href="">
        <li class="one">最近搜索</li>
      </a>
      <a href="">
        <li class="two">清除</li>
      </a>
    </div>
    <div class="recent">
      <a href="">
        <li class="a">电子商务设计系统</li>
        <li class="b"><van-icon name="guide-o" size="35" color="#6b91f3" /></li>
      </a>

      <a href="">
        <li class="a">安卓应用模块</li>
        <li class="b"><van-icon name="guide-o" size="35" color="#6b91f3" /></li>
      </a>

      <a href="">
        <li class="a">购物移动和桌面应用</li>
        <li class="b"><van-icon name="guide-o" size="35" color="#6b91f3" /></li>
      </a>

      <a href="">
        <li class="a">请继续关注更新</li>
        <li class="b"><van-icon name="guide-o" size="35" color="#6b91f3" /></li>
      </a>

      <a href="">
        <li class="a">更多文章</li>
        <li class="b"><van-icon name="guide-o" size="35" color="#6b91f3" /></li>
      </a>

      <a href="">
        <li class="a">更多播报</li>
        <li class="b"><van-icon name="guide-o" size="35" color="#6b91f3" /></li>
      </a>
    </div>
  </div>
</template>

<script>
export default {};
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