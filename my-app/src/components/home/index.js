import { Component, useEffect, useState } from "react";
import Cookies from "js-cookie";
import Header from "../header";
import VideoItem from "../videoItem";
import Sidebar from "../sidebar";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import Loader from "react-loader";

class Home extends Component {
  state = {
    data: [],
    isLoading: false,
  };

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    this.setState({ isLoading: true });
    const jwtToken = Cookies.get("jwt_token");
    const url = "https://apis.ccbp.in/videos/all";
    const options = {
      method: "GET",
      headers: {
        Authorization: `bearer ${jwtToken}`,
      },
    };
    const response = await fetch(url, options);
    if (response.ok) {
      const fetchData = await response.json();
      const formattedData = fetchData.videos.map((item) => ({
        title: item.title,
        id: item.id,
        thumbnailUrl: item.thumbnail_url,
        channel: {
          profileImageUrl: item.channel.profile_image_url,
          name: item.channel.name,
        },
        viewCount: item.view_count,
        publishedAt: item.published_at,
      }));
      console.log(formattedData);
      this.setState({
        data: formattedData,
        isLoading: false,
      });
    }
  };

  render() {
    const { data, isLoading } = this.state;
    return (
      <div className="home-page-bg-container">
        <Header />
        <div className="combined-container d-flex">
          <Sidebar />
          <div className="main-container">
            <div>Premium Container</div>
            <div>
              <input type="search" placeholder="search" className="search" />
              {isLoading ? (
                <div className="loader-container" data-testid="loader">
                  <Loader
                    type="ThreeDots"
                    color="#ffffff"
                    height="50"
                    width="50"
                  />
                </div>
              ) : (
                <ul className="videos-list-container">
                  {data.map((item) => (
                    <VideoItem item={item} />
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
