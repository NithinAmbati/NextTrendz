import { Link } from "react-router-dom";
import "./index.css";

const VideoItem = (props) => {
  const { item } = props;
  const { id, thumbnailUrl, viewCount, publishedAt, title, channel } = item;
  return (
    <Link to={`/videos/:${id}`}>
      <li className="video-list-item">
        <img src={thumbnailUrl} className="video-thumbnail-image" />
        <div className="d-flex">
          <img src={channel.profileImageUrl} className="profile-image-url" />
          <div>
            <h5 className="video-item-heading">{title}</h5>
            <h4 className="video-item-heading">{channel.name}</h4>
            <div className="d-flex">
              <p>{viewCount}</p>
              <p>{publishedAt}</p>
            </div>
          </div>
        </div>
      </li>
    </Link>
  );
};

export default VideoItem;
