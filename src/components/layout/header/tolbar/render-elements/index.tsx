import { ChooseLanguage } from "@components/shared/custom-language-choicer";
import { NLayout } from "@namespace/layout";

export const RenderTopbarElements = ({
  icon,
  label,
  type,
  mailTo,
  phoneTo,
  path,
}: NLayout.TTopbar) => {
  switch (type) {
    default:
      return null;
    case "language":
      return <ChooseLanguage />;
    case "address":
      return (
        <div className="topbar-item">
          <div className="icon">{icon}</div>

          <span className="span">{label}</span>
        </div>
      );
    case "div":
      return (
        <div className="topbar-item item-2">
          <div className="icon">{icon}</div>

          <span className="span">{label}</span>
        </div>
      );
    case "link":
      return (
        <a
          href={`${
            !!phoneTo ? `tel:${phoneTo}` : !!mailTo ? `mailto:${mailTo}` : path
          }`}
          className="topbar-item link"
        >
          <div className="icon">{icon}</div>

          <span className="span">{label}</span>
        </a>
      );
  }
};
