<template>
  <div id="Login">
    <router-link class="go-back" to="/profile"><i class="iconfont icon-jiantou2"></i></router-link>
    <form id="login-form">
      <h2>大何外卖</h2>
      <div class="login-toggle">
        <a @click="dispalyMsgPart" :class="{'active': msgOn}" href="javascript:;">短信登录</a>
        <a @click="dispalyPswPart" :class="{'active': !msgOn}" href="javascript:;">密码登录</a>
      </div>

      <div class="login-msg-part" v-if="msgOn">
        <div class="login-msg-phonum  contain-input">
          <input type="text" placeholder="手机号">
          <button>获取验证码</button>
        </div>
        <div class="login-msg-verifycode contain-input">
          <input type="text" placeholder="验证码">
        </div>
        <div class="login-msg-tip">
          <p>温馨提示：未注册大何外卖的账号的手机号，登录时将自动注册，且代表已同意<a href="javascript:;">《用户服务协议》</a></p>
        </div>
      </div>

      <div class="login-password-part" v-else>
        <div class="login-psw-phonum contain-input">
          <input type="text" placeholder="手机/邮箱/用户名">
        </div>
        <div class="login-psw-password contain-input">
          <input :type="passwordType" placeholder="密码">
          <div @click="passwordSwitch" :class="{on: pswOn}" class="login-psw-switcher">
            <div class="switcher-ball-tail"><div class="switcher-ball"></div></div>
          </div>
        </div>
        <div class="login-psw-verifycode  contain-input">
          <input type="text" placeholder="验证码">
          <img src="/vcode/captcha.svg">
        </div>
      </div>
      
      <div class="login-btn">
        <button>登录</button>
        <a href="javascript:;">关于我们</a>
      </div>
    </form>
  </div>
  
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      msgOn: true,
      pswOn: false,
      passwordType: 'password'
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
    }
  },
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
