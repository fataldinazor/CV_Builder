import React from "react"
import GeneralInformation from "./GeneralInformation"
import Education from "./Education"
import Experience from "./Experience"
import "../styles/Information.css"


export default function Information(props){

    return(
        
        <div className="information">
            <GeneralInformation setGeneralInfo={props.setGeneralInfo}/>
            <Education setEducationInfo={props.setEducationInfo} />
            <Experience setExperienceInfo={props.setExperienceInfo}/>
        </div>
    )
}
