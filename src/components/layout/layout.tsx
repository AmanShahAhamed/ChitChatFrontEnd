import React from "react";
import { Layout, theme } from "antd";
import PageHeader from "./header";

const { Content, Footer } = Layout;

const PageLayout: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={layoutStyle}>
      <PageHeader />
      <Content style={{ padding: "0 48px" }}>
        <div
          style={{
            background: colorBgContainer,
            padding: 24,
            borderRadius: borderRadiusLG,
          }}
        >
          <Content />
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default PageLayout;

const layoutStyle: React.CSSProperties = {
  width: "100%",
  //   height: "90vh",
};
