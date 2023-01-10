import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faInfo,
  faPlay,
  faQuestion,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="px-3 py-2 text-bg-dark">
      <div className="container">
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <span className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
            <FontAwesomeIcon
              className="bi d-block mx-3 mb-1"
              icon={faCoffee}
              size="2xl"
            />
            <span className="fs-4">Coffe Game</span>
          </span>

          <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
            <li>
              <Link to="/" className="nav-link text-white">
                <FontAwesomeIcon
                  className="bi d-block mx-auto mb-1"
                  icon={faPlay}
                  size="xl"
                />
                Play
              </Link>
            </li>
            <li>
              <Link to="/help" className="nav-link text-white">
                <FontAwesomeIcon
                  className="bi d-block mx-auto mb-1"
                  icon={faQuestion}
                  size="xl"
                />
                Help
              </Link>
            </li>
            <li>
              <Link to="/about" className="nav-link text-white">
                <FontAwesomeIcon
                  icon={faInfo}
                  className="bi d-block mx-auto mb-1"
                  size="xl"
                />
                About
              </Link>
            </li>
          </ul>
        </header>
      </div>
    </div>
  );
};
