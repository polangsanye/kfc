<template>
    <div class="loading">
        <img width="24" height="24" src="./loading.gif">
        <p class="desc">{{title}}</p>
    </div>
</template>
<script type="text/ecmascript-6">
  export default {
    props: {
      title: {
        type: String,
        default: '正在载入...'
      }
    }
  }
</script>
<style scoped lang="less" rel="stylesheet/less">

    .loading{
        width: 100%;
        text-align: center;
        position: absolute;
        top:0;
        left:0;
        right:0;
        bottom: 0;
        z-index: 100;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: rgba(153,153,153,0.2);
        .desc{
            line-height: 20px;
            font-size:12px;
            color: #999;
        }

    }

</style>
