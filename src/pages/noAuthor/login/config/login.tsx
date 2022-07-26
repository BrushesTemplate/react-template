import password from "../static/password.png";
import {FieldType} from 'qin-form/dist/esm/form/types';
import { QjIcon } from '@brushes/components'
const fieldsForm: Array<FieldType> = [
  {
    name: "loginName",
    type: "text",
    label: "",
    rules: [{ required: true, message: "请输入手机号" }],
    extraProps: {
      prefix: <QjIcon style={{ fontSize: '24px' }} name={'icon-user'}/>,
      placeholder: "手机号",
      style: {
        height: 40,
        marginBottom: 5
      },
    },
  },
  {
    name: "passwd",
    type: "text",
    label: "",
    rules: [{ required: true, message: "请输入登陆密码" }],
    extraProps: {
      prefix: <QjIcon style={{ fontSize: '24px' }} name={'icon-mima'}/>,
      placeholder: "请输入登陆密码",
      style: {
        height: 40,
        marginBottom: 5
      },
      type: "password",
    },
  },
];

export default fieldsForm;
