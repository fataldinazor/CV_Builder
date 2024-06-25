import React from "react"
import GeneralInformation from "./GeneralInformation"
import Education from "./Education"
import Experience from "./Experience"

export default function Information(props){

    return(
        
        <div className="informationForm">
            <GeneralInformation setGeneralInfo={props.setGeneralInfo}/>
            <Education setEducationInfo={props.setEducationInfo} />
            <Experience setExperienceInfo={props.setExperienceInfo}/>
        </div>
    )
}
