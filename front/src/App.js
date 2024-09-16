// import './App.css';
import { Flex, Layout } from 'antd';
import SiderMenu from "./components/SiderMenu";


const { Header, Footer, Sider, Content } = Layout;


function App() {

  const layoutStyle = {
    borderRadius: 8,
    overflow: 'hidden',
    width: '100%',
    maxWidth: '100%',
  };

  const siderStyle = {
    textAlign: 'center',
    lineHeight: '120px',
    widht: '100%',
    color: '#fff',
    backgroundColor: '#1677ff',
  };

  const headerStyle = {
    textAlign: 'center',
    color: '#fff',
    height: 64,
    paddingInline: 48,
    lineHeight: '64px',
    backgroundColor: '#4096ff',
  };

  const contentStyle = {
    textAlign: 'center',
    minHeight: '100%',
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#0958d9',
  };

  const footerStyle = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#4096ff',
  };

  return (
    <Flex gap="middle" wrap>
      <Layout style={layoutStyle}>
        <Sider width="25%" style={siderStyle}>
          <SiderMenu />
        </Sider>

        <Layout>
          <Content style={contentStyle}>Content</Content>
          <Footer style={footerStyle}>Footer</Footer>
        </Layout>

    </Layout>

    </Flex>

  );
}

export default App;
