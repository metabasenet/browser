import router from '@/router';
import nprogress from 'nprogress';
import 'nprogress/nprogress.css';
router.beforeEach((to, from, next) => {
    document.title = 'MNT Smart Chain ' + to.name + ' | MNTScan';
    nprogress.start();
    next();
})
router.afterEach((to, from, next) => {
    nprogress.done();
})