import React, { FC } from "react";
import { loginFormParam } from "./config";
// import { useAuth } from "libs/context/authorityProvider";
// import { useBackground } from "libs/hooks";
import "./loginStyle/index.scss";
import logo from "./static/logo.jpg";
import {DynamicForm} from 'qin-form'

const Login: FC = () => {

  const onConfirm = () => {

  }
  return (
    <div className={"loginComponent"}>
      <div className="loginStyle">
        <img alt={"logo"} width={100} src={logo} />
        <DynamicForm
          saveText={"登录"}
          onSubmit={onConfirm}
          fields={loginFormParam}
        />
      </div>
    </div>
  );
};
export default Login;
