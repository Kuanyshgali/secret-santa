import Vue from 'vue'
import Router from 'vue-router'
import MainLayout from "@/layouts/main/MainLayout";
import GamePage from "@/pages/game/GamePage";
import CustomizationPage from "@/pages/customization/CustomizationPage";

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainLayout,
      children: [
        {
          path: '',
          name: 'game',
          component: GamePage,
          meta: {
            path: '/customization',
            name: 'customization'
          }
        },
        {
          path: '/customization',
          name: 'customization',
          component: CustomizationPage,
          meta: {
            path: '/',
            name: 'game'
          }
        }
      ]
    }
  ]
})