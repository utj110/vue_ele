<template>
  <div>
    {{yy}}
    <v-header v-bind:seller="seller"></v-header>
    <nav class="tab border-1px">
      <ul>
        <li><a v-link="{path:'/goods'}">商品</a></li>
        <li><a v-link="{path:'/ratings'}">评价</a></li>
        <li><a v-link="{path:'/seller'}">商家</a></li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
  import header from './components/header/header.vue';


  export default {
    data () {
      return {
        seller: {}
      }
    },
    created: function () {
      this.$http.get('/api/seller')
        .then(function (res) {
          res = res.body;
          if(res.errno === 0){
            this.seller = res.data;
//            console.log(this.seller);
          }
        })
    },
    components: {
      'v-header' : header,
    }
  }
</script>

<style>
  .tab ul{
    display: flex;
  }
  .tab ul li{
    flex: 1;
    float: left;
    height: 80px;
    line-height: 80px;
    font-size: 28px;
    /*border-bottom: 1px solid #ccc;*/
    text-align: center;
  }
  .tab ul li a{
    display: block;
    color:rgb(77,85,93);
  }
  .tab ul li .v-link-active{
    color: #ff6600;
  }
</style>
