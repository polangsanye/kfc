<template>
    <div class="login-wrap">
        <div class="menu-title">
            <p>登录</p>
        </div>
        <div class="user-wrap">
            <div class="user-icon"><img src="./icon_avatar.png" width="73"></div>
            <p>请登入您的账户</p>
            <div class="user-data">
                <ul>
                    <li>
                        <span>账号：</span>
                        <input type="text" v-model="user.name">
                    </li>
                    <li>
                        <span>密码：</span>
                        <input type="text" v-model="user.psd">
                    </li>
                </ul>
            </div>
            <div class="button-wrap">
                <button @click="login">登录</button>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        user: {
          name: '芝芝',
          psd: 123456
        }
      }
    },
    methods: {
      login() {
        sessionStorage.setItem('user', JSON.stringify(this.user))
        this.$router.push({path: '/'})
      }
    }

  }
</script>

<style lang="less" rel="stylesheet/less">
    .login-wrap {
        background: #fff;
        font-size: 20px;
        position: absolute;
        overflow: hidden;
        width: 100%;
        top: 0;
        bottom: 0;
        z-index: 10;
        .menu-title {
            height: 44px;
            position: relative;
            background-color: #FFF;
            padding: 0 32px;
            p {
                width: 100%;
                height: 44px;
                line-height: 44px;
                color: #e32d39;
                font-size: 17px;
                text-align: center;
                font-weight: 700;
                overflow: hidden;
            }
        }
        .user-wrap {
            padding: 0 20px;
            text-align: center;
            .user-icon {
                margin: 20px 0 30px;
            }
            p {
                font-size: 16px;
            }
            .user-data {
                li {
                    display: flex;
                    margin-top: 20px;
                    align-items: center;
                    justify-content: center;
                    span {
                        flex: 0 0 70px;
                        width: 50px;
                        font-size: 20px;
                    }
                    input {
                        flex: 1;
                        outline: none;
                        border: 1px solid #e0dede;
                        box-shadow: 2px 2px 10px #e8e8e8;
                        border-radius: 5px;
                        height: 40px;
                        font-size: 14px;
                        padding-left: 10px;
                    }
                }
            }
            .button-wrap {
                button {
                    width: 100%;
                    outline: none;
                    height: 40px;
                    border: none;
                    line-height: 40px;
                    background-color: #d93035;
                    border-radius: 5px;
                    font-size: 18px;
                    color: #FFF;
                    margin: 20px 0 0;
                }
            }

        }
    }

</style>