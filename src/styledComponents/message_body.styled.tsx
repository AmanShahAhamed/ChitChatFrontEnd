import styled from "styled-components";

interface IMessageBoxProps {
  sent?: boolean;
}

export const MessageBox = styled.div<IMessageBoxProps>`
  max-width: 70%;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 10px;
  background-color: ${({ sent }) => (sent ? "#DCF8C6" : "#A0A0A0")};
  align-self: ${({ sent }) => (sent ? "flex-end" : "flex-start")};
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
`;

export const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: auto;
  overflow: hidden;
`;
