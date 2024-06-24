import { InputRef } from "antd";
import React, { useRef } from "react";
import { useMount } from "../../../hooks/useMount";
import TextArea from "antd/es/input/TextArea";
import { IInputHandler } from "../constant/constant";

type KeyboardEvent = React.KeyboardEvent<HTMLInputElement>;
type setMessageAction = React.Dispatch<React.SetStateAction<string[]>>;

const keyController = {
  shift: false,
};

interface IProps {
  setMsg: setMessageAction;
}

export const SendMessageInput = React.forwardRef<IInputHandler, IProps>(
  ({ setMsg }, ref) => {
    const [value, setValue] = React.useState("");
    const inputRef = useRef<InputRef>(null);

    const enterHandler = () => {
      if (value === "") return;
      setMsg((prev) => [...prev, value]);
      setValue("");
      if (inputRef.current) inputRef.current.focus();
    };

    React.useImperativeHandle(ref, () => ({
      inputHandler: enterHandler,
    }));

    useMount(() => {
      if (inputRef.current) inputRef.current.focus();
    });

    useMount(() => {
      if (inputRef.current) {
        /* empty */
      }
    }, [value.split("\n").length]);

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === "Enter" && keyController.shift) {
        console.log("Event...", inputRef.current);
      }
      if (e.key === "Enter" && !keyController.shift) enterHandler();
      if (e.key === "Shift") keyController.shift = false;
    };

    return (
      <TextArea
        className="hideScrollbar"
        autoSize={{ minRows: 1, maxRows: 6 }}
        ref={inputRef}
        size="large"
        style={{
          padding: 10,
        }}
        placeholder="Type Message Here...."
        onKeyDown={(e) => {
          if (e.key !== "Shift") return;
          keyController.shift = true;
        }}
        eslint-disable-next-line
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        onKeyUp={handleKeyUp}
        value={value}
        onChange={(e) => setValue(() => e.target.value)}
      />
    );
  }
);
