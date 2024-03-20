<template>
 <div>
    <div class="login-container">
    <el-card shadow="never" class="login-form">
      <el-form :model="form" ref="refform"  >
        <div class="login_sign">
            <h2>Sign Up</h2>
        <span>Already have an account? </span>
        <el-button link type="primary" @click="$router.push('/login')">Sign In here</el-button>
        </div>
        <el-form-item label="Username" :style="{ display: 'block',marginBottom:'10px' }">
          <el-input placeholder="Username" v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="Email Address" :style="{ display: 'block',marginBottom:'10px' }">
          <el-input placeholder="A confirmation code will be sent to this address" v-model="form.Address"></el-input>
        </el-form-item>
        <el-form-item label="Confirm Email Address" :style="{ display: 'block',marginBottom:'10px' }">
          <el-input placeholder="Re-enter your email address" v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="Password" :style="{ display: 'block',marginBottom:'10px' }">
          <el-input type="password" placeholder="**********"  v-model="form.password" show-password>
            <!-- <template #suffix>
            <el-button text :icon="passwordType === 'password' ? 'View' : 'Hide'" 
                        @click="handlePasswordView"></el-button>
           </template> -->
          </el-input>
        </el-form-item>
        <el-form-item label="Confirm Password" :style="{ display: 'block',marginBottom:'10px' }">
          <el-input type="password" placeholder="**********"  v-model="form.password" show-password>
            <!-- <template #suffix>
            <el-button text :icon="passwordType === 'password' ? 'View' : 'Hide'" 
                        @click="handlePasswordView"></el-button>
           </template> -->
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-checkbox v-model="rememberMe">I agree to the Terms and Conditions.</el-checkbox>
        </el-form-item>
        <el-form-item >
          <el-form-item>
          <el-checkbox v-model="rememberMe">I would like to receive the BscScan newsletter and <br>understand that I can unsubscribe at any time.</el-checkbox>
        </el-form-item >
          <el-button class="login_login" type="primary" @click="handleSubmit">Create an Account</el-button>
        </el-form-item>
      </el-form>
      <!-- <el-row justify="center">
        <el-button :link="true" @click="handleSignUp">Don't have an account? Sign Up</el-button>
      </el-row> -->
      <!-- <el-row justify="center">
        <el-button :link="true" @click="handleCaptcha">进行人机身份验证</el-button>
      </el-row> -->
    </el-card>
  </div>
 </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
 const form = reactive({
      username: '',
      password: ''
    })
    const refform = ref(form)
    const passwordType = ref('password');
    const rememberMe = ref(false)
    const captcha = ref('')
    function handleSubmit() {
      // handle login logic here
    }

    function handleForgotPassword() {
      // handle forgot password logic here
    }

    function handleSignUp() {
      // handle sign up logic here
    }

    function handleCaptcha() {
      // handle captcha logic here
    }
    function handlePasswordView() {
  passwordType.value = passwordType.value === 'password' ? 'text' : 'password';
}
</script>

<style scoped>
.login-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70vh;
}
.login-form {
  width: 400px;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.login_sign{
    text-align: center;
    margin-bottom: 1.5rem;
}
.login_sign span{
    color: #6c757d;
}
.login_login{
    width: 100%;
    height: 5vh;
    border-radius: 10px;
    margin-top: .625rem;
}

</style>