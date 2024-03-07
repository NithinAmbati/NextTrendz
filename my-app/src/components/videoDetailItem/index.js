import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./index.css";
import Cookies from "js-cookie";

const VideoDetailItem = () => {
  const [data, setData] = useState({});
  const { id: rawId } = useParams();
  const id = rawId.replace(":", ""); // Remove ":" from the id

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const jwtToken = Cookies.get("jwt_token");
    const url = `https://apis.ccbp.in/videos/${id}`;
    console.log(url);
    const options = {
      method: "GET",
      headers: {
        Authorization: `bearer ${jwtToken}`,
      },
    };
    const response = await fetch(url, options);
    if (response.ok) {
      const fetchedData = await response.json();
      const formattedData = {
        title: fetchedData.video_details.title,
        videoUrl: fetchedData.video_details.video_url,
        thumbnailUrl: fetchedData.video_details.thumbnail_url,
        channel: {
          name: fetchedData.video_details.channel.name,
          profileImageUrl: fetchedData.video_details.channel.profile_image_url,
          subscriberCount: fetchedData.video_details.channel.subscriber_count,
        },
        videoCount: fetchedData.video_details.video_count,
        publishedAt: fetchedData.video_details.published_at,
        description: fetchedData.video_details.description,
      };
      setData(formattedData);
    }
  };

  const { thumbnailUrl, viewCount, publishedAt, title, channel } = data;
  return (
    <Link to="/videos/:id">
      <li className="video-list-item">
        <img src={thumbnailUrl} className="video-thumbnail-image" />
        <div className="d-flex">
          <div>
            <h5 className="video-item-heading">{title}</h5>
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

export default VideoDetailItem;
