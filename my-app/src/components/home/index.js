import { Component, useEffect, useState } from "react";
import Cookies from "js-cookie";
import Header from "../header";
import VideoItem from "../videoItem";
import Slidebar from "../sidebar";
import "./index.css";

class Home extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    const jwtToken = Cookies.get("jwt_token");
    const url = "https://apis.ccbp.in/videos/all";
    const options = {
      method: "GET",
      headers: {
        Authorization: `bearer ${jwtToken}`,
      },
    };
    const response = await fetch(url, options);
    const fetchData = await response.json();
    this.setState({
      data: fetchData.videos,
    });
  };

  render() {
    const { data } = this.state;
    return (
      <div className="home-page-bg-container">
        <Header />
        <div className="combined-container d-flex">
          <Slidebar />
          <div className="main-container">
            <div>Premium Container</div>
            <div>
              <input type="search" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
