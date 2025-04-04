import { useNavigate } from "react-router-dom";
import "./App.css";
import Homenav from "./components/homenav";

function App() {
  const navigate = useNavigate();

  return (
    <div style={{ overflow: "hidden" }}>
    <Homenav />
    <div className="landing-container">
      <div className="content">
        <h1>Join the Swiftie Community</h1>
        <p className="lightblue">
          A place for fans to celebrate Taylor Swift’s music, decode her lyrics,  
          and connect with fellow Swifties. Are you ready to begin?
        </p>
        <img src="../src/assets/image-Photoroom.png" alt="" id="mainphoto"/>
        <button onClick={() => navigate("/signin")} id="landing-button">Join Now</button>
      </div>
    </div>
    </div>
  );
}

export default App;
