import { PlusOutlined } from "@ant-design/icons";
import { iconStyle } from "../constant/style.constant";
import { Upload } from "antd";
import type { UploadFile, UploadProps } from "antd";
import React from "react";
import { RcFile } from "antd/es/upload";

const SelectFiles: React.FC = () => {
  const [fileList, setFileList] = React.useState<UploadFile[]>();

  const handleChange: UploadProps["onChange"] = ({ fileList: newFileList }) =>
    setFileList(newFileList);

  const handleUpload = (file: RcFile) => {
    console.log("File...", file);
    return "";
  };

  return (
    <Upload fileList={fileList} onChange={handleChange} action={handleUpload}>
      <PlusOutlined style={iconStyle} />
    </Upload>
  );
};

export default SelectFiles;
