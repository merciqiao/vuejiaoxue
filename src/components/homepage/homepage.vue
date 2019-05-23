<template>
  <div class="_homepage_dev">
    <el-container class="el-container ycy-container">
      <el-header class="el-header">Header</el-header>
      <el-container class="el-container">
        <!-- <el-aside class="el-aside">Aside</el-aside> -->
        <v-Aside class="el-aside"></v-Aside>
        <el-container class="el-container">
          <el-main class="el-main">Main</el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import vAside from './aside.vue';
export default {
    data() {
        return {
            
        }
    },
    components:{
        vAside
    }
}
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
._homepage_dev {
  border: 1px solid red;
  .el-container {
    &.ycy-container {
      height: 100vh;
    }
    .el-header {
      border: 1px solid green;
    }
    .el-container {
      .el-aside {
        border: 1px solid orange;
        width:300px;
      }
      .el-container {
        .el-main {
          border: 1px solid chartreuse;
        }
        .el-footer {
          border: 1px solid chocolate;
        }
      }
    }
  }
}
</style>
