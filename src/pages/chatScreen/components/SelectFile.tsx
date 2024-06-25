import { PlusOutlined } from "@ant-design/icons";
import { iconStyle } from "../constant/style.constant";
import { Upload } from "antd";
import type { GetProp, UploadProps } from "antd";
import React from "react";
import { RcFile } from "antd/es/upload";

type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];
type TPreviewAction = React.Dispatch<React.SetStateAction<string[]>>;

interface ISelectFileProps {
  setPreview: TPreviewAction;
}

const getBase64 = (file: FileType): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

const SelectFiles: React.FC<ISelectFileProps> = ({ setPreview }) => {
  const handleChange: UploadProps["onChange"] = async ({
    fileList: newFileList,
  }) => {
    const res = await Promise.all(
      newFileList.map((file) => {
        return getBase64(file.originFileObj as FileType);
      })
    );
    console.log("Res...", res);
    setPreview((prev) => [...prev, ...res]);
  };

  const handleUpload = (file: RcFile) => {
    console.log("File...", file);
    return "";
  };

  return (
    <Upload onChange={handleChange} action={handleUpload} multiple={true}>
      <PlusOutlined style={iconStyle} />
    </Upload>
  );
};

export default SelectFiles;
