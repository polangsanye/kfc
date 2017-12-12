<template>
    <div class="mine">
        <menu-title :title="title"></menu-title>
        <div class="mine-detail">
            <ul>
                <li>
                   <router-link tag="div" to="/card">
                       <i class="fa left fa-credit-card-alt" aria-hidden="true"></i>卡包<i class="fa right fa-angle-right" aria-hidden="true"></i>
                   </router-link>
                </li>
                <li>
                    <router-link tag="div" to="/personMessage">
                        <i class="fa left fa-user" aria-hidden="true"></i>个人信息<i class="fa right fa-angle-right" aria-hidden="true"></i>
                    </router-link>

                </li>
                <li>
                    <router-link tag="div" to="/order">
                        <i class="fa left fa-cutlery" aria-hidden="true"></i>订单查询<i class="fa right fa-angle-right" aria-hidden="true"></i>
                    </router-link>
                </li>
                <li>
                    <router-link tag="div" to="/login">
                        <i class="fa left fa-sign-out" aria-hidden="true"></i>退出登录<i class="fa right fa-angle-right" aria-hidden="true"></i>
                    </router-link>
                </li>
            </ul>
        </div>
        <router-view/>
    </div>
</template>

<script>
  import menuTitle from 'base/menu-title/menu-title'
  export default {
    data() {
      return {
        title: '个人中心'
      }
    },
    methods: {
      goBack() {
        this.$router.back()
      }
    },
    components: {
      menuTitle
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
    .mine {
        background: #fff;
        font-size: 20px;
        position: absolute;
        overflow: hidden;
        width: 100%;
        top: 0;
        bottom: 0;
        z-index: 10;
        .mine-detail{
            margin-top:50px;
            ul {
                li{
                    color:#e02d3f;
                    margin: 0 20px;
                    line-height: 40px;
                    font-size: 16px;
                    border-bottom: 1px solid #e0e0e0;
                    position: relative;
                    i.left{
                        font-size: 25px;
                        margin-right:10px;
                        display: inline-block;
                        vertical-align: middle;
                        width: 40px;
                        text-align: center;
                    }
                    i.right{
                        font-size: 25px;
                        position: absolute;
                        right: 10px;
                        top:10px
                    }

                }
            }
        }
    }
</style>