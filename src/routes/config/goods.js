import { GOODS_PATH } from "../routesPath";
import Goods from "../../pages/goods";

import { AppstoreOutlined, ContainerOutlined } from "@ant-design/icons";

const goods = [
  {
    label: "商品管理",
    icon: <AppstoreOutlined />,
    auth: "goods.manage",
    children: [
      {
        label: "商品列表",
        icon: <ContainerOutlined />,
        auth: "goods.list",
        key: GOODS_PATH,
        element: <Goods />,
      },
    ],
  },
];

export default goods;
