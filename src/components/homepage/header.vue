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
      <el-menu-item class="title nohover">
          后台管理系统
      </el-menu-item>
    </el-menu>

    <el-menu
      class="el-menu-demo right"
      mode="horizontal"
      text-color="#fff"
      background-color="#409EFF"
    >
      <el-menu-item class="font nohover">管理员</el-menu-item>
      <el-menu-item >
          <i class="el-icon-rank fullscreen white"></i>
      </el-menu-item>
      <el-menu-item>
          <i class="el-icon-bell white"></i>
      </el-menu-item>
      <el-menu-item class="font nohover">张三</el-menu-item>
    </el-menu>
  </el-header>
</template>
<style lang="scss">
._header {
  padding: 0px;
  background-color: #409EFF;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  color: white;
  .white{
      color:white;
  }
  .nohover{
      pointer-events:none;//禁用hover
  }
  .left{
      .collapse-btn:hover{
          background-color: #337ECC;
      }
      .title{
          font-size: 18px;
      }
  }
  .right{
      .font{
          font-size: 16px;
      }
      .fullscreen{
          transform: rotate(45deg);//旋转45度
          font-size:22px;
      } 
  }
}
</style>
