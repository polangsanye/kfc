import Vue from 'vue'
import Router from 'vue-router'
import Mine from 'components/mine/mine'
import Menu from 'components/menu/menu'
import Login from 'components/login/login'
import Card from 'components/card/card'
import Order from 'components/order/order'
import PersonMessage from 'components/personMessage/personMessage'
import Law from 'components/law/law'
import Operate from 'components/operate/operate'
import privacyPolicy from 'components/privacy_policy/privacy_policy'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/menu',
      component: Menu
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/law',
      component: Law
    }, {
      path: '/operate',
      component: Operate
    }, {
      path: '/privacyPolicy',
      component: privacyPolicy
    },
    {
      path: '/mine',
      component: Mine,
      children: [
        {
          path: '/card',
          component: Card
        },
        {
          path: '/order',
          component: Order
        }, {
          path: '/personMessage',
          component: PersonMessage
        }
      ]
    }
  ]
})
