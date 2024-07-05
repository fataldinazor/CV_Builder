import React from 'react';
import "../styles/Preview.css"

export default function Preview({generalInfo, educationInfo, experienceInfo}) {
    return (
        <div className="previewDiv">
            <div className="previewPage">
                <div className="generalInfoPreview">
                    <div className="name">{generalInfo.name}</div>
                    {console.log(generalInfo)}
                    <div className="otherGenInfoPreview">
                        <div className="phoneNum">📞{generalInfo.contact}</div>
                        <div className="mail">📧{generalInfo.email}</div>
                        <div className="location">🏡{generalInfo.location}</div>
                    </div>
                </div>

                <div className="EducationInfoPreview">
                    {console.log(educationInfo)}
                    <div className="educationHeadingPreview">Education</div>
                    <div className='educationInfos'>
                        {
                            educationInfo.map((info)=>{
                                return(
                                    <div className="educationInfoBlock" key={info.id}>   
                                        <div className='degree_college'><span className='degree'>{info.degree}</span>, {info.college}</div>
                                        <div className="degreeDates">{info.startDate} to {info.endDate}</div>
                                        <div className="location">{info.city}, {info.country}</div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

                <div className="ExperienceInfoPreview">
                    {console.log(experienceInfo)}
                    <div className="experienceHeadingPreview">Experience</div>
                    <div className='experienceInfos'>
                        {
                            experienceInfo.map((info)=>{
                                return(
                                    <div className="experienceInfoBlock" key={info.id}>   
                                        <div className='job_company'><span className='job'>{info.title}</span>, {info.company}</div>
                                        <div className="jobDates">{info.startDate} to {info.endDate}</div>
                                        {/* <div className="location">{info.city}, {info.country}</div> */}
                                        <div className="jobDescription">{info.jobDescription}</div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
