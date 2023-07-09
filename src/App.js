import "./App.css";
import AtMentorHub from "./components/AtMentorHub";
import Footer from "./components/Footer";
import HearfromOurMentors from "./components/HearfromOurMentors";
import Home from "./components/Home";
import JoinOurCommunityMentors from "./components/JoinOurCommunityMentors";
import MentorshipAreas from "./components/MentorshipAreas";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <div className="container" >
        <Navbar />
        <Home />
      </div>
      <div className="container-2">
      <AtMentorHub />
      </div>
      <MentorshipAreas />
      <JoinOurCommunityMentors />
      <HearfromOurMentors />
      <Footer />
    </div>
  );
}

export default App;
