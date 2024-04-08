import { register} from "../../services/userService";
import { useNavigate } from "react-router-dom";
import {useDispatch } from "react-redux";
import { checkLogin } from "../../actions/login";
import generateToken from "../../helpers/generateToken";
import { checkExist } from "../../services/userService";
import {Form, Input, Button} from "antd";
import "./register.css";

function Register() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleSubmit = async (e) => {
    const fullname = e.fullName;
    const email = e.email;
    const password = e.password;
    const token = generateToken();
    const checkExistEmail = await checkExist("email", email);
    if(checkExistEmail.length > 0){
        alert("Email đăng kí đã tồn tại !");
    }else {
        const options = {
            fullname: fullname,
            email: email,
            password: password,
            token: token
        }
        const response = await register(options);
        if(response){ 
            dispatch(checkLogin(true));
            navigate("/");
        }else {
            alert("Đăng kí không thành công !");
        }
    }

   
    };

    return (
        <>
            <h2 className="formRegister-title">Đăng kí tài khoản</h2>
           <form className="form-register">
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
                className="form"
            >
                <Form.Item
                    label="Họ và tên"
                    name="fullname"
                    rules={[
                        {
                        required: true,
                        message: 'Please input your fullname!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                        required: true,
                        message: 'Please input your email!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Mật khẩu"
                    name="password"
                    rules={[
                        {
                        required: true,
                        message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                    <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit" className="buttonRegister">
                        Đăng kí
                    </Button>
                </Form.Item>
            </Form>
           </form>
        </>
    )
}
export default Register;