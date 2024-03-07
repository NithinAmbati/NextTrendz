import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import "./App.css";
import Login from "./components/login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/login" Component={Login} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
