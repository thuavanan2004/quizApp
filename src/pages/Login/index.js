import {login} from "../../services/userService";
import {setCookie} from "../../helpers/cookie";
import { useNavigate } from "react-router-dom";
import {useDispatch } from "react-redux";
import { checkLogin } from "../../actions/login";
import { Button, Form, Input } from 'antd';
import "./login.css";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    console.log(e);
    const email = e.email;
    const password = e.password;
    const response = await login(email, password);
    if(response.length > 0){
      setCookie("id", response[0].id, 1);
      setCookie("fullname", response[0].fullName, 1);
      setCookie("email", response[0].email, 1);
      setCookie("token", response[0].token, 1);

      dispatch(checkLogin(true));
      navigate("/");
    }else {
      alert("Đăng nhập không thành công !");
    }
  };

  return (
    <>
      <div className="login-container">
      <h2>Đăng nhập</h2>
      <Form
        onFinish={handleSubmit}
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        autoComplete="off"
      >
      <Form.Item
        label="Email"
        name="email"
        type="email"
        className="custom-input"
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Mật khẩu"
        name='password'
        type="password"
        className="custom-input"
      >
        <Input.Password  className="ant-input"/>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit" className="buttonLogin">
          Đăng nhập
        </Button>
      </Form.Item>
      </Form>

      </div>
    </>
  )
}
export default Login;