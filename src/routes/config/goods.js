import {
  GOODS_PATH,
  GOODS_ADD_PATH,
  GOODS_DETAIL_PATH,
  GOODS_EDITOR_PATH,
} from "../routesPath";
import {
  GoodsJsx,
  AddGoodsJsx,
  EditorGoodsJsx,
  DetailGoodsJsx,
} from "../../pages/goods";
import { AppstoreOutlined, ContainerOutlined } from "@ant-design/icons";

// export interface RouterType extends PathRouteProps {
//   icon?: string
//   title?: string
//   children?: Array<Partial<PathRouteProps>>
// }

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
        element: <GoodsJsx />,
      },
      {
        label: "新增商品",
        icon: <ContainerOutlined />,
        auth: "goods.add",
        key: GOODS_ADD_PATH,
        element: <AddGoodsJsx />,
      },
      {
        label: "编辑商品",
        noMenu: true,
        icon: <ContainerOutlined />,
        auth: "goods.editor",
        key: GOODS_EDITOR_PATH,
        element: <EditorGoodsJsx />,
      },
      {
        label: "查看商品",
        icon: <ContainerOutlined />,
        auth: "goods.add",
        noMenu: true,
        key: GOODS_DETAIL_PATH,
        element: <DetailGoodsJsx />,
      },
    ],
  },
];

export default goods;
