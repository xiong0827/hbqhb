<template>
  <div class="buyout">
    <van-card
      v-for="order in orderList"
      tag="特价"
      :key="order.order_id"
      num="1"
      :price="order.goodsinfo.gprice || {}"
      :title="order.ordertime"
      v-show="order.goodsinfo"
      :thumb="order.goodsinfo.gphoto"
    >
      <template #tags>
        <van-tag plain type="danger">{{
          orderStatus(order.orderstatus)
        }}</van-tag>
        <van-cell :value="order.goodsinfo.title" />
      </template>
      <template #footer>
        <van-button size="small" hairline type="info" @click="$router.push(
          {
            name:'orderinfo',
            query:{
              order_id:order.order_id
            }
          }
        )">{{order.orderstatus==1?'去支付':'查看详情'}}</van-button>
        <van-button
          size="small"
          hairline
          type="info"
          @click="cancelOrder(order.order_id)"
          >取消订单</van-button
        >
        <van-button size="small" hairline @click="deleteOrder(order.order_id)" type="danger">删除订单</van-button>
      </template>
    </van-card>
    <!-- <van-empty image="error" v-if="!goodsIsShow" description="商品不见了" /> -->
  </div>
</template>

<script>
import { mapState } from "vuex";
import { Dialog, Toast } from "vant";
export default {
  mounted() {
    this.getMainOrderList();
  },
  methods: {
    async getMainOrderList() {
      try {
        await this.$store.dispatch("order/getMainOrder");
      } catch (error) {
        return this.$dialog
          .alert({
            message: error,
          })
          .then(() => {});
      }
    },
    cancelOrder(order_id) {
      Dialog.confirm({
        title: "提示",
        message: "确定要取消吗",
        confirmButtonText: "确认",
        cancelButtonText: "取消",
      })
        .then(async () => {
          try {
            let message = await this.$store.dispatch(
              "order/cancelOrder",
              order_id
            );
            this.$dialog
              .alert({
                message,
              })
              .then(() => {
                this.getMainOrderList()
              });
          } catch (error) {
            this.$dialog
              .alert({
                message: error,
              })
              .then(() => {});
          }
        })
        .catch(() => {
          Toast("取消操作");
        });
    },
    //删除订单
    deleteOrder(order_id)
    {
    Dialog.confirm({
        title: "提示",
        message: "确定要删除吗",
        confirmButtonText: "确认",
        cancelButtonText: "取消",
      })
        .then(async () => {
          try {
            let message = await this.$store.dispatch(
              "order/deleteOrder",
              order_id
            );
            this.$dialog
              .alert({
                message,
              })
              .then(() => {
                this.getMainOrderList()
              });
          } catch (error) {
            this.$dialog
              .alert({
                message: error,
              })
              .then(() => {});
          }
        })
        .catch(() => {
          Toast("取消操作");
        });
    }
  },
  computed: {
    ...mapState("order", ["orderList"]),
    orderStatus() {
      return function (status) {
        switch (status) {
          case 1:
            status = "未支付";
            break;
          case 2:
            status = "已支付";
            break;
          case 3:
            status = "已取消";
            break;
          default:
            break;
        }
        return status;
      };
    },
  },
};
</script>

<style lang="less" scoped>
</style>