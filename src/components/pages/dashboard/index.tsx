import { CustomContainer } from "@components/shared";

import { Hero } from "./hero";

export const Dashboard = () => {
  return (
    <>
      <Hero />
      <CustomContainer {...{ title: "Welcome to Warung Sumatra" }}>
        <div>Welcome</div>
      </CustomContainer>
    </>
  );
};
