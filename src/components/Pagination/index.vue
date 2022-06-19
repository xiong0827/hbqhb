<template>
  <div class="pagination">
    <button :disabled='pageNo==1' @click="$emit('getPageNo',pageNo-1)">上一页</button>
    <button :class="{active:pageNo==1}" v-if="startNumAndEndNum.start!=1" @click="$emit('getPageNo',1)" >1</button>
    <!-- //中间部分 -->
    <button v-if="startNumAndEndNum.start>2">···</button>
    <button  :class="{'active':pageNo==page}" v-for="page,index in startNumAndEndNum.end" :key="index" v-show="page>=startNumAndEndNum.start"  @click="$emit('getPageNo',page)">{{page}}</button>
    <button v-if="startNumAndEndNum.end < totalPage-1">···</button>
    <button v-if="startNumAndEndNum.end!=totalPage" @click="$emit('getPageNo',totalPage)">{{totalPage}}</button>
    <button :disabled='pageNo==totalPage' @click="$emit('getPageNo',pageNo+1)">下一页</button>
    <button style="margin-left: 30px">共 {{total}}条</button>
  </div>
</template>

<script>
export default {
  name: "PaginAction",
  props:['pageNo','pageSize','total','continues'],
  computed:{
    totalPage()
    {
      return Math.ceil(this.total/this.pageSize)
    },
    //计算出连续的页码数 当前页码数 总页数
    startNumAndEndNum()
    {
      let start=0,end=0;
      if (this.continues>this.totalPage) {
        // 总页数少于连续码数
        start=1;
        end=this.totalPage
      }else{
        //正常现象 连续页码5总页数大于5
        //起始数字
        start=this.pageNo- Math.floor(this.continues/2);
        //结束数组
        end=this.pageNo+Math.floor(this.continues/2);
        //把出现不正常的现象 start<0
        while (start<=0) {
          start++
          end++
        }
        // end大于总页数
        while(end>this.totalPage) {
          end--
          start--
        }
      }
      return {start,end}
    }
  }
};
</script>

<style lang="less" scoped>
.pagination {
  text-align: center;
  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }

  
  }
   & .active {
      background-color: #409eff;
      color: #fff;
    }
}
</style>