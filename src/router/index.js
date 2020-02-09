import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/big/home'
import Workshop from '@/components/big/werkplaats'
import Maintainence from '@/components/big/onderhoudsproducten'
import MaintainenceSub from '@/components/big/onderhoud-sub'
import Belts from '@/components/big/riemen'
import RegularKeys from '@/components/big/sleutels'
import CarKeys from '@/components/big/autosleutels'
import Nameplates from '@/components/big/naamplaten'
import Soles from '@/components/big/voetzolen'
import Info from '@/components/big/info'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/werkplaats',
      name: 'Workshop',
      component: Workshop
    },
    {
      path: '/producten/leder/onderhoud',
      name: 'Onderhoudsproducten',
      component: Maintainence
    },
    {
      path: '/producten/leder/onderhoud-sub',
      name: 'Onderhoudsubmenu',
      component: MaintainenceSub
    },
    {
      path: '/producten/leder/riemen',
      name: 'Riemen',
      component: Belts
    },
    {
      path: '/producten/sleutels/reguliere_sleutels',
      name: 'Reguliere sleutels',
      component: RegularKeys
    },
    {
      path: '/producten/sleutels/autosleutels',
      name: 'Autosleutels',
      component: CarKeys
    },
    {
      path: '/producten/naamplaten',
      name: 'Naamplaten',
      component: Nameplates
    },
    {
      path: '/producten/voetzolen',
      name: 'Voetzolen',
      component: Soles
    },
    {
      path: '/info',
      name: 'Info',
      component: Info
    }
  ]
});

router.replace('/home')

export default router;