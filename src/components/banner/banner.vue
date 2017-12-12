<template>
    <div class="slider-wrapper" ref="slider">
        <slider>
            <div v-for="(item,index) in banner">
                <img :src="item.src" alt="">
            </div>
        </slider>
    </div>
</template>

<script>
  import slider from 'base/slider/slider'
  export default {
    data () {
      return {
        banner: []
      }
    },
    created () {
      this.getbanner()
    },
    methods: {
      getbanner () {
        this.axios.get('static/data.json').then((res) => {
          res = res.data
          if (res.errok === 0) {
            this.banner = res.bannerList
          }
        })
      }
    },
    components: {
      slider
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
    .slider-wrapper {
        width: 100%;
        overflow: hidden;
        margin-top: 5px;
    }
</style>