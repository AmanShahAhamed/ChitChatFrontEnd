import { Button, InputRef, Space } from "antd";
import React, { useRef } from "react";
import { IoIosSend } from "react-icons/io";
import { useMount } from "../../../hooks/useMount";
import TextArea from "antd/es/input/TextArea";

type KeyboardEvent = React.KeyboardEvent<HTMLInputElement>;
type setMessageAction = React.Dispatch<React.SetStateAction<string[]>>;

const keyController = {
  shift: false,
};

interface IProps {
  setMsg: setMessageAction;
}

const SendMessageInput: React.FC<IProps> = ({ setMsg }) => {
  const [value, setValue] = React.useState("");
  const inputRef = useRef<InputRef>(null);

  useMount(() => {
    if (inputRef.current) inputRef.current.focus();
  });

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
    <div>
      <TextArea
        className="hideScrollbar"
        autoSize={{ minRows: 1, maxRows: 6 }}
        ref={inputRef}
        size="large"
        style={{
          width: "80%",
          display: "flex",
          margin: "0 4rem",
          padding: 10,
          backgroundColor: "#fff",
        }}
        placeholder="Type Message Here...."
        onKeyDown={(e) => {
          if (e.key !== "Shift") return;
          keyController.shift = true;
        }}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
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
    </div>
  );
};

export default SendMessageInput;
