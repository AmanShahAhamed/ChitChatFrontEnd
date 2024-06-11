import { BellFilled } from "@ant-design/icons";
import { Badge, Space, Typography } from "antd";
import { Header } from "antd/es/layout/layout";
import React from "react";
import UserAvatar from "./UserAvatar";
import USearch from "./USearch";

const PageHeader: React.FC = () => {
  return (
    <Header style={headerStyle}>
      <div>
        <Typography.Text style={textStyle}>Hello Welcome back!</Typography.Text>
        <Typography.Text style={textStyle}>&nbsp; Let's Chat</Typography.Text>
      </div>
      <Typography.Title level={4} style={{ color: "#00b96b" }}>
        {"Chit ~ Chat"}
      </Typography.Title>
      <div>
        <Space size={50}>
          <USearch />
          <div style={{ marginTop: 10 }}>
            <Badge size="small" count={5}>
              <BellFilled
                style={{
                  fontSize: 25,
                  color: "#00b96b",
                  cursor: "pointer",
                }}
              />
            </Badge>
          </div>
          <UserAvatar />
        </Space>
      </div>
    </Header>
  );
};

export default PageHeader;

const textStyle = {
  color: "#00b96b",
};

const headerStyle: React.CSSProperties = {
  display: "flex",
  width: "100%",
  height: 70,
  justifyContent: "space-between",
  justifyItems: "space-between",
  background: "#0B2B26",
};
