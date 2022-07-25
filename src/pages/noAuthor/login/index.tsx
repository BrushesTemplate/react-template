import React, { FC } from "react";
import { loginFormParam } from "./config";
import "./loginStyle/index.scss";
import logo from "./static/logo.jpg";
import Form from 'antd/es/form';
import { dynamicFormFields } from 'qin-form'
import { UserModal } from '@brushes/store';
import {Button, Checkbox} from 'antd';

const Login: FC = () => {
  const [form] = Form.useForm();
  const { loginImpl } = UserModal.useContainer();
  const onFinish = (values: any) => {
    loginImpl(values, 'saas-token')
  }
  return (
    <div className={"loginComponent"}>
      <div className="loginStyle">
        <img alt={"logo"} width={100} src={logo} />
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          { dynamicFormFields(loginFormParam, form)}
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>记住密码</Checkbox>
            </Form.Item>
            <a className="login-form-forgot" href="">
              忘记密码
            </a>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
export default Login;
