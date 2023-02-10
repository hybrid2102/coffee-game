import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

interface HeaderItemLinkProps {
  to: string;
  icon: IconDefinition;
  text: string;
}
export const HeaderItemLink = (props: HeaderItemLinkProps) => {
  const { to, icon, text } = props;

  return (
    <li>
      <NavLink
        exact={true}
        to={to}
        className={(isActive) =>
          isActive ? "nav-link text-white" : "nav-link text-secondary"
        }
      >
        <FontAwesomeIcon
          className="bi d-block mx-auto mb-1"
          icon={icon}
          size="xl"
        />
        {text}
      </NavLink>
    </li>
  );
};
