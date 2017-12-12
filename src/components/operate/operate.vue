<template>
    <div class="operate-wrap">
        <menu-title :title="title"></menu-title>
        <p class="text">尽情期待...</p>
    </div>
</template>

<script>
  import MenuTitle from 'base/menu-title/menu-title'
  export default {
    data() {
      return {
        title: '经营公示'
      }
    },
    components: {
      MenuTitle
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
    .operate-wrap {
        background: #fff;
        font-size: 20px;
        position: absolute;
        overflow: hidden;
        width: 100%;
        top: 0;
        bottom: 0;
        z-index: 10;
        .text{
            font-size: 16px;
            text-align: center;
            font-weight: bolder;
            margin-top: 100px;
            color: #6c6c6c;
        }
    }
</style>