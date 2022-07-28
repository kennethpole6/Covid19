import React from "react";
import { Typography } from "antd";
import "./footer.css";

const { Text } = Typography;
const Footer = () => {
  return (
    <div>
      <div className="footer">
        <Text type="secondary">
          Covid 19 Tracker ©2022 Created by Kenneth Pole
        </Text>
      </div>
    </div>
  );
};

export default Footer;
