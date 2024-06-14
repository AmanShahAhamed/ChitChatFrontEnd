import { Avatar, Card, Flex, Tag, Typography } from "antd";
import Extra from "./components/Extra";
import {
  ChatContainer,
  MessageBox,
} from "../../styledComponents/message_body.styled";
import React from "react";

import SendMessageInput from "./components/sendMessageInput";
import UInfiniteScroll from "../../components/InfiniteScroll";
import { useAutoScroll } from "../../hooks/useAutoScroll";

const receivedMsgs: string[] = [
  "Hii where are you Hii where are you Hii where are you Hii where are you Hii where are you",
  "kaha hai tu",
];

const ChatScreen: React.FC = () => {
  const [msg, setMsg] = React.useState<string[]>(receivedMsgs);
  const [autoScroll] = useAutoScroll(msg);
  console.log("Chat screen rerender..");

  return (
    <Card
      title={<ChatPerson />}
      extra={<Extra />}
      actions={[<SendMessageInput setMsg={setMsg} />]}
    >
      <UInfiniteScroll
        ref={autoScroll}
        height="60vh"
        data={msg as string[]}
        child={
          <ChatContainer>
            {msg.map((m, i) => (
              <MessageBox key={i} sent={i == 1 ? true : false}>
                {m}
              </MessageBox>
            ))}
          </ChatContainer>
        }
      />
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
