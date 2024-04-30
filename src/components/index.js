
import SvgIcon from './SvgIcon/index.vue'
const MyGlobalComponentsPlugin = {
    install(app) {
      app.component('SvgIcon', SvgIcon);
    }
  };
  export default MyGlobalComponentsPlugin;

