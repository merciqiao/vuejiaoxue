<template>
  <el-header class="_header">
    <el-menu
      class="el-menu-demo left"
      mode="horizontal"
      text-color="#fff"
      background-color="#409EFF"
    >
      <el-menu-item>
        <i class="el-icon-menu collapse-btn white"></i>
      </el-menu-item>
      <el-menu-item class="title nohover">后台管理系统</el-menu-item>
    </el-menu>

    <el-menu
      class="el-menu-demo right"
      mode="horizontal"
      text-color="#fff"
      background-color="#409EFF"
    >
      <el-menu-item class="font nohover">管理员</el-menu-item>
      <el-menu-item>
        <i class="el-icon-rank fullscreen white"></i>
      </el-menu-item>
      <el-menu-item>
        <i class="el-icon-bell white"></i>
      </el-menu-item>
        <el-dropdown class="white font" trigger="click">
          <span class="el-dropdown-link">
            超超越越
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>黄金糕</el-dropdown-item>
            <el-dropdown-item>狮子头</el-dropdown-item>
            <el-dropdown-item>螺蛳粉</el-dropdown-item>
            <el-dropdown-item disabled>双皮奶</el-dropdown-item>
            <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
    </el-menu>
  </el-header>
</template>
<style lang="scss">
._header {
  padding: 0px;
  background-color: #409eff;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  color: white;
  .white {
    color: white;
  }
  .nohover {
    pointer-events: none; //禁用hover
  }
  .left {
    border:0;
    .collapse-btn:hover {
      background-color: #337ecc;
    }
    .title {
      font-size: 18px;
    }
  }
  .right {
    border:0;
    display: flex;
    align-items: center;
    .font {
      font-size: 16px;
    }
    .fullscreen {
      transform: rotate(45deg); //旋转45度
      font-size: 22px;
    }
    .el-dropdown-link{
      cursor: pointer;
    }
  }
}
</style>
