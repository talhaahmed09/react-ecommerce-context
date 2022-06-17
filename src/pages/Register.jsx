import {
  Cascader,
  Form,
  Input,
  Checkbox,
  Button,
  Select,
  DatePicker,
} from "antd";
import Password from "antd/lib/input/Password";
import { Option } from "antd/lib/mentions";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { emailCheck, registerUser } from "../services/auth_service";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

let userError = "";

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const config = {
  rules: [
    {
      type: "object",
      required: true,
      message: "Please select time!",
    },
  ],
};

const Register = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  let isUserFound = false;

  const userCheck = async (user) => {
    console.log(user);
    const { data } = await emailCheck(user);
    isUserFound = false;
    if (data.users.length) {
      isUserFound = true;
      return Promise.reject("User Already exist");
    }
  };
  
  function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

  const handleForm = async (values) => {
      debugger;
    if (!values.agreement || isUserFound) {
      return;
    }
    const user = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      phone: "92" + values.phone,
      username: values.username,
      password: values.password,
      age: getAge(values.datePicker),
      gender: values.gender
    };
    const data = await registerUser(user);
    if (data) {
      navigate("/login");
    }
  };

  return (
    <div className="w-100 p-4">
    <h1 className="p-4 text-center " >Register</h1>
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      colon={false}
      labelAlign="left"
      labelWrap
      wrapperCol={{
        flex: 1,
      }}
      scrollToFirstError
      onFinish={handleForm}
    >
      <Form.Item
        name="firstName"
        label="First Name"
        rules={[{ required: true, message: "Please input your First Name" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="lastName"
        label="Last Name"
        rules={[{ required: true, message: "Please input your Last Name" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: "email",
            message: "The input is not valid E-mail!",
          },
          {
            required: true,
            message: "Please input your E-mail!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="username"
        label="Username"
        tooltip="What do you want others to call you?"
        rules={[
          {
            pattern: USER_REGEX,
            required: true,
            message: "Please input your username!",
          },
          () => ({
            validator(_, value) {
              return userCheck(value);
            },
          }),
        ]}
        validateTrigger="onBlur"
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            pattern: PWD_REGEX,
            required: true,
            message: "Please input your password!",
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={["password"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please confirm your password!",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error("The two passwords that you entered do not match!")
              );
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item name="datePicker" label="DatePicker" {...config}>
        <DatePicker />
      </Form.Item>

      <Form.Item
        name="residence"
        label="Address"
        rules={[{ required: true, message: "Address is required" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="phone"
        label="Phone Number"
        rules={[{ required: true, message: "Please input your phone number!" }]}
      >
        <Input addonBefore="+92" style={{ width: "100%" }} />
      </Form.Item>
      <Form.Item
        name="gender"
        label="Gender"
        rules={[
          {
            required: true,
            message: "Please select gender!",
          },
        ]}
      >
        <Select placeholder="select your gender">
          <Option value="male">Male</Option>
          <Option value="female">Female</Option>
          <Option value="other">Other</Option>
        </Select>
      </Form.Item>

      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value
                ? Promise.resolve()
                : Promise.reject(new Error("Should accept agreement")),
          },
        ]}
        {...tailFormItemLayout}
      >
        <Checkbox>
          I have read the <a href="">agreement</a>
        </Checkbox>
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
    </div>
  );
};

export default Register;
