import "../styles/Preview.css"

const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
function getFormattedDate(date){
    if(date.toLowerCase()==="present")
        return date;
    const d=new Date(date);
    const month=months[d.getMonth()];
    const year= d.getFullYear();
    return (`${month}, ${year}`)
}

export default function Preview({generalInfo, educationInfo, experienceInfo}) {
    return (
        <div className="previewDiv">
            <div className="previewPage">
                <div className="generalInfoPreview">
                    <div className="name">{generalInfo.name}</div>
                    <div className="otherGenInfoPreview">
                        <div className="phoneNum">📞{generalInfo.contact}</div>
                        <div className="mail">📧{generalInfo.email}</div>
                        <div className="location">🏡{generalInfo.location}</div>
                    </div>
                </div>

                <div className="educationInfoPreview">
                    <div className="educationHeadingPreview">Education</div>
                    <div className='educationInfos'>
                        {
                            educationInfo.map((info)=>{
                                return(
                                    <div className="educationInfoBlock" key={info.id}>   
                                        <div className='degree_college'><span className='degree'>{info.degree}</span>, {info.college}</div>
                                        <div className="degreeDates">{getFormattedDate(info.startDate)} to {getFormattedDate(info.endDate)}</div>
                                        <div className="location">{info.city}, {info.country}</div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

                <div className="experienceInfoPreview">
                    <div className="experienceHeadingPreview">Experience</div>
                    <div className='experienceInfos'>
                        {
                            experienceInfo.map((info)=>{
                                return(
                                    <div className="experienceInfoBlock" key={info.id}>   
                                        <div className='job_company'><span className='job'>{info.title}</span>, {info.company}</div>
                                        <div className="jobDates">{getFormattedDate(info.startDate)} to {getFormattedDate(info.endDate)}</div>
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
