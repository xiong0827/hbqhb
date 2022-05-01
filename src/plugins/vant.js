import { Button, Tabbar, TabbarItem, Col, Row,Grid, GridItem,Search,Tab, Tabs,Icon, PasswordInput, NumberKeyboard,Cell,Toast, CellGroup, Uploader, NavBar } from 'vant';
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
Vue.use(Cell)
Vue.use(CellGroup)
Vue.use(Toast)
Vue.use(NavBar)
import { Loading } from 'vant';
import { Form } from 'vant';
import { Field } from 'vant';
import { Card } from 'vant';
import { Tag } from 'vant';
import { Lazyload } from 'vant';
import { Image as VanImage } from 'vant';
import { Checkbox, CheckboxGroup } from 'vant';

Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(VanImage);

// 注册时可以配置额外的选项
Vue.use(Lazyload, {
  lazyComponent: true,
});
Vue.use(Tag);
Vue.use(Card);
Vue.use(Form);
Vue.use(Field);
Vue.use(Uploader)
Vue.use(Loading);
export default Vue