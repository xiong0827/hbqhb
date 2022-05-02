import { Button, Tabbar, TabbarItem, Col, Row, Grid, GridItem, Search, Tab, Tabs, Icon, PasswordInput, NumberKeyboard, Cell, CellGroup, Uploader, NavBar, Image as VanImage, Calendar, Toast, Popup, Cascader, Stepper } from 'vant';
import Vue from 'vue'
Vue.use(Button);
Vue.use(TabbarItem)
Vue.use(Tabbar)
Vue.use(Col);
Vue.use(Icon);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Search);
Vue.use(Row);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(PasswordInput);
Vue.use(NumberKeyboard);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Uploader);
Vue.use(NavBar);
Vue.use(VanImage);
Vue.use(Calendar);
Vue.use(Toast);
Vue.use(Popup);
Vue.use(Cascader);
Vue.use(Stepper)
import { Loading } from 'vant';
import { Form } from 'vant';
import { Field } from 'vant';

Vue.use(Form);
Vue.use(Field);

Vue.use(Loading);
export default Vue