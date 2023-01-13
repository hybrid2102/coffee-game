import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faInfo,
  faPlay,
  faQuestion,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <div className="px-3 py-2 text-bg-dark mb-4">
      <div className="container">
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <span className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
            <FontAwesomeIcon
              className="bi d-block mx-3 mb-1"
              icon={faCoffee}
              size="2xl"
            />
            <span className="fs-4">C-Coffee</span>
          </span>

          <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
            <HeaderItemLink to="/" key={0} icon={faPlay} text="play" />
            <HeaderItemLink to="/help" key={1} icon={faQuestion} text="help" />
            <HeaderItemLink to="/about" key={2} icon={faInfo} text="about" />
          </ul>
        </header>
      </div>
    </div>
  );
};

interface HeaderItemLinkProps {
  to: string;
  icon: IconDefinition;
  text: string;
}
const HeaderItemLink = (props: HeaderItemLinkProps) => {
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
