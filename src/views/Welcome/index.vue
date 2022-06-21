<template>
  <div class="welcome">
    
    <div class="Ellipse"></div>
   
    <div class="Ellipse2"></div>
     
    <span class="tiaoguo">
      <router-link to="/home">跳过>></router-link>
    </span>
    <span class="welcometitle"><p>welcome</p></span>
   
    <div class="svg"></div>
    
    <span
      class="button"
      @click="
        $router.push({
          name: 'login',
        })
      "
      ><a>登录</a></span
    >
    <span
      class="button"
      @click="
        $router.push({
          name: 'register',
        })
      "
    >
      <a>注册</a></span
    >

  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.welcome {
  overflow-x: hidden;
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  .Ellipse {
    /* Ellipse 1 */
    position: absolute;
    left: -20%;
    top: -4%;
    width: 48%;
    height: 20%;
    border-radius: 50%;
    transform: rotate(107.69deg);
    background: linear-gradient(
      155deg,
      #92e1d3 25%,
      #92e1d3 25%,
      rgba(226, 226, 226, 0) 90%,
      rgba(226, 226, 226, 0) 90%
    );
  }
  .Ellipse2 {
    position: absolute;
    left: -35%;
    bottom: -13%;
    border-radius: 50%;
    width: 48%;
    height: 20%;
    transform: rotate(107.69deg);
    background: rgba(87, 204, 183, 0.2);
  }
  .tiaoguo {
    position: absolute;
    right: 3%;
    top: 2%;
    width: 15%;
    height: 5%;
    font-family: Inter-SemiBold;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: -0.8px;
    color: #3d3d3d;
  }
  .welcometitle {
    width: 49%;
    height: 18%;
    transform: translateY(18%);
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      font-family: RobotoRoman-Medium;
      font-size: 48px;
      font-weight: normal;

      letter-spacing: 0px;
      color: #000000;
    }
  }
  .svg {
    
    width: 100%;
    height: 50%;
    background: url(./images/svg1.svg) no-repeat;
  }
  .buttonclass {
    //  flex: 1;
    width: 100%;
    background: #3d3d3d;
  }
  .button:nth-last-child(1) {
    background: rgba(112, 11, 239, 0.3);
  }
  .button {
    width: 90%;
    height: 8%;
    border-radius: 30px;
    background: #6f0bef;
    display: flex;
    justify-content: center;
    align-items: center;
    a {
      font-family: Roboto-Regular;
      font-size: 23px;
      font-weight: normal;
      letter-spacing: 0px;
      color: #ffffff;
    }
  }
}
</style>