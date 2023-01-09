import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

export const Header = () => {
  return (
    <header className="py-3 mb-4 border-bottom">
      <FontAwesomeIcon icon={faCoffee} size="2xl" />
      <span className="fs-3"> Gioco Caffè</span>
    </header>
  );
};
