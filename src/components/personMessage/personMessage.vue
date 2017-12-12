<template>
    <div class="person-wrap">
        <menu-title :title="title"></menu-title>
        <ul class="person-msg">
            <li><i class="fa fa-user-md fa-fw" aria-hidden="true"></i><span class="detail-label">昵称</span> <span class="detail">芝芝</span>
            </li>
            <li><i class="fa fa-mobile fa-fw" aria-hidden="true"></i><span class="detail-label">手机</span><span
                    class="detail">12843964396</span></li>
            <li><i class="fa fa-venus-double fa-fw" aria-hidden="true"></i><span class="detail-label">性别</span><span class="detail">女</span>
            </li>
            <li><i class="fa fa-expeditedssl fa-fw" aria-hidden="true"></i><span class="detail-label">密码</span><span
                    class="detail-special" @click="changedir"><i class="fa  fa-lg"
                                                                 :class="{'fa-angle-up':flag,'fa-angle-down':!flag}"
                                                                 aria-hidden="true"></i></span></li>
            <li></li>
        </ul>
    </div>
</template>

<script>
  import MenuTitle from 'base/menu-title/menu-title'
  export default {
    data() {
      return {
        title: '个人中心',
        flag: true
      }
    },
    methods: {
      changedir() {
        this.flag = !this.flag
      }
    },
    components: {
      MenuTitle
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
    .person-wrap {
        background: #fff;
        font-size: 20px;
        position: absolute;
        overflow: hidden;
        width: 100%;
        top: 0;
        bottom: 0;
        z-index: 10;
        .person-msg {
            li {
                color: #e02d3f;
                margin: 0 20px;
                line-height: 40px;
                font-size: 16px;
                border-bottom: 1px solid #e0e0e0;
                position: relative;
                .detail-label{
                    margin-left: 5px;
                }
                .detail {
                    color: #666;
                    float: right;
                }
                .detail-special {
                    float: right;
                    padding-left: 10px;
                }
            }
        }
    }
</style>