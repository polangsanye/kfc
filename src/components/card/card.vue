<template>
    <div class="card-wrap">
        <menu-title :title="title"></menu-title>
        <div class="card-list">
            <div class="no-card">
                <div class="card-title">
                    <div class="line"></div>
                    <div class="text">我的优惠券</div>
                    <div class="line"></div>
                </div>
                <div class="card-text">
                    亲！暂时没有可以使用的优惠券！
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import MenuTitle from 'base/menu-title/menu-title'
  export default {
    data() {
      return {
        title: '卡包'
      }
    },
    components: {
      MenuTitle
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
    .card-wrap {
        background: #ebebeb;
        font-size: 20px;
        position: absolute;
        overflow: hidden;
        width: 100%;
        top: 0;
        bottom: 0;
        z-index: 10;
        .card-list {

            background: #ebebeb;
            .no-card {
                .card-title {
                    margin: 100px 0 70px;
                    display: flex;
                    padding: 0 35px;
                    .line{
                        flex: 1;
                        height: 0;
                        position: relative;
                        top:7px;
                        border-top: 1px solid #AFACAC;
                    }
                    .text{
                        flex: 0 0 100px;
                        width: 100px;
                        text-align: center;
                        font-size: 15px;
                        color: #6c6c6c;
                    }
                }
                .card-text {
                    text-align: center;
                    font-size: 15px;
                    color: #6c6c6c;
                    font-weight: 700;
                }
            }
        }

    }
</style>