import GeneralInformation from "./GeneralInformation"
import Education from "./Education"
import Experience from "./Experience"
import "../styles/Information.css"


export default function Information(props){

    return(
        <div className="leftSide">
            <div className="header">
                CV Generator
            </div>
            <div className="information">
                <GeneralInformation setGeneralInfo={props.setGeneralInfo} generalInfo={props.generalInfo}/>
                <Education setEducationInfo={props.setEducationInfo} educationInfo={props.educationInfo} />
                <Experience setExperienceInfo={props.setExperienceInfo} experienceInfo={props.experienceInfo}/>
            </div>
            <div className="footer">
                {new Date().getFullYear()}. All Rights Reserved. CV Application
            </div>
        </div>
    )
}
