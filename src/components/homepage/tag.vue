<template>
  <div class="_tag">
    <div class="left">
      <el-tag
        v-for="tag in tagsList"
        :key="tag.title"
        :closable="!tag.hideclose"
        :type="isActive(tag)"
        @close="handleCloseTag(tag)"
      >
        <router-link :to="tag.path" class="tag-title">{{tag.title}}</router-link>
      </el-tag>
    </div>

    <div class="right">
      <el-dropdown trigger="click">
        <el-button type="primary" size="small">
          更多菜单
          <i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>关闭其它</el-dropdown-item>
          <el-dropdown-item>关闭所有</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>
<style lang="scss">
._tag {
  flex: 0 0 40px;
  display: flex;
  align-items: center;
  background-color: white;
  border-bottom: 1px solid #e6e6e6;
  justify-content: space-between;
  .left {
    display: flex;
    flex-flow:row nowrap;
    .el-tag {
      margin-left: 6px;
      .tag-title {
        color: black;
        line-height: 32px;
        padding: 8px 2px;
      }
    }
  }

  .right {
    height: 40px;
    display: flex;
    align-items: center;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.1) -3px 0px 15px 3px;
    padding: 0 5px;
  }
}
</style>

<script>
export default {
  data() {
    return {
      tagsList: []
    };
  },
  mounted() {
    this.setTags(this.$route);
  },
  methods: {
    //设置标签
    setTags(route) {
      const isExsit = this.tagsList.some(item => {
        return item.path === route.fullPath;
      });
      !isExsit &&
        this.tagsList.push({
          title: route.meta.title, //标签名
          name: route.name, //路由里的name对应vue页的name,标签列表里的name可以做vue页面缓存
          path: route.fullPath, //路由
          hideclose: route.meta.hideclose ? route.meta.hideclose : false //是否隐藏关闭
        });
    },
    //关闭标签
    handleCloseTag(tag) {
      this.tagsList.splice(this.tagsList.indexOf(tag), 1);
      if (this.tagsList.length > 0) {
        this.$router.push(this.tagsList[this.tagsList.length - 1].path);
      } else {
        this.$router.push("/index");
      }
    },
    handleClick(tag) {
      this.$router.push(tag.fullPath);
    },
    //是否选中
    isActive(tag) {
      if (tag.path == this.$route.fullPath) {
        return "";
      } else {
        return "info";
      }
    }
  },
  watch: {
    //路由变化,设置标签
    $route(newValue, oldValue) {
      this.setTags(newValue);
    }
  }
};
</script>