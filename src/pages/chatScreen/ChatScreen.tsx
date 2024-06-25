import { Avatar, Card, Col, Flex, Row, Space, Tag, Typography } from "antd";
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
import { IInputHandler, TMessageType } from "./constant/constant";
import { SendMessageInput } from "./components/sendMessageInput";
import ImageContainer from "./components/ImageContainer";

export interface IMessage {
  content: string;
  type: TMessageType;
  isReceived: boolean;
  caption?: string;
}

const receivedMsgs: IMessage[] = [
  {
    content: "Yaar tu to achha developer hai.",
    type: "string",
    isReceived: false,
  },
  {
    content: "Maza aa raha hai.",
    type: "string",
    isReceived: false,
  },
];

const ChatScreen: React.FC = () => {
  const [msg, setMsg] = React.useState<IMessage[]>(receivedMsgs);
  const [autoScroll] = useAutoScroll(msg);
  const sendMessageRef = React.useRef<IInputHandler>(null);
  const [isFileSelect, setIsFileSelect] = React.useState(false);
  const [selectedFileUrl, setSelectedFileUrl] = React.useState<string>("");
  const [imagePreview, setImagePreview] = React.useState<string[]>([]);

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const htmlParser = new Parser();

  const decrementOffset = React.useMemo<number>(() => {
    const length = imagePreview.length;
    if (length > 0) setIsFileSelect(true);
    return length === 0 ? 0 : (length + 1) * 2;
  }, [imagePreview?.length]);

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
            <Col>
              <Space direction="horizontal">
                {imagePreview.map((m, i) => {
                  if (i === 0) setSelectedFileUrl(m);
                  return (
                    <img
                      key={i}
                      src={m}
                      style={{ ...imageStyle, cursor: "pointer" }}
                      onClick={() => setSelectedFileUrl(m)}
                    />
                  );
                })}
                <div
                  style={{
                    ...imageStyle,
                    padding: "6px",
                    border: `2px solid black`,
                  }}
                >
                  <SelectFiles setPreview={setImagePreview} />
                </div>
              </Space>
            </Col>
            <Col span={2} offset={18 - decrementOffset}>
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
              <SelectFiles setPreview={setImagePreview} />,
            </Col>
            <Col span={20}>
              <SendMessageInput
                setMsg={setMsg}
                ref={sendMessageRef}
                placeholder="Type Message Here...."
              />
              ,
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
          <ImageContainer url={selectedFileUrl} />
          <SendMessageInput
            setMsg={setMsg}
            placeholder="Write a Caption"
            ref={sendMessageRef}
            width="80%"
          />
        </div>
      ) : (
        <UInfiniteScroll
          ref={autoScroll}
          height="60vh"
          data={msg.map((m) => m.content)}
          child={
            <ChatContainer>
              {msg.map((m, i) => (
                <MessageBox key={i} sent={i == 1 ? "true" : undefined}>
                  {htmlParser.parse(m.content.replace(/\n/g, "<br />"))}
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

const imageStyle: React.CSSProperties = {
  height: "6vh",
};
