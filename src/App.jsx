import { useState } from "react";
import "./styles/App.css";
import Information from "./components/Information";
import Preview from "./components/Preview";

function App() {
  const [generalInfo, setGeneralInfo] = useState({name:"Fatal Dinazor", contact:"+91 9654015XXX", email:"dinazor.fatal@email.com" ,location:"Delhi, India"});
  const [educationInfo, setEducationInfo] = useState([{id:1, degree:"Bachelors In Engineering", college:"National Institute Of Engineering", city:"Mysore", country:"India", startDate:"2020-02-03", endDate:"2024-06-05",},{id:2, degree:"Senior Secondary", college:"MM Public School", city:"Delhi", country:"India", startDate:"2018-04-03", endDate:"2020-05-20"},{id:3, degree:"High School", college:"Kulachi Hansraj Public School ", city:"Delhi", country:"India", startDate:"2016-03-03", endDate:"2018-04-20",}]);
  const [experienceInfo, setExperienceInfo] = useState([{id:4, title:"Project Intern", company:"Software Company", startDate:"2024-02-02", endDate:"2024-06-28", jobDescription:"Working in the automotive industry"},{id:5, title:"Project Intern", company:"Software Company", startDate:"2024-07-02", endDate:"Present", jobDescription:"Working in the automotive industry as a associate Engineer"}]);
  return (
    <div className="app">
      <Information
        setGeneralInfo={setGeneralInfo}
        generalInfo={generalInfo}
        setEducationInfo={setEducationInfo}
        educationInfo={educationInfo}
        setExperienceInfo={setExperienceInfo}
        experienceInfo={experienceInfo}
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
