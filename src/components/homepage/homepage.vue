<template>
  <div class="_homepage">
    <el-container class="el-container ycy-container is-vertical">
      <v-Header></v-Header>
      <el-container class="el-container">
        <v-Aside></v-Aside>
        <el-container class="el-container is-vertical">
          <el-main class="el-main">Main</el-main>
          <v-Footer></v-Footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

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
    vHeader,
  }
};
</script>

<style lang="scss">
@import "../../../static/theme/theme-red/index.css";
._homepage {
  .el-container {
    &.ycy-container {
      height: 100vh;
    }
  }
}
</style>
