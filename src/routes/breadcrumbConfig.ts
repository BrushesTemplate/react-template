import {GOODS_PATH, DEFAULT, ORDERS_PATH, GOODS_ADD_PATH, GOODS_EDITOR_PATH} from "./routesPath";

// 面包屑路由配置
const breadcrumbNameMap = {
  [GOODS_PATH]: "商品管理",
  [GOODS_ADD_PATH]: "商品添加",
  [GOODS_EDITOR_PATH]: "商品编辑",
  [DEFAULT]: "默认页面",
  [ORDERS_PATH]: "订单管理",
};

export default breadcrumbNameMap;
