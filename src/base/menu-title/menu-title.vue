<template>
    <div class="menu-title">
        <a href="javascript:;" @click="goBack"><i class="fa fa-angle-left fa-2x" aria-hidden="true"></i></a>
        <p>{{title}}</p>
    </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        default: '菜单'
      }
    },
    methods: {
      goBack() {
        this.$router.back()
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
    .menu-title {
        height: 44px;
        position: relative;
        z-index: 20;
        border-bottom: 1px solid #dfdfdf;
        background-color: #FFF;
        padding: 0 32px;
        a {
            position: absolute;
            left: 0;
            line-height: 44px;
            width: 32px;
            text-align: center;
            i {
                color: #e02d3f;
            }
        }
        p {
            width: 100%;
            height: 44px;
            line-height: 44px;
            color: #e32d39;
            font-size: 17px;
            text-align: center;
            background: url(./dz.png) center bottom no-repeat;
            background-size: 40px 8px;
            font-weight: 700;
            overflow: hidden;
        }
    }
</style>