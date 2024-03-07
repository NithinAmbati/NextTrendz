import "./index.css";

const Header = () => {
  return (
    <div className="header-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
        className="header-logo"
      />
      <div>
        <button className="logout-button">Logout</button>
      </div>
    </div>
  );
};

export default Header;
