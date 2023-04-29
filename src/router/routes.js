
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/p', component: () => import('pages/Purchase.vue') },
      { path: '/search', component: () => import('pages/SearchPage.vue') },
      { path: '/ErkaklarKiyimi', component: () => import('pages/ErkaklarKiyimi.vue') },
      { path: '/AyollarKiyimi', component: () => import('pages/AyollarKiyimi.vue') },
      { path: '/BolalarKiyimi', component: () => import('pages/BolalarKiyimi.vue') },
      { path: '/Smartfonlar', component: () => import('pages/Smartfonlar.vue') },
      { path: '/Elektronika', component: () => import('pages/Elektronika.vue') },
      { path: '/BrendKiyimlar', component: () => import('pages/BrendKiyim.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  },
]

export default routes
