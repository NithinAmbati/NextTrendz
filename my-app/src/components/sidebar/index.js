import "./index.css";
import { MdHome } from "react-icons/md";
import { FaFireAlt } from "react-icons/fa";
import { IoGameController } from "react-icons/io5";
import { CiSaveDown2 } from "react-icons/ci";
import { Link } from "react-router-dom";
import { MdOutlineFacebook } from "react-icons/md";
import { FaTwitter } from "react-icons/fa6";
import { SiLinkedin } from "react-icons/si";
import "bootstrap/dist/css/bootstrap.css";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <ul className="sidebar-list-container">
        <Link to="/">
          <li className="sidebar-list-item">
            <MdHome className="sidebar-icon" />
            <p>Home</p>
          </li>
        </Link>
        <Link to="/trending">
          <li className="sidebar-list-item">
            <FaFireAlt className="sidebar-icon" />
            <p>Trending</p>
          </li>
        </Link>
        <Link to="/gaming">
          <li className="sidebar-list-item">
            <IoGameController className="sidebar-icon" />
            <p>Gaming</p>
          </li>
        </Link>
        <Link to="/saved-videos">
          <li className="sidebar-list-item">
            <CiSaveDown2 className="sidebar-icon" />
            <p>Saved Videos</p>
          </li>
        </Link>
      </ul>
      <div className="sidebar-bottom-container">
        <h6>CONTACT US</h6>
        <div>
          <MdOutlineFacebook className="facebook-icon" />
          <FaTwitter className="twitter-icon" />
          <SiLinkedin className="linkedin-icon" />
        </div>
        <p>Enjoy! Now too see your channels and recommendations!</p>
      </div>
    </div>
  );
};

export default Sidebar;
