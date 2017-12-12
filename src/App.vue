<template>
    <div id="app">
        <div class="logo-wrap">
            <div class="logo"></div>
        </div>
        <banner></banner>
        <tab></tab>
        <keep-alive>
            <router-view/>
        </keep-alive>
    </div>
</template>

<script>
  import Banner from 'components/banner/banner'
  import Tab from 'components/tab/tab'
  export default {
    components: {
      Banner, Tab
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
    .logo-wrap {
        width: 100%;
        height: 44px;
        border-bottom: 1px solid #dfdfdf;
        font-size: 16px;
        color: #ff6326;
        z-index: 2;
        background-color: #FFF;
        .logo {
            width: 100px;
            height: 100%;
            background: url(assets/img/logo.png) left center no-repeat;
            background-size: 100%;
            margin: 0 0 0 13px;
        }
    }
</style>
