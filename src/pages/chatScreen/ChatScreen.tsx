import {
  Avatar,
  Button,
  Card,
  Flex,
  Input,
  InputRef,
  Space,
  Tag,
  Typography,
} from "antd";
import Extra from "./components/Extra";
import { IoIosSend } from "react-icons/io";
import {
  ChatContainer,
  MessageBox,
} from "../../styledComponents/message_body.styled";
import React, { useRef } from "react";
import { useMount } from "../../hooks/useMount";

const receivedMsgs: string[] = [
  "Hii where are you Hii where are you Hii where are you Hii where are you Hii where are you",
  "kaha hai tu",
];

type KeyboardEvent = React.KeyboardEvent<HTMLInputElement>;

const keyController = {
  shift: false,
};

const ChatScreen: React.FC = () => {
  const [msg, setMsg] = React.useState(receivedMsgs);
  const [value, setValue] = React.useState("");
  const inputRef = useRef<InputRef>(null);

  useMount(() => {
    if (inputRef.current) inputRef.current.focus();
  });

  const SendMessageInput = () => {
    const enterHandler = () => {
      console.log("enter is press");
      if (value === "") return;
      setMsg((prev) => [...prev, value]);
      setValue("");
      if (inputRef.current) inputRef.current.focus();
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (keyController.shift && e.key === "Enter") {
        console.log("Some logic");
      }
      if (e.key === "Enter" && !keyController.shift) enterHandler();
      if (e.key === "Shift") keyController.shift = false;
    };

    return (
      <Input
        ref={inputRef}
        size="large"
        style={{
          width: "80%",
          display: "flex",
          padding: 10,
          backgroundColor: "#fff",
        }}
        placeholder="Type Message Here...."
        onKeyDown={(e) => {
          if (e.key !== "Shift") return;
          keyController.shift = true;
        }}
        onKeyUp={handleKeyUp}
        value={value}
        onChange={(e) => setValue(() => e.target.value)}
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
      <ChatContainer>
        {msg.map((m, i) => (
          <MessageBox key={i} sent={i == 1 ? true : false}>
            {m}
          </MessageBox>
        ))}
      </ChatContainer>
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
