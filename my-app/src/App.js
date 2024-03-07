import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import "./App.css";
import Login from "./components/login";
import SavedVideos from "./components/savedVideoRoute";
import Gaming from "./components/gamingRoute";
import Trending from "./components/trendingRoute";
import NotFound from "./components/notFoundRoute";
import VideoDetailItem from "./components/videoDetailItem";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/login" Component={Login} />
        <Route exact path="/saved-videos" Component={SavedVideos} />
        <Route exact path="/gaming" Component={Gaming} />
        <Route exact path="/trending" Component={Trending} />
        <Route exact path="/videos/:id" Component={VideoDetailItem}/>
        <Route Component={NotFound} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
