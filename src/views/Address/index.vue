<template>
  <div class="address">
    <Backtop />
    <AddressEdit />
  </div>
</template>

<script>
// import CityData from "@/units/app";
export default {
  name: "Address",
  data() {
    return {
      //   areaList: CityData,
    };
  },
};
</script>

<style lang="less" scoped>
.address {
  flex: 1;
}
</style>