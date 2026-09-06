import { navigation } from "../../data/navigation";
import "./Navigation.css";
import { Link } from "react-router-dom";

interface NavigationProps {
  isOpen: boolean;
  onNavigate: () => void;
}

function Navigation({
  isOpen,
  onNavigate,
}: NavigationProps) {
  return (
    <nav
      className={`navigation ${isOpen ? "navigation-open" : ""}`}
      aria-hidden={!isOpen}
    >
      <div className="navigation-inner">

        <p className="navigation-label">
          MENU
        </p>

        <div className="navigation-links">
          {navigation.map((item, index) => (
            <Link
              key={item.path}
              to={item.path}
              className="navigation-link"
              onClick={onNavigate}
            >
              <span className="navigation-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="navigation-name">
                {item.label}
              </span>
            </Link>
          ))}
        </div>

      </div>
    </nav>
  );
}

export default Navigation;