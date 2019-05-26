<template>
  <div class="_tag">
    <el-tag v-for="tag in tags" :key="tag.name" closable :type="tag.type">{{tag.name}}</el-tag>
  </div>
</template>
<style lang="scss">
._tag{
    flex:0 0 40px;
    display: flex;
    align-items: center;
    background-color: white;
    .el-tag{
      margin-left:6px;
    }
}
</style>

<script>
export default {
  data() {
    return {
      tags: [
        { name: "标签一", type: "" },
        { name: "标签二", type: "" },
        { name: "标签三", type: "" },
        { name: "标签四", type: "" },
        { name: "标签五", type: "" }
      ]
    };
  }
};
</script>