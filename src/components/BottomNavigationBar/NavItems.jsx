import { Link } from "react-router-dom";
import "./NavItemsStyle.css";

const NavItems = ({ name, icon, to, isActive, onClick }) => {
  return (
    <Link
      to={to}
      onClick={onClick}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: isActive ? "#222" : "black",
        width: "100%",
        textDecoration: "none",
        position: "relative",
        height: "70px",
        zIndex: 3,
      }}
    >
      <span
        className={`nav-icon${isActive ? " active" : ""}`}
        style={{
          fontSize: "1.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "70px",
          width: "100%",
        }}
      >
        {icon}
      </span>
      <span
        className={`nav-text${isActive ? " active" : ""}`}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          fontWeight: 600,
          textAlign: "center",
          pointerEvents: "none",
        }}
      >
        {name}
      </span>
    </Link>
  );
};

export default NavItems;
