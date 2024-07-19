import React from "react";
import { Input } from "antd";

const { Search } = Input;

export default function SearchContainer() {
  const onSearch = (value, _e, info) => console.log(info?.source, value);
  return (
    <>
      <Search
        placeholder="O que você está procurando ?"
        variant="borderless"
        onSearch={onSearch}
        style={{
          width: 250,
          borderBottom: "solid 0.5px lightgray",
          borderRadius: 10,
        }}
      />
      {/* <Search size="large" variant="borderless" placeholder="O que você está procurando?" enterButton /> */}
    </>
  );
}
