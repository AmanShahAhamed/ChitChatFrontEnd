import {
  KeyOutlined,
  LogoutOutlined,
  ProfileOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Dropdown, MenuProps, Space } from "antd";

const UserAvatar: React.FC = () => {
  const handleMenuClick: MenuProps["onClick"] = async (e) => {
    if (e.key === "1-1") {
      //change Password
    }
  };
  const items: MenuProps["items"] = [
    {
      key: "1",
      type: "group",
      label: `Welcome Aman Shah Ahamed`,
      children: [
        {
          label: "View Profile",
          key: "1-0",
          icon: <ProfileOutlined />,
        },
        {
          label: "Change Password",
          key: "1-1",
          icon: <KeyOutlined />,
        },
        {
          label: "Log Out",
          key: "1-2",
          icon: <LogoutOutlined />,
        },
      ],
    },
  ];
  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  return (
    <Dropdown menu={menuProps}>
      <Space>
        <Avatar
          size={40}
          icon={<UserOutlined />}
          style={{
            cursor: "pointer",
            backgroundColor: "#00b96b",
            color: "white",
          }}
        ></Avatar>
      </Space>
    </Dropdown>
  );
};
export default UserAvatar;
