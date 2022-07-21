import camelCase from "lodash/camelCase";
import Home from "./../pages/home";
import { DEFAULT } from "./routesPath";

class Api {
  constructor() {}

  BaseApi(params, postfix = "") {
    let BaseObj = {};
    console.log(9, params.keys());
    params.keys().forEach((fileName) => {
      // 获取目录对象
      const ApiConfig = params(fileName);
      // 剥去文件名开头的 `'./` 和结尾的扩展名
      // 获取组件的 PascalCase 命名
      const BaseName = camelCase(
        fileName.replace(/^\.\/(\w+)\.\w+$/, `$1+${postfix}`)
      );
      BaseObj[BaseName] = ApiConfig.default || ApiConfig;
    });
    return BaseObj;
  }
}

const opt = new Api();

const requireUrl = require.context(
  // 其文件目录的相对路径
  "./config",
  // 是否查询其子目录
  false,
  // 匹配基础文件名的正则表达式
  /\.js$/
);

const routes = opt.BaseApi(requireUrl);

const routesConfig = [
  {
    id: 0,
    path: DEFAULT,
    label: `首页`,
    exact: true,
    element: <Home />,
  },
];

Object.keys(routes).forEach((item) => {
  const getRoutes = routes[item];
  routesConfig.push(...getRoutes);
});

export default routesConfig;
