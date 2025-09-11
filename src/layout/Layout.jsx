import { Layout, Menu } from "antd";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./footer/Footer";

const { Content } = Layout;

const AppLayout = () => {
  const location = useLocation();

  return (
    <Layout style={{ minHeight: "100vh" }}>

      <Header />
      <Content>
        <Outlet />
      </Content>
      <Footer />
    </Layout>
  );
};

export default AppLayout;
