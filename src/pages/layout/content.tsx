import { Col, Row } from "antd";
import React from "react";
import ContactList from "../contactList/ContactList";
import ChatScreen from "../chatScreen/ChatScreen";

const UContent: React.FC = () => {
  return (
    <Row>
      <Col span={8}>
        <ContactList />
      </Col>
      <Col span={16}>
        <ChatScreen />
      </Col>
    </Row>
  );
};

export default UContent;
