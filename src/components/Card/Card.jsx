import React, { useContext } from "react";
import { Card, Typography } from "antd";
import { Context } from "../Context";
const { Text } = Typography;

const Cards = ({ continent, country, today, deaths, cases }) => {
  const { covidResults, loading } = useContext(Context);
  return (
    <div>
      {covidResults ? (
        <Card
          type="inner"
          title={country}
          style={{ width: 330 }}
          key={cases.new}
          loading={loading}
        >
          <h4 style={{ color: "#1890ff" }}>
            New Cases:
            <Text type="secondary"> {cases.new} </Text>/ Deaths:
            <Text type="secondary"> {deaths.new}</Text>
          </h4>
          <h5>Continent: {continent}</h5>
          <h5>Total death: {deaths.total}</h5>
          <h5>Active: {cases.active}</h5>
          <p style={{ color: "#8c8c8c", fontSize: ".8em" }}>Date: {today}</p>
        </Card>
      ) : (
        loading
      )}
    </div>
  );
};

export default Cards;
