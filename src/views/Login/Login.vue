<template>
  <div id="Login">
    <router-link class="go-back" to="/profile"><i class="iconfont icon-jiantou2"></i></router-link>
    <form id="login-form" @submit.prevent="login">
      <h2>大何外卖</h2>
      <div class="login-toggle">
        <a @click="dispalyMsgPart" :class="{'active': msgOn}" href="javascript:;">短信登录</a>
        <a @click="dispalyPswPart" :class="{'active': !msgOn}" href="javascript:;">密码登录</a>
      </div>
      <div class="login-msg-part" v-if="msgOn">
        <div class="login-msg-phonum  contain-input">
          <input type="text" placeholder="手机号" v-model="phoneNumber" maxlength="11">
          <button 
            :class="{'valid': isValidPhone && !disCountBtn}" 
            :disabled="!isValidPhone || disCountBtn" 
            @click.prevent="getCode"
            >{{countDown>0 ? `已发送(${countDown})` : '获取验证码'}}</button>
        </div>
        <div class="login-msg-verifycode contain-input">
          <input type="text" placeholder="验证码" v-model="code" maxlength="6">
        </div>
        <div class="login-msg-tip">
          <p>温馨提示：未注册大何外卖的账号的手机号，登录时将自动注册，且代表已同意<a href="javascript:;">《用户服务协议》</a></p>
        </div>
      </div>

      <div class="login-password-part" v-else>
        <div class="login-psw-phonum contain-input">
          <input type="text" placeholder="手机/邮箱/用户名" v-model="name">
        </div>
        <div class="login-psw-password contain-input">
          <input :type="passwordType" placeholder="密码" maxlength="8" v-model="pwd">
          <div @click="passwordSwitch" :class="{on: pswOn}" class="login-psw-switcher">
            <div class="switcher-ball-tail"><div class="switcher-ball"></div></div>
          </div>
        </div>
        <div class="login-psw-verifycode  contain-input">
          <input type="text" placeholder="验证码" v-model="captcha" maxlength="4">
          <img src="http://localhost:4000/captcha" @click="changeCaptcha" ref="captchaImg">
        </div>
      </div>
      
      <div class="login-btn">
        <button>登录</button>
        <a href="javascript:;">关于我们</a>
      </div>
    </form>
    <alert-tip :alertText="alertText" @closeTip="closeTip" v-show="tipShowed"></alert-tip>
  </div>
  
</template>

<script>
import AlertTip from 'components/common/AlertTip/AlertTip'
import { reqSendCode, reqSmsLogin, reqPwdLogin} from 'api'

export default {
  name: 'Login',
  data() {
    return {
      msgOn: true,  // 登录方式是否为短信登录
      pswOn: false,  // 密码是否可见的开关状态
      passwordType: 'password',  // 密码是否可见
      phoneNumber: '',  // 手机号
      code: '',   // 手机验证码
      name: '',   // 用户名
      pwd: '',   // 密码
      captcha: '',   // 图形验证码
      countDown: 0,   // 验证码获取倒计时
      disCountBtn: false,
      alertText: '',
      tipShowed: false,
      captchaLink: '',
      loginResult: Object()
    }
  },
  computed: {
    isValidPhone() {
      return /^1\d{10}/.test(this.phoneNumber)
    }
  },
  methods: {
    dispalyMsgPart() {
      this.msgOn = true
    },
    dispalyPswPart() {
      this.msgOn = false
    },
    passwordSwitch() {
      this.pswOn = !this.pswOn
      if(this.passwordType == 'password') {
        this.passwordType = 'text'
      }else {
        this.passwordType = 'password'
      }
    },

    // 异步获取短信验证码
    getCode() {
      // 倒计时
      this.disCountBtn = true
      this.countDown = 30
      this.clock = setInterval(() => {
        --this.countDown
        if(this.countDown <= 0) {
          this.disCountBtn = false
          clearInterval(this.clock)
        }
      }, 1000)
      // 向后台发请求(请求手机验证码)
      reqSendCode(this.phoneNumber)
        .then((result) => {
          if(result.code === 1) {
            // 出错
            // 弹出提示框
            this.showTip(result.msg)
            // 停止计时
            if(this.countDown) {
              this.countDown = 0
              this.disCountBtn = false
              clearInterval(this.clock)
            }
          }
        })
    },

    // 异步登录
    login() {
      // 前台验证数据
      if(this.msgOn) {
        // 短信登录
        const {isValidPhone, phoneNumber, code, handleLoginResult} = this
        if(!isValidPhone) {
          // 手机号格式不对
          this.showTip('请检查手机号是否正确')
        }else if(!(/^\d{6}/).test(code)) {
          // 验证码不是6位数字
          this.showTip('验证码应为6位')
        }
        // 手机号和验证码的格式均正确,则请求短信登录
        reqSmsLogin(phoneNumber, code)
          .then((result) => {
            handleLoginResult(result)
          })
      }else {
        // 密码登录
        const {name, pwd, captcha, handleLoginResult} = this
        if(!name) {
          // 未输入用户名
          this.showTip('请输入用户名')
        }else if(!pwd) {
          // 未输入密码
          this.showTip('请输入密码')
        }else if(!captcha) {
          // 未输入验证码
          this.showTip('请输入验证码')
        }
        // 格式均正确，请求密码登录
        reqPwdLogin(name, pwd, captcha)
          .then((result) => {
            handleLoginResult(result)
          })
      }
      
    },

    // 错误提示框的确认按钮回调
    closeTip() {
      this.alertText = ''
      this.tipShowed = false
    },

    // 弹出错误提示框
    showTip(text) {
      this.alertText = text
      this.tipShowed = true
    },

    // 更换新的验证码
    changeCaptcha() {
      this.$refs.captchaImg.src = "http://localhost:4000/captcha?time=" + Date.now() 
    },

    // 统一处理登录请求的结果
    handleLoginResult(result) {
      // 停止计时
      if(this.countDown) {
        this.countDown = 0
        this.disCountBtn = false
        clearInterval(this.clock)
      }
      if(result.code === 0) {
        const user = result.data
        // 将user保存到vuex中
        // console.log(user);
        this.$store.dispatch('recordUser', user)
        // 登陆成功，跳转到profile路由
        this.$router.replace('./profile')
      }else {
        // 登陆失败，则显示提示框，并更换新的图形验证码
        this.showTip(result.msg)
        this.changeCaptcha()
      }
    }
  },
  components: {
    AlertTip
  }
}
</script>

<style lang="less">
#Login {
  a {
    text-decoration: none;
  }
  .go-back {
    position: absolute;
    top: 10px;
    left: 10px;
    i.icon-jiantou2 {
      font-size: 20px;
      color: #999;
    }
  }

  #login-form {
    width: 80%;
    margin: 60px auto;
    //全局
    input {
      width: 100%;
      border: 1px solid #ddd;
      border-radius: 4px;
      font: 400 14px Arial;
      height: 48px;
      text-indent: 1em;
      box-sizing: border-box;

      &:focus {
        border-color: #02a774;
      }
    }
    div.contain-input {
      margin-top: 16px;
      position: relative;
    }


    //各个部分
    h2 {
      font-size: 40px;
      font-weight: 900;
      color: #02a774;
      text-align: center;
    }

    .login-toggle {
      text-align: center;
      margin-top: 40px;

      a {
        font-size: 14px;
        padding-bottom: 4px;
        color: #333;
        margin: 0 20px;
      }
      .active {
        color: #02a774;
        font-weight: 700;
        border-bottom: 2px solid #02a774;
      }
    }

    .login-msg-part {
      button {
        position: absolute;
        top: 50%;
        // 好用的居中方法
        transform: translateY(-50%);
        right: 10px;
        border: 0;
        color: #ccc;
        font-size: 14px;
        background-color: transparent;

        &.valid {
          color: #333;
        }
      }
      .login-msg-tip {
        & p {
          width: 100%;
          margin-top: 16px;
          font-size: 14px;
          color: #999;
          line-height: 20px;
          text-align: justify;
          text-justify: distribute;
        }
        & a {
          color: #02a774;
        }
      }
    }

    .login-password-part {
      .login-psw-password {
        .login-psw-switcher {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          right: 10px;
          background-color: transparent;

          width: 30px;
          height: 16px;
          transition: all 300ms;
          border: 1px solid #ddd;
          border-radius: 8px;
          padding: 0 6px;
          overflow: hidden;
          
          
          .switcher-ball-tail {
            height: 16px;
            width: 50px;
            position: absolute;
            left: -42px;
            top: 50%;
            transform: translateY(-50%);
            background-color: #02a774;
            transition: all 300ms ;

            .switcher-ball {
              width: 16px;
              height: 16px;
              border: 1px solid #ddd;
              border-radius: 50%;
              box-shadow: 0px 0px 5px #ddd;
              background-color: #fff;
              position: relative;
              left: 41px;
              bottom: 1px;
            }
          }
          &.on {
            .switcher-ball-tail {
              left: -16px;
            }
          }
        }
      }
      .login-psw-verifycode {
        img {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          right: 10px;
          background-color: transparent;
        }
      }
    }
    
    .login-btn {
      margin-top: 30px;

      button {
        width: 100%;
        height: 42px;
        border-radius: 4px;
        color: #fff;
        text-align: center;
        font-size: 16px;
        line-height: 42px;
        border: 0;
        background-color: #4cd96f;
      }
      a {
        display: block;
        font-size: 12px;
        margin-top: 20px;
        text-align: center;
        color: #999;
      }
    }
  }
}
  
  #login-form {
    width: 80%;
    margin: 60px auto;
    //全局
    input {
      width: 100%;
      border: 1px solid #ddd;
      border-radius: 4px;
      font: 400 14px Arial;
      height: 48px;
      text-indent: 1em;
      box-sizing: border-box;

      &:focus {
        border-color: #02a774;
      }
    }
    div.contain-input {
      margin-top: 16px;
      position: relative;
    }


    //各个部分
    h2 {
      font-size: 40px;
      font-weight: 900;
      color: #02a774;
      text-align: center;
    }

    .login-toggle {
      text-align: center;
      margin-top: 40px;

      a {
        font-size: 14px;
        padding-bottom: 4px;
        color: #333;
        margin: 0 20px;
      }
      .active {
        color: #02a774;
        font-weight: 700;
        border-bottom: 2px solid #02a774;
      }
    }

    .login-msg-part {
      button {
        position: absolute;
        top: 50%;
        // 好用的居中方法
        transform: translateY(-50%);
        right: 10px;
        border: 0;
        color: #ccc;
        font-size: 14px;
        background-color: transparent;
      }
      .login-msg-tip {
        & p {
          width: 100%;
          margin-top: 16px;
          font-size: 14px;
          color: #999;
          line-height: 20px;
          text-align: justify;
          text-justify: distribute;
        }
        & a {
          color: #02a774;
        }
      }
    }

    .login-password-part {
      .login-psw-password {
        .login-psw-switcher {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          right: 10px;
          background-color: transparent;

          width: 30px;
          height: 16px;
          transition: all 300ms;
          border: 1px solid #ddd;
          border-radius: 8px;
          padding: 0 6px;
          overflow: hidden;
          
          
          .switcher-ball-tail {
            height: 16px;
            width: 50px;
            position: absolute;
            left: -42px;
            top: 50%;
            transform: translateY(-50%);
            background-color: #02a774;
            transition: all 300ms ;

            .switcher-ball {
              width: 16px;
              height: 16px;
              border: 1px solid #ddd;
              border-radius: 50%;
              box-shadow: 0px 0px 5px #ddd;
              background-color: #fff;
              position: relative;
              left: 41px;
              bottom: 1px;
            }
          }
          &.on {
            .switcher-ball-tail {
              left: -16px;
            }
          }
        }
      }
      .login-psw-verifycode {
        img {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          right: 10px;
          background-color: transparent;
        }
      }
    }
    
    .login-btn {
      margin-top: 30px;

      button {
        width: 100%;
        height: 42px;
        border-radius: 4px;
        color: #fff;
        text-align: center;
        font-size: 16px;
        line-height: 42px;
        border: 0;
        background-color: #4cd96f;
      }
      a {
        display: block;
        font-size: 12px;
        margin-top: 20px;
        text-align: center;
        color: #999;
      }
    }

    
  }
</style>
