import "./index.css";
import { MdHome } from "react-icons/md";
import { FaFireAlt } from "react-icons/fa";
import { IoGameController } from "react-icons/io5";
import { CiSaveDown2 } from "react-icons/ci";

const Slidebar = () => {
  return (
    <div className="sidebar-container">
      <ul className="sidebar-list-container">
        <li className="sidebar-list-item">
          <MdHome className="sidebar-icon" />
          <p>Home</p>
        </li>
        <li className="sidebar-list-item">
          <FaFireAlt className="sidebar-icon" />
          <p>Trending</p>
        </li>
        <li className="sidebar-list-item">
          <IoGameController className="sidebar-icon" />
          <p>Gaming</p>
        </li>
        <li className="sidebar-list-item">
          <CiSaveDown2 className="sidebar-icon" />
          <p>Saved Videos</p>
        </li>
      </ul>
    </div>
  );
};

export default Slidebar;
