<template>
  <div class="_homepage">
    <el-container class="el-container ycy-container is-vertical">
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
    </el-container>
    <!-- <section class="headContainer">
      <v-Header></v-Header>
      <section class="asideContainer">
        <v-Aside></v-Aside>
        <section class="mainContainer">
          <main class="main">
            <router-view></router-view>
          </main>
          <v-Footer class="footer"></v-Footer>
        </section>
      </section>
    </section> -->
  </div>
</template>
<style lang="scss">
@import "../../../static/theme/theme-red/index.css";
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
      .mainContainer{
        display: flex;
        flex-flow:column nowrap;
        .main{
          flex:auto;
          height:calc(100vh - 120px);
          overflow: auto;
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
</style>




<script>
import vAside from "./aside.vue";
import vFooter from "./footer.vue";
import vHeader from "./header.vue";
export default {
  data() {
    return {};
  },
  components: {
    vAside,
    vFooter,
    vHeader
  }
};
</script>


