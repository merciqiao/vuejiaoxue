<template>
  <el-header class="_header">
    <div class="left">
      <ul>
        <li class="collapse-btn" @click="navChangeShow">
          <i  class="el-icon-menu "></i>
        </li>
        <li class="nohover">后台管理系统</li>
      </ul>
    </div>
    <div class="right">
      <ul>
        <li class="nohover">管理员</li>
        <li><i class="el-icon-rank fullscreen"></i></li>
        <li><i class="el-icon-bell notice"></i></li>
        <li>
          <el-dropdown class="white font" trigger="click" placement="bottom">
          <span class="el-dropdown-link">
            超超越越
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>关于作者</el-dropdown-item>
            <el-dropdown-item>Git地址</el-dropdown-item>
            <el-dropdown-item divided>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        </li>
      </ul>
    </div>

  </el-header>
</template>
<script>
import bus from '../common/bus';
export default {
  data() {
    return {
      navShow:false,//左侧导航是否折叠
    }
  },
  methods: {
    navChangeShow(){//切换左侧导航展示/折叠
  
      this.navShow=!this.navShow;
      bus.$emit("navShowChange",this.navShow);
    }
  },
}
</script>

<style lang="scss">
._header {
  padding: 0px;
  background-color: #409eff;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  color: white;
  ul{
    list-style: none;  
    li{
      float: left;  
      line-height: 60px;
      height:60px;
      text-align: center;
      padding:0 10px;
    }
    li:hover{
      background-color: #337ecc;
      cursor: pointer;
    }
    i{
      line-height: 60px;
    }
  }
  .nohover {
    pointer-events: none; //禁用hover
  }
  .left {
    .collapse-btn {
      width:45px;
    }
    .title {
      font-size: 18px;
    }
  }
  .right {
    margin-right:60px;
    .fullscreen {
      transform: rotate(45deg); //旋转45度
      font-size: 22px;
      width:40px;
    }
    .notice{
      width:40px;
    }
    .el-dropdown-link{
      color:white;
      padding:22px 0px;
    }
  }
}
</style>
