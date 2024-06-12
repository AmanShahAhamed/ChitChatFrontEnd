import {
  Avatar,
  Button,
  Card,
  Flex,
  Input,
  Space,
  Tag,
  Typography,
} from "antd";
import Extra from "./components/Extra";
import { IoIosSend } from "react-icons/io";

const ChatScreen: React.FC = () => {
  const SendMessageInput = () => {
    return (
      <Input
        size="large"
        style={{ width: "80%" }}
        placeholder="Type Message Here...."
        addonAfter={
          <Space>
            <Button
              type="text"
              icon={<IoIosSend style={{ color: "#00b96b", fontSize: "20" }} />}
            />
          </Space>
        }
      />
    );
  };

  return (
    <Card
      title={<ChatPerson />}
      extra={<Extra />}
      actions={[<SendMessageInput />]}
    >
      Hey I am in Chat screen
    </Card>
  );
};

export default ChatScreen;

const ChatPerson = () => {
  return (
    <Flex gap={20}>
      <Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=2`} />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Typography.Text>Aman Shah Ahamed</Typography.Text>
        <Tag color={"green"} bordered={false}>
          Active
        </Tag>
      </div>
    </Flex>
  );
};
