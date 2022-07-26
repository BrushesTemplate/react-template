import React, { FC } from "react";
import { loginFormParam } from "./config";
import "./loginStyle/index.scss";
import logo from "./static/logo.png";
import loginBg from "./static/loginBg.jpeg";
import Form from 'antd/es/form';
import { dynamicFormFields } from 'qin-form'
import { UserModal } from '@brushes/store';
import {Button, Checkbox} from 'antd';
import Wave from "./components/wave";
import * as url from "url";

const Login: FC = () => {
  const [form] = Form.useForm();
  const { loginImpl } = UserModal.useContainer();
  const onFinish = (values: any) => {
    loginImpl(values, 'saas-token')
  }
  return (
    <div className={"loginComponent"}>
      <Wave/>
      <div className="loginStyle">
        <div className="lPart" style={{backgroundImage: `url(${loginBg})`}}>
        </div>
        <div className="rPart">
          <h2>登录</h2>
          <div className="formWrap">
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
      </div>
      <img src={logo} alt="" className={'logo'}/>
    </div>
  );
};
export default Login;
