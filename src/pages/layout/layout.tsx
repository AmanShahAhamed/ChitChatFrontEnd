import React from "react";
import { Layout, theme } from "antd";
import PageHeader from "./header";
import UContent from "./content";

const { Content } = Layout;

const PageLayout: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={layoutStyle}>
      <PageHeader />
      <Content>
        <div
          style={{
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <UContent />
        </div>
      </Content>
      {/* <Footer style={{ textAlign: "center" }}>
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer> */}
    </Layout>
  );
};

export default PageLayout;

const layoutStyle: React.CSSProperties = {
  width: "100%",
  //   height: "90vh",
};
