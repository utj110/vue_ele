<template>
  <div class="header">
    <div class="content-wrapper clearfix">
      <div class="avatar">
        <img :src="seller.avatar" alt="">
      </div>
      <div class="content">
        <div class="title clearfix">
          <span class="brand"></span>
          <div class="name">{{seller.name}}</div>
        </div>
        <div class="description">
          {{seller.description}}/{{seller.deliveryTime}}送达
        </div>
        <div class="support clearfix">
          <i v-if="seller.supports" class="icon" :class="iconList[seller.supports[0].type]"></i>
          <span class="text" v-if="seller.supports">{{seller.supports[0].description}}</span>
        </div>
      </div>
      <span v-if="seller.supports" class="support-count" @click="showDetail">{{seller.supports.length}}个<i>&gt;</i></span>
    </div>
    <div class="bulletin-wrapper">
      <span class="bulletin-icon"></span><span class="bulletin-text">{{seller.bulletin}}</span>
      <i>&gt;</i>
    </div>
    <div class="background-img">
      <img :src="seller.avatar" alt="">
    </div>
    <div class="detail" v-show="isShow">
      <div class="detail-wrapper">
        {{seller.bulletin}}
        {{seller.bulletin}}
        {{seller.bulletin}}
        {{seller.bulletin}}

      </div>
      <div class="detail-close" @click="closeDetail">
        X
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data(){
      return{
        iconList:['decrease','discount','guarantee','invoice','special'],
        isShow:true
      }
    },
    props:{
      seller:Object
    },
    methods:{
      showDetail(){
        this.isShow = true;
      },
      closeDetail(){
        this.isShow = false;
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  @import "../../common/css/base";

.header{
  background-color: rgba(7, 17, 27, 0.5);
  position: relative;
  z-index: 99;
  color: #ffffff;
}
  .content-wrapper{
    padding:24px 0 18px 24px;
    position: relative;
    .avatar{
      float: left;
      margin-right: 16px;
      border-radius: 4px;
      overflow: hidden;
      width: 64px;
      height: 64px;
      img{
        width: 64px;
        height: 64px;
      }
    }
    .content{
      float: left;
      padding:2px 0;
      .title {
        .brand {
          float: left;
          display: inline-block;
          width: 30px;
          height: 18px;
          .bg-image("brand");
          background-size: 100% 100%;
        }
        .name{
          float: left;
          padding-left: 6px;
          font-size:16px;
          color: #ffffff;
          font-weight: bold;
          line-height: 18px;
        }
      }
      .description{
        padding: 8px 0 10px  0;
        font-size: 12px;
        color: #ffffff;
        line-height: 12px;
      }
      .support{
        .icon{
          display: inline-block;
          width: 12px;
          height: 12px;
          background-size: 100%;
          background-repeat:no-repeat;
          float: left;
        }
        .decrease{
          .bg-image("decrease_1");
        }
        .discount{
          .bg-image("discount_1");
        }
        .guarantee{
          .bg-image("guarantee_1");
        }
        .invoice{
          .bg-image("invoice_1");
        }
        .special{
          .bg-image("special_1");
        }
        .text{
          float: left;
          padding-left: 4px;
          font-size: 10px;
          color: #ffffff;
          line-height: 12px;
        }
      }

    }
    .support-count{
      position: absolute;
      right: 12px;
      bottom: 18px;
      display: inline-block;
      text-align: center;
      line-height: 12px;
      font-size: 10px;
      color: #ffffff;
      padding:7px 8px;
      background: rgba(0,0,0,0.2);
      border-radius: 24px;
      i{
        padding-left: 2px;
      }
    }
  }
  .bulletin-wrapper{
    position: relative;
    font-size: 10px;
    color: #ffffff;
    height: 28px;
    line-height: 28px;
    background: rgba(7,17,27,0.2);
    padding:0 16px 0 12px;
    white-space:nowrap;
    overflow: hidden;
    text-overflow:ellipsis;
    .bulletin-icon{
      display: inline-block;
      margin-top: 8px;
      .bg-image("bulletin");
      width: 22px;
      height: 12px;
      background-size: 100%;
      background-repeat: no-repeat;
    }
    .bulletin-text{
      /*display: inline-block;*/
      vertical-align: top;
      padding-left: 4px;
    }
    i{
      position: absolute;
      right: 12px;
      top: 0px;
    }
  }
  .background-img{
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    overflow: hidden;
    filter: blur(10px);
    img{
      width: 100%;
    }
  }
  .detail{
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    background: rgba(7,17,27,0.8);
    height: 100%;
    width: 100%;
    overflow: auto;
    .detail-wrapper{
      box-sizing: border-box;
      min-height: 100%;
      padding-bottom:64px;
    }
    .detail-close{
      height: 64px;
      line-height: 32px;
      font-size: 32px;
      text-align: center;
      position: relative;
      margin-top:-64px;
    }
  }
</style>
