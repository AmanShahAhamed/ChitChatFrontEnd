import { Button, Space, Tooltip } from "antd";
import { FaVideo } from "react-icons/fa";
import { MdAddCall, MdCancel } from "react-icons/md";

const Extra: React.FC = () => {
  return (
    <Space>
      <Tooltip title={"Video Call"}>
        <Button
          type="text"
          icon={<FaVideo style={{ color: "#00b96b", fontSize: "20" }} />}
        />
      </Tooltip>
      <Tooltip title={"Audio Call"}>
        <Button
          type="text"
          icon={<MdAddCall style={{ color: "#00b96b", fontSize: "20" }} />}
        />
      </Tooltip>
      <Tooltip title={"Cancel"}>
        <Button
          type="text"
          icon={<MdCancel style={{ color: "red", fontSize: "20" }} />}
        />
      </Tooltip>
    </Space>
  );
};

export default Extra;
