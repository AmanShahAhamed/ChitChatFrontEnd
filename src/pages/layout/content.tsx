import { Col, Row } from "antd";
import React from "react";
import ContactList from "../contactList/ContactList";
import ChatScreen from "../chatScreen/ChatScreen";

const UContent: React.FC = () => {
  return (
    <Row>
      <Col span={12}>
        <ContactList />
      </Col>
      <Col span={12}>
        <ChatScreen />
      </Col>
    </Row>
  );
};

export default UContent;
