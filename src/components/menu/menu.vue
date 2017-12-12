<template>
    <div class="products">
        <menu-title></menu-title>
        <div class="banner" ref="mybanner">
            <slider ref="slider">
                <div v-for="(item,index) in banner">
                    <img :src="item.src" alt="">
                </div>
            </slider>
        </div>
        <div class="menu-wrap" ref="menuwrap">
            <scroll class="menu" :data="menu">
                <ul>
                    <li v-for="(item,index) in menu" @click="selectMenu(index,$event)"
                        :class="{active:scrollIndex===index}" class="menu-item">
                        <img :src="item.src">
                        <p>{{item.name}}</p>
                    </li>
                </ul>
            </scroll>
            <scroll class="foods" :data="menu" :probe-type="3" :listenScroll="true" @scroll="scroll"
                    ref="foodscroll">
                <ul>
                    <li v-for="(item,index) in menu" class="food-list foot-list-hook">
                        <h3 class="title">{{item.name}}</h3>
                        <ul>
                            <li v-for="(food,index) in item.products" class="food-item">
                                <div class="icon">
                                    <img :src="food.imgSrc">
                                </div>
                                <div class="content">
                                    <p class="name">{{food.til}}</p>
                                    <p class="price">{{food.price}}</p>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </scroll>
        </div>
        <loading v-show="!menu.length"></loading>
    </div>
</template>

<script>
  import Slider from 'components/banner/banner'
  import Scroll from 'base/scroll/scroll'
  import Loading from 'base/loading/loading'
  import menuTitle from 'base/menu-title/menu-title'
  import {mapGetters} from 'vuex'
  export default {
    data() {
      return {
        menu: [],
        banner: [],
        listHeight: [],
        scrollY: 0
      }
    },
    mounted() {
      this.getMenu()
//      window.addEventListener('resize', () => {
//        this.$nextTick(() => {
//          let bannerHeight = this.$refs.mybanner.getBoundingClientRect().height + 44
//          console.log(bannerHeight)
//          this.$refs.menuwrap.style.top = `${bannerHeight}px`
//        })
//      })
    },
    computed: {
      scrollIndex() {
        for (let i = 0; i < this.listHeight.length; i++) {
          let height1 = this.listHeight[i]
          let height2 = this.listHeight[i + 1]
          if (!height2 || (height1 <= this.scrollY && this.scrollY < height2)) {
            return i
          }
        }
        return 0
      },
      ...mapGetters([
        'currentIndex'
      ])
    },
    methods: {
      getMenu() {
        this.axios.get('static/data.json').then((res) => {
          res = res.data
          if (res.errok === 0) {
            this.menu = res.menu
            this.banner = res.bannerList
            this.$nextTick(() => {
              this._initHeight()
            })
          }
        })
      },
      selectMenu(index, event) {
        if (!event._constructed) {
          return
        }
        let foodList = this.$el.querySelectorAll('.foot-list-hook')
        let el = foodList[index]
        this.$refs.foodscroll.scrollToElement(el, 300)
      },
      scroll(pos) {
        this.scrollY = Math.abs(Math.floor(pos.y))
      },
      _initHeight() {
        let foodList = this.$el.querySelectorAll('.foot-list-hook')
        let height = 0
        this.listHeight.push(height)
        for (let i = 0; i < foodList.length; i++) {
          let item = foodList[i]
          height += item.clientHeight
          this.listHeight.push(height)
        }
      }
    },
    components: {
      Slider, Scroll, Loading, menuTitle
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
    .products {
        background: #fff;
        font-size: 20px;
        position: absolute;
        overflow: hidden;
        width: 100%;
        top: 0;
        bottom: 0;
        z-index: 10;
        .banner {
            width: 100%;
            overflow: hidden;
            margin-top: 6px;
            height: 150px;
            img{
                height: 150px;
            }
        }
        .menu-wrap {
            position: fixed;
            top: 200px;
            bottom: 0;
            width: 100%;
            overflow: hidden;
            display: flex;
            .menu {
                flex: 0 0 80px;
                width: 80px;
                box-sizing: border-box;
                background: #f5f0e9;
                .menu-item {
                    display: flex;
                    flex-direction: column;
                    text-align: center;
                    padding-bottom: 12px;
                    border-bottom: 1px solid #d9dde1;
                    &.active {
                        background: #fff;
                        margin-top: -1px;
                        z-index: 10;
                        border-bottom: none;
                    }
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
            .foods {
                flex: 1;
                background: #fff;
                .food-list {
                    .title {
                        background-color: #fff;
                        border-bottom: 1px solid #e8e7e7;
                        color: #e02d3f;
                        height: 25px;
                        text-align: center;
                        font-size: 13px;
                        line-height: 25px;
                    }
                    .food-item {
                        display: flex;
                        height: 100px;
                        border-bottom: 1px solid #e8e7e7;
                        padding: 10px;
                        .icon {
                            flex: 0 0 130PX;
                            width: 140px;
                            margin-right: 10px;
                            display: flex;
                            align-items: center;
                            img {
                                width: 80px;
                                height: 80px;
                                display: block;
                            }
                        }
                        .content {
                            flex: 1;
                            .name {
                                font-size: 14px;
                                color: #444;
                                font-weight: 700;
                                text-align: right;
                            }
                            .price {
                                font-size: 28px;
                                color: #e02d3f;
                                text-align: right;
                                font-weight: 600;
                                line-height: 38px;
                            }
                        }
                    }
                }
            }
        }
    }
</style>