<template>
    <div class="privacy-wrap">
        <menu-title :title="title"></menu-title>
        <Scroll :data="menu" class="scroll">
            <ul class="text-wrap">
                <li>欢迎您使用肯德基宅急送网络订餐服务，包括但不限于通过肯德基宅急送互联网订餐网站，肯德基宅急送手机App订餐客户端，以及肯德基宅急送基于互联网或手机上网功能开发的其他订餐平台（如肯德基宅急送移动互联网订餐网站），提供的服务（以下简称"我们的服务"）。鉴于网络的特性，我们的服务将无可避免地与您产生直接或间接的互动关系，故特此说明我们的服务对用户个人信息所采取的收集、使用和保护规则，请您务必仔细阅读。一旦使用我们的服务，即表示您已同意本隐私权条款。本隐私权条款适用于您当前及未来使用的我们的服务。</li>
                <li>
                    <h3>个人信息收集</h3>
                    <p>您向我们提供信息: 在使用我们的服务过程中，您需要向我们提供一些个人信息，包括订餐人姓氏、性别、送餐联系电话、送餐地址、电子邮箱等，以便我们及时准确地提供送餐服务，请予以理解和配合。如需要更新时，也请确保资料的准确性和及时性，以免影响送餐。您在使用我们的服务时传送的任何其他资料、信息，包括但不限于意见、客户反馈、喜好、建议、支持、请求、问题等内容，将被当作非保密资料和非专有资料处理；您的传送行为即表示您同意这些资料用作我们的调查、统计等目的而由我们无偿使用。</p>
                    <p>我们在您使用服务的过程中获取信息：在使用我们的服务过程中，某些信息可以通过各种技术和方法不经您主动提供而被收集，这些方法包括IP地址、Cookie，设备数据，日志数据收集等。这些信息不足以使他人辨认您个人的身份，收集上述信息的目的旨在为您提供更完善的服务。</p>
                </li>
                <li></li>
                <li></li>
            </ul>
        </Scroll>
    </div>
</template>

<script>
  import Scroll from 'base/scroll/scroll'
  import MenuTitle from 'base/menu-title/menu-title'
  export default {
    data() {
      return {
        title: '隐私条款',
        menu: [0]
      }
    },
    components: {
      MenuTitle, Scroll
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
    .privacy-wrap {
        background: #fff;
        font-size: 20px;
        position: absolute;
        overflow: hidden;
        width: 100%;
        top: 0;
        bottom: 0;
        z-index: 10;
        .scroll{
            position: absolute;
            top:44px;
            bottom: 0;
            z-index: 10;
            .text-wrap {
                padding: 0 20px;
                li {
                    margin: 10px 0;
                    font-size: 13px;
                    color: #6c6c6c;
                    line-height: normal;
                    h3{
                        margin: 10px 0;
                        font-weight: 700;
                    }
                }
            }
        }

    }
</style>