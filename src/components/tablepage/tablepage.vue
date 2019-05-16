<template>
  <div class="_tablepage">
    <!--表格 start-->
    <el-table :data="tableData" border style="width: 100%" align="center">
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="name" label="昵称" width="180" align="center"></el-table-column>
      <el-table-column prop="city" label="城市" width="180"></el-table-column>
      <el-table-column prop="type" label="类别" :formatter="format_type"></el-table-column>
      <el-table-column prop="age" label="年龄"></el-table-column>
      <el-table-column prop="gender" label="性别" width="180" :formatter="format_gender"></el-table-column>
      <el-table-column prop="createtime" label="创建日期" :formatter="format_date"></el-table-column>
      <el-table-column prop="updatetime" label="更新日期" :formatter="format_date"></el-table-column>
    </el-table>
    <!--表格 end-->

    <!--分页 start-->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pageInfo.currentPage"
      :page-sizes="[5, 10, 50, 100]"
      :page-size="pageInfo.pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="pageInfo.pageTotal"
    ></el-pagination>

    <!--分页 end-->
  </div>
</template>
<script>
export default {
  name: "tablepage",
  data() {
    return {
        pageInfo: { //分页
                currentPage: 1,
                pageSize: 5,
                pageTotal: 80
       },
      tableData: [
        {
          name: "张三",
          city: "北京",
          type: "1",
          age: 18,
          gender: 1,
          qq: 123444,
          createtime: 1546587784000,
          updatetime: 1546587784000
        },
        {
          name: "李四",
          city: "上海",
          type: "2",
          age: 19,
          gender: 0,
          qq: 555,
          createtime: 1546587784000,
          updatetime: 1546587784000
        }
      ]
    };
  },
  methods: {
    format_type(row, column) {
      //类别转换
      var type = row[column.property];
      if (type == 1) {
        return "留言";
      } else if (type == 2) {
        return "建议";
      } else if (type == 3) {
        return "BUG";
      } else {
        return "";
      }
    },
    format_gender(row, column) {
      var gender = row[column.property];
      if (gender == 1) {
        return "男";
      } else if (gender == 0) {
        return "女";
      } else {
        return "";
      }
    },
    format_date(row, column) {
      var date = row[column.property];
      if (date == undefined) {
        return "";
      }
      return this.$moment(date).format("YYYY-MM-DD HH:mm:ss");
    },
    handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
    }

  }
};
</script>

