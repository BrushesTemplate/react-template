import password from "../static/password.png";
import {FieldType} from 'qin-form/dist/esm/form/types';
import { Iconfont } from '@brushes/components'
const fieldsForm: Array<FieldType> = [
  {
    name: "mobile",
    type: "text",
    label: "",
    rules: [{ required: true, message: "请输入手机号" }],
    extraProps: {
      prefix: <Iconfont/>,
      placeholder: "手机号",
      style: {
        height: 40,
      },
    },
  },
  {
    name: "password",
    type: "text",
    label: "",
    rules: [{ required: true, message: "请输入登陆密码" }],
    extraProps: {
      prefix: <img alt={"password"} src={password} width={20} />,
      placeholder: "请输入登陆密码",
      style: {
        height: 40,
      },
      type: "password",
    },
  },
];

export default fieldsForm;
