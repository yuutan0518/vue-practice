import KbnBoardView from '@/components/templates/KbnBoardView.vue'
import KbnLoginView from '@/components/templates/KbnLoginView.vue'
import KbnTaskDataModel from '@/components/templates/KbnTaskDataModel.vue'

export default [{
    path: '/',
    component: KbnBoardView,
    meta: { requiresAuth: true}
}, {
    path: '/login',
    component: KbnLoginView,
    meta: { requiresAuth: true}
}, {
    path: '/tasks/:id',
    component: KbnTaskDataModel,
    meta: { requiresAuth: true}
},{
    path: '*',
    redirect: '/'
}]