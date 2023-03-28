<template>
  <div class="container">
    <el-button type="text" v-if="!isLogin" @click="toLogin">登录</el-button>
    <el-button type="text" v-if="!isLogin" @click="toRegister">注册</el-button>
    <el-dropdown v-if="isLogin" @command="toOrder">
      <el-button type="text" style="height: 100%;">欢迎， {{ username }}</el-button>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="inspection-record">产检查询</el-dropdown-item>
        <el-dropdown-item command="data-record">孕期数据记录</el-dropdown-item>
        <el-dropdown-item command="order">我的订单</el-dropdown-item>
        <el-dropdown-item command="logout">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>


    <el-dialog :visible.sync="visible" title="登录" :center="true" :close-on-click-modal="false" :destroy-on-close="true">
      <el-form :model="form" :rules="rules">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="form.username" placeholder="请输入用户名/手机号/邮箱"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="form.password" show-password placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-button class="register-btn" type="text" @click="register">还没账号？立即注册</el-button>
        <el-button class="login-btn" type="primary" @click="login">登录</el-button>
      </el-form>
    </el-dialog>

    <el-dialog :visible.sync="registerVisible" title="注册" :center="true" :close-on-click-modal="false" :destroy-on-close="true">
      <el-form :model="registerForm" :rules="registerRules">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="registerForm.username" placeholder="请输入用户名" maxlength="10"></el-input>
        </el-form-item>
        <el-form-item label="手机号">
          <el-input v-model="registerForm.phone" placeholder="请输入手机号" maxlength="10"></el-input>
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input v-model="registerForm.email" placeholder="请输入邮箱" maxlength="10"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="registerForm.password" show-password placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item label="再次输入密码" prop="confirmPassword">
          <el-input v-model="registerForm.confirmPassword" show-password placeholder="请再次输入密码"></el-input>
        </el-form-item>
        <el-button class="login-btn" type="primary" @click="register">注册</el-button>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "User",
  data() {
    return {
      isLogin: false,
      visible: false,
      registerVisible: false,
      username: '',
      form: {
        username: '',
        password: ''
      },
      rules: {
        username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      },
      registerForm: {
        username: '',
        phone: '',
        email: '',
        password: '',
        confirmPassword: ''
      },
      registerRules: {
        username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
        confirmPassword: [{ required: true, message: '请再次输入确认密码', trigger: 'blur' }]
      }
    };
  },
  methods: {
    toLogin() {
      this.visible = true;
    },
    toRegister() {
      this.registerVisible = true;
    },
    login() {
      this.username = this.form.username;
      this.visible = false;
      this.isLogin = true;
    },
    register() {
      this.registerVisible = false;
      this.visible = true;
    },
    toOrder(command) {
      if (command === 'logout') {
        this.isLogin = false;
        this.$router.push('/home');
      }
      command === 'order' && this.$router.push('/order');
      command === 'inspection-record' && this.$router.push('/inspection-record');
      command === 'data-record' && this.$router.push('/data-record');
    }
  }
}
</script>

<style scoped>
.container {
  height: 60px;
  display: flex;
  align-items: stretch;
}

.container > .el-button {
  padding: 0 15px;
  color: #fff;
}
.container > .el-button:hover {
  background: #e539ba;
}

.register-btn {
  float: right;
}

.login-btn {
  margin-top: 10px;
  width: 100%;
}

</style>