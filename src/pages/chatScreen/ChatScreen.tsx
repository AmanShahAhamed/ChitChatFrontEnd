import { Avatar, Card, Col, Flex, Row, Tag, Typography } from "antd";
import Extra from "./components/Extra";
import {
  ChatContainer,
  MessageBox,
} from "../../styledComponents/message_body.styled";
import React from "react";

import UInfiniteScroll from "../../components/InfiniteScroll";
import { useAutoScroll } from "../../hooks/useAutoScroll";
import { Parser } from "html-to-react";
import SelectFiles from "./components/SelectFile";
import { CloseOutlined, SendOutlined } from "@ant-design/icons";
import { iconStyle } from "./constant/style.constant";
import { IInputHandler } from "./constant/constant";
import { SendMessageInput } from "./components/sendMessageInput";
import ImageContainer from "./components/ImageContainer";

const receivedMsgs: string[] = [
  "Hii where are you Hii where are you Hii where are you Hii where are you Hii where are you",
  "kaha hai tu",
];

const ChatScreen: React.FC = () => {
  const [msg, setMsg] = React.useState<string[]>(receivedMsgs);
  const [autoScroll] = useAutoScroll(msg);
  const sendMessageRef = React.useRef<IInputHandler>(null);
  const [isFileSelect, setIsFileSelect] = React.useState(false);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const htmlParser = new Parser();

  const ChatAction: React.FC = () => {
    return (
      <>
        {isFileSelect ? (
          <Row>
            <Col span={2}>
              <CloseOutlined
                style={{ ...iconStyle, color: "red" }}
                onClick={() => setIsFileSelect(false)}
              />
            </Col>
            <Col span={2} offset={18}>
              <SendOutlined
                style={iconStyle}
                onClick={() => {
                  if (sendMessageRef.current)
                    sendMessageRef.current.inputHandler();
                }}
              />
            </Col>
          </Row>
        ) : (
          <Row>
            <Col span={2}>
              <SelectFiles />,
            </Col>
            <Col span={20}>
              <SendMessageInput setMsg={setMsg} ref={sendMessageRef} />,
            </Col>
            <Col span={2}>
              <SendOutlined
                style={iconStyle}
                onClick={() => {
                  if (sendMessageRef.current)
                    sendMessageRef.current.inputHandler();
                }}
              />
              ,
            </Col>
          </Row>
        )}
      </>
    );
  };

  return (
    <Card title={<ChatPerson />} extra={<Extra />} actions={[<ChatAction />]}>
      {isFileSelect ? (
        <div>
          <ImageContainer />
        </div>
      ) : (
        <UInfiniteScroll
          ref={autoScroll}
          height="60vh"
          data={msg as string[]}
          child={
            <ChatContainer>
              {msg.map((m, i) => (
                <MessageBox key={i} sent={i == 1 ? "true" : undefined}>
                  {htmlParser.parse(m.replace(/\n/g, "<br />"))}
                </MessageBox>
              ))}
            </ChatContainer>
          }
        />
      )}
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
