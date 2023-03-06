import { CustomContainer, CustomTable } from "@components/shared";

import pl from "@assets/images/flags/pl.svg";
import bh from "@assets/images/flags/bh.svg";
import eng from "@assets/images/flags/eng.svg";

export const MenuSettings = () => {
  return (
    <CustomContainer>
      <div>
        <h1>Menu settings</h1>
        {[pl, bh, eng].map((url) => (
          <div
            style={{
              marginTop: "10px",
              marginRight: "10px",
              display: "inline",
            }}
          >
            <img src={url} width={50} />
          </div>
        ))}
      </div>
      <CustomTable />
    </CustomContainer>
  );
};
