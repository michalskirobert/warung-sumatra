import { NGlobalConfig } from "@namespace/global-config";
import { CONSTANTS } from "@utils/index";
import { Link } from "react-router-dom";

interface IBookTable {
  language: NGlobalConfig.TLangCode;
}

export const BookTable = ({ language }: IBookTable) => {
  return (
    <Link className="btn btn-secondary" to={CONSTANTS.BOOK_TABLE_ROUTE}>
      <span className="text text-1">
        {CONSTANTS.BOOK_TABLE_LABEL[language]}
      </span>

      <span className="text text-2" aria-hidden="true">
        {CONSTANTS.BOOK_TABLE_LABEL[language]}
      </span>
    </Link>
  );
};
