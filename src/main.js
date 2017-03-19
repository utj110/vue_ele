import Vue from 'vue'
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';
import goods from './components/goods/goods.vue';
import ratings from './components/ratings/ratings.vue';
import seller from './components/seller/seller.vue';
import 'common/css/index.less'

Vue.use(VueRouter);
Vue.use(VueResource);

// new Vue({
//   el: 'body',
//   components: { App }
// })

let app = Vue.extend(App);
let router = new VueRouter();

router.map({
  '/goods': {
    component:goods
  },
  '/ratings': {
    component:ratings
  },
  'seller':{
    component:seller
  }
});
router.start(app,'#app');
router.go('/goods');