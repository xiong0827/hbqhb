import { Button, Tabbar, TabbarItem, Col,Picker, Row, Grid, GridItem, Search, Tab, Tabs, Icon, PasswordInput, NumberKeyboard, Cell, Toast, CellGroup, Uploader, NavBar, Calendar, Popup, Cascader, Stepper, Dialog, AddressEdit, ShareSheet } from 'vant';
import { Empty } from 'vant';
import { List } from 'vant';
import { PullRefresh } from 'vant';

Vue.use(PullRefresh);
Vue.use(List);
Vue.use(Empty);
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
Vue.use(Toast)
Vue.use(Uploader);
Vue.use(NavBar);
Vue.use(Picker);
Vue.use(Calendar);
Vue.use(Popup);
Vue.use(Cascader);
Vue.use(Stepper);
Vue.use(Dialog);
Vue.use(AddressEdit);
Vue.use(ShareSheet)
import { Loading } from 'vant';
import { Form } from 'vant';
import { Field } from 'vant';
import { Card } from 'vant';
import { Tag } from 'vant';
// import { Lazyload } from 'vant';
import { Image as VanImage } from 'vant';
import { Checkbox, CheckboxGroup } from 'vant';
// Vue.use(Lazyload);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(VanImage);

// 注册时可以配置额外的选项
// Vue.use(Lazyload, {
//   lazyComponent: true,
// });
Vue.use(Tag);
Vue.use(Card);
Vue.use(Form);
Vue.use(Field);
Vue.use(Loading);
export default Vue