import React, { useContext } from "react";
import { Context } from "../Context";
import { Card } from "antd";
const SearchInput = () => {
  const { Search, inputRef, handleItems, country } = useContext(Context);
  return (
    <div>
      <Card title="Covid-19 Tracker (Global)" className="search-cards">
        <p>Note: Data will refresh automatically every 24 hours.</p>
        <Search
          placeholder="Search any countries..."
          allowClear
          enterButton="Search"
          size="large"
          ref={inputRef}
          value={country}
          onChange={handleItems}
        />
      </Card>
    </div>
  );
};

export default SearchInput;
