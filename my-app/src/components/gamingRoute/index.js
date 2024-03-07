import { Component, useEffect, useState } from "react";
import Cookies from "js-cookie";
import Header from "../header";
import VideoItem from "../videoItem";
import Sidebar from "../sidebar";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import GamingItem from "../gamingItem";
import Loader from "react-loader";

class Gaming extends Component {
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
    const url = "https://apis.ccbp.in/videos/gaming";
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
        viewCount: item.view_count,
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
                    <GamingItem item={item} />
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
export default Gaming;
