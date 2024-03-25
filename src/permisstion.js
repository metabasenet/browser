import router from '@/router';
import nprogress from 'nprogress';
import 'nprogress/nprogress.css';
router.beforeEach((to, from, next) => {
    console.log(to);
    document.title = 'MNT-' + to.name;
    nprogress.start();
    next();
})
router.afterEach((to, from, next) => {
    nprogress.done();
})