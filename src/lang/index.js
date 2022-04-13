import Vue from 'vue'
import VueI18n from 'vue-i18n'
import ElementUI from 'element-ui';
Vue.use(VueI18n)

const i18n=new VueI18n({
   // locale: localStorage.getItem('lang') || 'zh',
   locale:localStorage.getItem('virtualCurrencyLocale') || 'zh-CN',
    messages:{
        'zh-CN':require('./zh.js'),
        'en-US':require('./en.js')
    }
})
Vue.use(ElementUI,{i18n:(key,value)=>i18n.t(key,value)});
//locale.i18n((key, value) => i18n.t(key, value)) //为了实现element插件的多语言切换
export default i18n