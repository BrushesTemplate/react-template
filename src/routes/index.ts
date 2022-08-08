import { _ } from "@brushes/tools";
import Home from "./../pages/home";
import { DEFAULT } from "./routesPath";

const { camelCase } = _;

class Api {
  constructor() {}

  BaseApi(params: __WebpackModuleApi.RequireContext, postfix = "") {
    let BaseObj = {} as any;
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

const routesConfig = [] as Array<any>;

Object.keys(routes).forEach((item) => {
  // @ts-ignore
  const getRoutes = routes[item];
  routesConfig.push(...getRoutes);
});

export default routesConfig;
