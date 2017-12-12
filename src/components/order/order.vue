<template>
    <div class="order-wrap">
        <menu-title :title="title"></menu-title>
        <div class="switchWrap">
            <switches :switches="switches" :currentIndex="currentIndex" @switch="switchItem"></switches>
        </div>
       <div class="order">
           <div v-if="currentIndex===0" class="orderList"><p class="no-order">暂无订单</p></div>
           <div v-else class="orderList"><p class="no-order">暂无历史订单</p></div>
       </div>
    </div>
</template>

<script>
  import MenuTitle from 'base/menu-title/menu-title'
  import switches from 'base/switches/switches'
  export default {
    data() {
      return {
        title: '订单查询',
        switches: [{name: '当前订单'}, {name: '历史订单'}],
        currentIndex: 0
      }
    },
    methods: {
      switchItem(index) {
        this.currentIndex = index
      }
    },
    components: {
      MenuTitle, switches
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
    .order-wrap {
        background: #fff;
        font-size: 20px;
        position: absolute;
        overflow: hidden;
        width: 100%;
        top: 0;
        bottom: 0;
        z-index: 10;
        .switchWrap{
            margin-top: 10px;
        }
        .order{
            height: 100%;
            .orderList{
                height: 100%;
                overflow: auto;
                text-align: center;
                .no-order{
                    margin-top: 200px;
                    font-size: 16px;
                    color: #6c6c6c;
                    font-weight: 700;
                }
            }
        }
    }
</style>