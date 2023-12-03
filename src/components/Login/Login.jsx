import { Form, Input, Button, message } from 'antd';
import { useState } from 'react';
import PropTypes from 'prop-types';

const Login = ({ onSuccess }) => {

  Login.propTypes = {
    onSuccess: PropTypes.func.isRequired,
  };
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);
    console.log('Success:', values);

    try {
      // Send the form data to the backend API for login using fetch
      const response = await fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();
      console.log('Success:', data);

      // If the login is successful, call the onSuccess callback
      if (data.success) {
        setLoading(false);
        message.success('Login successful!');
        onSuccess();
      } else {
        setLoading(false);
        // Display an error message
        message.error(data.message || 'An error occurred during login.');
      }
    } catch (error) {
      console.error('Login error:', error);
      setLoading(false);
      // Display an error message
      message.error('An error occurred during login.');
    }
  };

  return (
    <div style={{ color: 'white' }}>
      <h2>Login</h2>
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item
          style={{ color: 'white' }}
          label="Email"
          name="email"
          rules={[{ required: true, type: 'email', message: 'Please enter a valid email' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please enter your password' }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" block loading={loading}>
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
