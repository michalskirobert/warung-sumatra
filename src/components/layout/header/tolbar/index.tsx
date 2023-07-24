import React from "react";

import { NLayout } from "@namespace/layout";
import { RenderTopbarElements } from "./render-elements";
import { useTopbarService } from "./service";
import { useDispatch } from "react-redux";
import { setIsLangOpen } from "@store/reducers/layout";

interface ITopbarProps {
  dataSource: NLayout.TTopbar[];
}

export const Topbar = ({ dataSource }: ITopbarProps) => {
  const { isLastItem } = useTopbarService();

  return (
    <div className="topbar">
      <div className="container">
        {dataSource.map(
          ({ icon, label, type, mailTo, path, phoneTo }, index) => (
            <React.Fragment key={label}>
              <RenderTopbarElements
                {...{ icon, label, type, mailTo, path, phoneTo }}
              />
              {!isLastItem(index, dataSource) ? (
                <div className="separator"></div>
              ) : null}
            </React.Fragment>
          )
        )}
      </div>
    </div>
  );
};
