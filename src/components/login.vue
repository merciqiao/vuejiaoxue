<template>
  <!--login外框-->
  <div class="_login">
    <!--login内框-->
    <div class="login_inner">
      <el-form class="form" ref="form" :model="formLogin">
        <el-form-item>
          <h2 class="title">知识库管理系统</h2>
        </el-form-item>
        <el-form-item>
          <el-input v-model="formLogin.loginName" placeholder="账号"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="formLogin.password" placeholder="密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login">登陆</el-button>
          <div v-show="this.errorInfo.isShowError" class="error">{{this.errorInfo.text}}</div>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<style lang="scss">
._login {
  // border:1px solid red;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .login_inner {
    // border:1px solid green;
    width: 460px;
    height: 300px;
    margin-top: -150px;
    display: flex;
    justify-content: center;
    box-shadow: 0 0 25px #cac6c6;
    .form {
      // border:1px solid blue;
      width: 300px;
      margin-top: 30px;
      text-align: center;
      .title {
        color: #505458;
      }
    }
    .error {
      color: red;
    }
  }
}
</style>
<script>
export default {
  name: "login",
  data() {
    return {
      formLogin: {
        loginName: "admin",
        password: "123456"
      },
      errorInfo: {
        text: "登陆失败,请重试",
        isShowError: false //显示错误提示
      }
    };
  },
  methods: {
    login() {
      var param = {
        loginName: this.formLogin.loginName,
        password: this.formLogin.password
      };
      this.$http
        .post("/api/shiro-api/login", param)
        .then(response => {
          console.log("成功报文:", response);
          var json = response.data;
          if (json.status == "SUCCESS") {
            //报错日志
            var loginLog = {
              ip: returnCitySN["cip"],
              city: returnCitySN["cname"],
              type: "登陆教学版"
            };
            this.$http.post('/api/loginlog-api/save', loginLog);

            //保存登陆信息
            var userInfo = json.data.userInfo;
            sessionStorage.setItem("userName", userInfo.userName); //用户名
            sessionStorage.setItem("token", userInfo.token); //保存秘钥
            var sysRoleVoList = json.data.sysRoleVoList;
            var position = "";
            for (var i = 0; i < sysRoleVoList.length; i++) {
              var item = sysRoleVoList[i];
              if (position == "") {
                position += item.roleName;
              } else {
                position += "|" + item.roleName;
              }
            }
            sessionStorage.setItem("position", position); //用户职位
            //登陆成功跳转主页
            this.$router.replace({ path: "/index" });
          } else {
            this.errorInfo.isShowError = true;
            this.errorInfo.text = json.message;
          }
        })
        .catch(error => {
          console.log("失败报文:", error);
          this.errorInfo.isShowError = true;
          this.errorInfo.text = "系统接口异常";
        });
    }
  }
};
</script>