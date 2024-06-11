import { Input } from "antd";
import { SearchProps } from "antd/es/input";
import React from "react";

const { Search } = Input;

const USearch: React.FC = () => {
  const handleSearch: SearchProps["onSearch"] = (value) => {
    console.log(value);
  };

  return (
    <Search
      placeholder="Find Friends"
      onSearch={handleSearch}
      allowClear={true}
      style={{ width: 200, marginTop: 15 }}
    />
  );
};

export default USearch;
