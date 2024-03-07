import "./index.css";
import { Link } from "react-router-dom";

const GamingItem = (props) => {
  const { item } = props;
  const { id, thumbnailUrl, viewCount, title } = item;
  return (
    <Link to={`/videos/:${id}`}>
      <li className="video-list-item">
        <img src={thumbnailUrl} className="video-thumbnail-image" />
        <h5>{title}</h5>
        <p>{viewCount}</p>
      </li>
    </Link>
  );
};

export default GamingItem;
