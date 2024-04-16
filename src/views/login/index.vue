<template>
  <div>
    <div class="login-container">
      <el-card shadow="never" class="login-form">
        <el-form :model="form" ref="formRef" label-width="auto">
          <div class="login_sign">
            <h2>Sign In</h2>
            <span>Don't have an account?</span>
            <el-button link type="primary" @click="$router.push('/register')">Sign Up</el-button>
          </div>
          {{ form.value }}
          <el-form-item label="Username" :style="{ display: 'block', marginBottom: '10px' }">
            <el-input type="text" placeholder="e.g.johndoe" v-model="form.username"></el-input>
          </el-form-item>
          <el-form-item label="Password" :style="{ display: 'block', marginBottom: '10px' }">
            <el-input type="password" placeholder="**********" v-model="form.password" show-password>
              <!-- <template #suffix>
            <el-button text :icon="passwordType === 'password' ? 'View' : 'Hide'" 
                        @click="handlePasswordView"></el-button>
           </template> -->
            </el-input>
          </el-form-item>
          <el-row style="margin-bottom:1.31rem">
            <el-button :link="true" type="info" @click="handleForgotPassword">Forgot your password?</el-button>
          </el-row>
          <el-form-item>
            <el-checkbox v-model="rememberMe">Remember & Auto Login</el-checkbox>
          </el-form-item>
          <el-form-item>
            <el-button :loading="loading" class="login_login" type="primary" @click="handleSubmit">LOGIN</el-button>
          </el-form-item>
        </el-form>
        <!-- <el-row justify="center">
        <el-button :link="true" @click="handleSignUp">Don't have an account? Sign Up</el-button>
      </el-row> -->
        <!-- <el-row justify="center">
        <el-button :link="true" @click="handleCaptcha">Perform man-machine authentication</el-button>
      </el-row> -->
      </el-card>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useUserStore } from '@/store/modules/user'
import { useRouter } from 'vue-router';
import { ElNotification  } from 'element-plus'
let useStore = useUserStore();
const form = reactive({
  username: '',
  password: ''
})
const formRef = ref(form);
const loading = ref(false);
const input = ref('')
const passwordType = ref('password');
const rememberMe = ref(false)
const captcha = ref('')
let $router = useRouter();


const handleSubmit = async () => {

  loading.value = true;
  try {
    await useStore.userLogin(form)
    $router.push('/home')
    ElNotification({
      title: 'Success',
      message: 'Login Successfully',
      type: 'success',
    })
    loading.value = false;
  } catch (error) {
    loading.value = false;
    ElNotification({
      title: 'error',
      message: error.message,
      type: 'error',
    })
  }
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

.login_sign {
  text-align: center;
  margin-bottom: 1.5rem;
}

.login_sign span {
  color: #6c757d;
}

.login_login {
  width: 100%;
  height: 5vh;
  border-radius: 10px;
}
</style>