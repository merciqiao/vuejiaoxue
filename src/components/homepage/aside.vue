<template>
  <!-- 没用el-aside因为自带300宽度 -->
  <div class="_aside">
    <el-menu
      :default-active="onRoutes"
      :collapse="navShow"
      class="el-menu-vertical-demo menu"
      unique-opened
      router
    >
      <el-submenu v-for="(menu_one,i) in menuData" :key="i" :index="menu_one.path">
        <template slot="title">
          <i :class="menu_one.icon"></i>
          <span>{{menu_one.title}}</span>
        </template>
        <template v-if="menu_one.subs&&menu_one.subs.length">
          <el-menu-item v-for="(menu_two,i) in menu_one.subs" :key="i" :index="menu_two.path">
            <i :class="menu_two.icon"></i>
            <span>{{menu_two.title}}</span>
          </el-menu-item>
        </template>
      </el-submenu>
    </el-menu>
  </div>
</template>
<style lang="scss">
._aside {
  .menu {
    height: 100%;
  }
  .menu:not(.el-menu--collapse) {
    //设置才可以有折叠特效
    width: 300px;
  }
}
</style>

<script>
import bus from "../common/bus";
export default {
  data() {
    return {
      navShow: false, //导航是否折叠
      menuData: [
        {
          icon: "el-icon-star-on",
          path: "p_home",
          title: "系统首页",
          subs: [
            {
              path: "index",
              title: "系统首页",
              icon: "el-icon-document"
            },
            {
              path: "test01",
              title: "test01页",
              icon: "el-icon-document"
            }
          ]
        },
        {
          icon: "el-icon-tickets",
          path: "p_tablepage",
          title: "列表管理",
          subs: [
            {
              path: "tablepage",
              title: "列表管理",
              icon: "el-icon-document"
            }
          ]
        }
      ]
    };
  },
  created() {
    bus.$on("navShowChange", navShow => {
      this.navShow = navShow;
    });
  },
  mounted(){
    // debugger;
  },
  methods: {},
  computed: {
    onRoutes() {
      //监听路由,设置默认激活项目
      return this.$route.path.replace("/", "");
    }
  }
};
</script>