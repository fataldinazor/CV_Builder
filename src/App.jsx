import { useState } from "react";
import "./styles/App.css";
import Information from "./components/Information";
import Preview from "./components/Preview";

function App() {
  const [generalInfo, setGeneralInfo] = useState({});
  const [educationInfo, setEducationInfo] = useState([]);
  const [experienceInfo, setExperienceInfo] = useState([]);
  return (
    <div className="app">
      <Information
        setGeneralInfo={setGeneralInfo}
        setEducationInfo={setEducationInfo}
        setExperienceInfo={setExperienceInfo}
      />
      <Preview
        generalInfo={generalInfo}
        educationInfo={educationInfo}
        experienceInfo={experienceInfo}
      />
    </div>
  )
}

export default App;
