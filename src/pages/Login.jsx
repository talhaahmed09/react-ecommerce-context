import { Button, Form, Input } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import { loginApi } from "../services/auth_service";

const Login = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || '/';

  const handleForm = (values) => {
    const response = loginApi(values);
    if(response.token) {
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
    <div className="w-100 p-4">
      {/* <div className="row justify-content-center">
        <div className="col-xs-12 col-sm-12 col-md-8 col-lg-6   column col-sm-offset-0 col-md-offset-2 col-lg-offset-3"> */}
      <Form
        name="basic"
        layout="horizontal"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 12 }}
        initialValues={{ remember: true }}
        onFinish={handleForm}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      {/* </div>
      </div> */}
    </div>
  );
};

export default Login;
