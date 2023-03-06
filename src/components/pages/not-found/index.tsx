import { CustomContainer } from "@components/shared";
import { useLocation } from "react-router-dom";

export const PageNotFound = () => {
  const location = useLocation();
  return (
    <CustomContainer>
      <div>
        <p>ERROR 404</p>
        Page not found "<b>{location.pathname}</b>"
      </div>
    </CustomContainer>
  );
};
