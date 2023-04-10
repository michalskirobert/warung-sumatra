import { Hero } from "./hero";
import { Wrapper, DashboardContainer } from "./styles";

export const Dashboard = () => {
  return (
    <DashboardContainer>
      <Hero />
      <Wrapper>
        <div>Welcome</div>
      </Wrapper>
    </DashboardContainer>
  );
};
