<template>
    <div class="cont-wrap">
        <div class="tab-wrap">
            <div class="tab">
                <router-link tag="div" class="tab-item"  to="/menu">
                    <img src="./cha.png">
                    <span>开始订餐</span>
                </router-link>

                <router-link tag="div" class="tab-item" to="/mine">
                    <span>我的</span>
                    <img src="./people.png">
                </router-link>
            </div>
        </div>
        <div class="hotFood">
            <ul>
                <li v-for="(hotFood,index) in hotFoods" @click="selectItem(index)">
                    <img :src="hotFood.src">
                    <p>{{hotFood.name}}</p>
                </li>

            </ul>
        </div>
        <div class="law">
            <router-link class="law-item" tag="span" to="/law">法律条款</router-link><span>|</span>
            <router-link class="law-item" tag="span" to="/operate">经营公示</router-link><span>|</span>
            <router-link class="law-item" tag="span" to="/privacyPolicy">隐私条款</router-link>
        </div>
        <div class="foot">
            <p>版权所有 百胜咨询（上海）有限公司</p>
            <p>沪ICP备 17029211-1号</p>
        </div>
    </div>
</template>

<script>
  import {mapMutations} from 'vuex'
  export default {
    data() {
      return {
        hotFoods: []
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.gethotFood()
      })
    },
    methods: {
      selectItem(index) {
        this.$router.push('/menu')
        this.setCurrentIndex(index)
      },
      gethotFood() {
        this.axios.get('static/data.json').then((res) => {
          res = res.data
          if (res.errok === 0) {
            this.hotFoods = res.menu.slice(0, 5)
          }
        })
      },
      ...mapMutations({
        setCurrentIndex: 'SET_CURRENT_INDEX'
      })
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
    .cont-wrap {
        .tab-wrap {
            padding: 5px;
            .tab {
                height: 88px;
                display: flex;
                flex: 1;
                border: 2px solid #e4e4e4;
                .tab-item {
                    height: 100%;
                    flex: 1;
                    line-height: 88px;
                    text-align: center;
                    img {
                        width: 60px;
                        vertical-align: middle;
                    }
                    span {
                        vertical-align: middle;
                        font-size: 20px;
                        font-weight: 700;
                        color: #1a79d9;
                        &:first-child {
                            color: #d93035;
                        }
                    }
                    &:first-child {
                        border-right: 1px solid #d9d9d9;
                    }

                }
            }
        }
        .hotFood {
            ul {
                height: 64px;
                padding: 7px 0;
                border-top: 1px solid #e0dede;
                border-bottom: 1px solid #e0dede;
                display: flex;
                margin-top: 10px;
                li {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    img {
                        width: 50px;
                        margin: 0 auto;
                    }
                    p {
                        font-size: 11px;
                        font-weight: 700;
                        color: #404040;
                    }
                }
            }
        }
        .law {
            margin: 10px 0;
            text-align: center;
            span {
                padding: 0 1.6%;
                font-size: 13px;
                color: #6c6c6c;
            }
        }
        .foot {
            text-align: center;
            p {
                line-height: 17px;
                font-size: 13px;
                color: #6c6c6c;
            }
        }
    }
</style>