import { v4 as uuidv4 } from 'uuid';

export default function Experience(props){
    function submitExperienceForm(event){
        event.preventDefault();
        const formData=new FormData(event.target);
        const userJob=formData.get("userJob")
        const userCompany=formData.get("userCompany");
        const startDate=formData.get("startDate");
        const endDate= formData.get("endDate");
        const jobDescription=formData.get("jobDesc");

        const newExperienceInfo={id:uuidv4(), title:userJob, company:userCompany, startDate: startDate, endDate: endDate, jobDescription: jobDescription }
        props.setExperienceInfo((prevInfo)=>[...prevInfo, newExperienceInfo])
    }

    return (
        <div className="experienceFormDiv">
            <div className="experienceHeading">Experience</div>
            <div className="experienceForm">
                <form onSubmit={submitExperienceForm}>
                    <label htmlFor="jobTitle">Job Title:
                        <input type="text" id="jobTitle" name="userJob" placeholder="Enter Job Title" />
                    </label>
                    <label htmlFor="company">Company: 
                        <input type="text" id="company" name="userCompany" placeholder="Enter Company" />
                    </label>
                    <label htmlFor="startDate">Start Date:
                        <input type="date" placeholder="dd-mm-yyyy" id="startDate" name="startDate" />
                    </label>
                    <label htmlFor="endDate">End Date:
                        <input type="date" placeholder="dd-mm-yyyy" id="endDate" name="endDate" />
                    </label>
                    <label htmlFor="description"> Job Description:
                        <textarea id="description" name="jobDesc" placeholder="Enter Job Description" rows="2" cols="50"/>
                    </label>
                    <button type="submit">Add</button>
                </form>
            </div>            
        </div>
    )
}
