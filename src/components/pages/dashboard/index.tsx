import React from "react";
import { Image } from "react-bootstrap";

import logo from "@assets/images/utils/header/red_logo.png";

export const Dashboard = () => {
  return (
    <section {...{ className: "appContainer" }}>
      <Image {...{ src: logo, style: { maxWidth: "400px" } }} />
    </section>
  );
};
