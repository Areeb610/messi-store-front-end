import  { useState } from 'react';
import { Layout, Button, message } from 'antd';
import LoginComponent from '../../components/Login/Login';
import SignUp from '../../components/SignUp/SignUp';
import Navbar from '../../components/Navbar/navbar';
import Footer from '../../components/Footer/footer';
const { Content } = Layout;


const LoginSignupPage = () => {
  const [isLoginVisible, setIsLoginVisible] = useState(true);

  const handleToggleForm = () => {
    setIsLoginVisible(!isLoginVisible);
  };

  const handleLoginSuccess = () => {
    message.success('Login successful!');
  };

  return (
    <Layout>
     <Navbar />
      <Content
        style={{
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'black',
        }}
      >
        <div style={{ width: 400, padding: 24, borderRadius: 8, backgroundColor: '#001529', color: 'white' }}>
          <h1 style={{ textAlign: 'center', marginBottom: 20 }}>Welcome! Please register to continue</h1>

          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
            <Button onClick={handleToggleForm} style={{ marginRight: 10 }} type={isLoginVisible ? 'primary' : 'default'}>
              Login
            </Button>
            <Button onClick={handleToggleForm} type={isLoginVisible ? 'default' : 'primary'}>
              Signup
            </Button>
          </div>

          {isLoginVisible ? <LoginComponent onSuccess={handleLoginSuccess} /> : <SignUp />}
        </div>
      </Content>
      <Footer />
    </Layout>
  );
};

export default LoginSignupPage;
