<template>
  <div class="send">
    <div class="centainer">
      <div class="play">
        <span
          ><van-icon name="label-o" class="left" color="#1c2d2e" size="60"
        /></span>
        <span>
          <p>发会玩帖子</p>
          <p>分享我的生活</p>
        </span>
      </div>

      <div class="sent">
        <span
          ><van-icon name="paid" class="left" color="#1c2d2e" size="60"
        /></span>
        <span>
          <p>发闲置</p>
          <p>30s发布宝贝</p>
        </span>
      </div>

      <div  class="up">
        <a @click="$router.go(-1)"><van-icon name="cross" class="flase" size="60" /></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.send {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #333333;
  .centainer {
    height: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    // 上
    .play {
      width: 350px;
      height: 150px;

      display: flex;
      align-items: center;
      span:nth-child(1) {
        width: 80px;
        height: 80px;
        background: #00d2fd;
        margin-left: 70px;
        border-radius: 50%;
        margin-right: 10px;
        .left {
          margin-top: 10px;
          margin-left: 10px;
        }
      }
      span:nth-child(2) {
        width: 150px;
        height: 100px;
        margin-left: 20px;
        margin-right: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        p:nth-child(1) {
          width: 200px;
          height: 40px;
          font-size: 20px;
          line-height: 40px;
          color: #fff;
        }
        p:nth-child(2) {
          width: 200px;
          height: 40px;
          font-size: 16px;
          line-height: 40px;
          color: #969696;
        }
      }
    }
    // 中
    .sent {
      width: 350px;
      height: 150px;
      display: flex;
      align-items: center;
      span:nth-child(1) {
        width: 80px;
        height: 80px;
        background: #fde404;
        margin-left: 70px;
        border-radius: 50%;
        margin-right: 10px;
        .left {
          margin-top: 10px;
          margin-left: 10px;
        }
      }
      span:nth-child(2) {
        width: 150px;
        height: 100px;
        margin-left: 20px;
        margin-right: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        p:nth-child(1) {
          width: 200px;
          height: 40px;
          font-size: 20px;
          line-height: 40px;
          color: #fff;
        }
        p:nth-child(2) {
          width: 200px;
          height: 40px;
          font-size: 16px;
          line-height: 40px;
          color: #969696;
        }
      }
    }
    // 下
    .up {
      background: skyblue;
      height: 80px;
      width: 80px;
      border-radius: 50%;
      background: #ffffff;
      margin-top: 20px;
      .flase {
        margin-left: 10px;
        margin-top: 10px;
      }
    }
  }
}
</style>