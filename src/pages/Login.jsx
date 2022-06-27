import { Button, Form, Input } from "antd";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth/AuthProvider";
import { LockOutlined, UserOutlined } from '@ant-design/icons';

const Login = () => {
  const {logIn} = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || '/';

  const handleForm = async (values) => {
    const data = await logIn(values);
    if(data.token) {
      navigate(from,{replace:true})
    }

    // const roles = response?.data?.roles;
    // setAuth({ user, pwd, roles, accessToken });
    // setUser("");
    // setPwd("");
    // navigate(from,{replace:true})
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="container ">
        <div className="d-flex flex-wrap align-items-center justify-content-center">
      <div className="p-3 h1 text-center">Login</div>
     
     <div className="container">
       <div className="d-flex justify-content-center">
     
      <Form
        name="basic"
        layout="horizontal"
        className="w-50"
        initialValues={{ remember: true }}
        onFinish={handleForm}
        onFinishFailed={onFinishFailed}
        autoComplete="off"

      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password   prefix={<LockOutlined className="site-form-item-icon" />}
          placeholder="Password"/>
        </Form.Item>

        <Form.Item  >
          <Button type="primary" htmlType="submit" className="w-50">
            Submit
          </Button>
          <div className="my-4 " style={{textAlign:'left'}}>New member? <Link to="/register">Register</Link> here</div>
        </Form.Item>
  
      </Form>
      </div>
      </div>
      </div>
    </div>
  );
};

export default Login;
