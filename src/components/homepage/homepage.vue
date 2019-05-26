<template>
  <div class="_homepage">
    <!-- <el-container class="el-container ycy-container is-vertical">
      <v-Header></v-Header>
      <el-container class="el-container">
        <v-Aside></v-Aside>
        <el-container class="el-container is-vertical">
          
          <el-main class="el-main">
            <router-view></router-view>
          </el-main>
          <v-Footer></v-Footer>
        </el-container>
      </el-container>
    </el-container> -->
    <section class="headContainer">
      <v-Header></v-Header>
      <section class="asideContainer">
        <v-Aside class="aside"></v-Aside>
        <section class="tagContainer">
          <v-Tag></v-Tag>
          <div class="mainContainer">
             <main class="main">
              <router-view></router-view>
            </main>
            <v-Footer class="footer"></v-Footer>
          </div>
        </section>
      </section>
    </section>
  </div>
</template>

<script>
import vAside from "./aside.vue";
import vFooter from "./footer.vue";
import vHeader from "./header.vue";
import vTag from "./tag.vue";
export default {
  data() {
    return {};
  },
  components: {
    vAside,
    vFooter,
    vHeader,
    vTag
  }
};
</script>

<style lang="scss">
@import "../../../static/theme/theme-blue/index.css";
._homepage {
  .ycy-container {
    height: 100vh;
    .el-main {
      height: calc(100vh - 120px);
      overflow: auto;
    }
  }
  .headContainer {
    height: 100vh;
    display: flex;
    flex-flow: column nowrap;
    .asideContainer {
      display: flex;
      flex-flow:row nowrap;
      flex:auto;
      .aside{
        flex:none;
      }
      .tagContainer{
        // border:1px solid blue;
        flex:auto;
        display: flex;
        flex-flow:column nowrap;
        min-width:0;//保证内容不会超出外层容器
        // overflow: auto;
        .mainContainer{
          // border:1px solid red;
          background-color: #F0F0F0;//灰色背景
          flex:auto;
          display: flex;
          flex-flow: column nowrap;
          box-sizing: border-box;
          height: calc(100vh - 100px);
          overflow: auto;
          padding:10px;
          .main{
            // border:1px solid green;
            flex:auto;
            background-color: white;
            box-sizing: border-box;
            padding:10px;
          }
          .footer{
           flex:0 0 60px;
          }
        }
        
      }
    }
  }
}
</style>


