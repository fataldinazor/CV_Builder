import { v4 as uuidv4 } from 'uuid';
import {useState} from "react";
import "../styles/experience.css"
import workIcon from "../assets/work.svg"

export default function Experience(props){

    const [showForm, setShowForm]=useState(false);
    const [currentEdit, setCurrentEdit]=useState(null);

    function submitExperienceForm(event){
        event.preventDefault();
        const formData=new FormData(event.target);
        const userJob=formData.get("userJob")
        const userCompany=formData.get("userCompany");
        const startDate=formData.get("startDate");
        const endDate= formData.get("endDate");
        const jobDescription=formData.get("jobDesc");

        const newExperienceInfo={id:(currentEdit?currentEdit.id:uuidv4()), title:userJob, company:userCompany, startDate: startDate, endDate: endDate, jobDescription: jobDescription }
        if(currentEdit){
            const updatedArray=props.experienceInfo.map(info=>
                info.id===currentEdit.id?newExperienceInfo:info
            )
            props.setExperienceInfo(updatedArray);
        }
        else{
            props.setExperienceInfo((prevInfo)=>[...prevInfo, newExperienceInfo])
        }
        setCurrentEdit(null);
        setShowForm(false);
    }
    
    function deleteGivenExperience(id){
        props.setExperienceInfo(props.experienceInfo.filter((info)=>info.id!==id))
    }
    
    function moveInfoUp(id){
        const index=props.experienceInfo.findIndex(info=>id===info.id);
        if(index>0){
            props.setExperienceInfo(prevInfo=>{
                const newInfo=[...prevInfo];
                [newInfo[index-1],newInfo[index]]=[newInfo[index], newInfo[index-1]];
                return newInfo;
            }
            )
        }
    }

    function moveInfoDown(id){
        const index=props.experienceInfo.findIndex(info=>id===info.id);
        if(index < props.experienceInfo.length-1){
            props.setExperienceInfo(prevInfo=>{
                const newInfo=[...prevInfo];
                [newInfo[index+1],newInfo[index]]=[newInfo[index], newInfo[index+1]];
                return newInfo;
            }
            )
        }
    }

    function editGivenEducationInfo(id){
        const infoArray=props.experienceInfo.find(info=>info.id===id);
        setCurrentEdit(infoArray);
        setShowForm(true);
    }

    function existingInfo(){
       return(
        <div className="editGivenInfo">
            {
                props.experienceInfo.map((info)=>(
                    <div key={info.id} className="givenExperienceBlock">
                        <div className="givenInfo">
                            <div className="editTitle">{info.title}</div>
                            <div>{info.company}</div>
                            <div>{info.startDate} to {info.endDate}</div>
                            <div>{info.jobDescription}</div>
                        </div>
                        <div className="editBtns">
                            <button onClick={()=>editGivenEducationInfo(info.id)}>📝</button>
                            <button onClick={()=>deleteGivenExperience(info.id)}>X</button>
                            <button onClick={()=>moveInfoUp(info.id)}>⬆️</button>
                            <button onClick={()=>moveInfoDown(info.id)}>⬇️</button>
                        </div>
                    </div>
                ))
            }
        </div>
       )
    }

    function getShowForm(){
        return(
            <div >
            <form className="experienceForm" onSubmit={submitExperienceForm}>
                <label htmlFor="jobTitle">Job Title:
                    <input type="text" id="jobTitle" name="userJob" placeholder="Enter Job Title" required defaultValue={currentEdit?currentEdit.title:""} />
                </label>
                <label htmlFor="company">Company: 
                    <input type="text" id="company" name="userCompany" placeholder="Enter Company" required defaultValue={currentEdit?currentEdit.company:""} />
                </label>
                <div className="dates">
                    <label htmlFor="startDate">Start Date:
                        <input type="date" placeholder="dd-mm-yyyy" id="startDate" name="startDate" required defaultValue={currentEdit?currentEdit.startDate:""} />
                    </label>
                    <label htmlFor="endDate">End Date:
                        <input type="date" placeholder="dd-mm-yyyy" id="endDate" name="endDate" required defaultValue={currentEdit?currentEdit.endDate:""}/>
                    </label>
                </div>
                <label htmlFor="description"> Job Description (max 150 characters):
                    <input type="text" id="description" name="jobDesc" placeholder="Enter Job Description" maxLength="150" defaultValue={currentEdit?currentEdit.jobDescription:""} />
                </label>
                <button type="submit">{currentEdit?"Update":"Add"}</button>
            </form>
        </div>       
        )
    }

    return (
        <div className="experienceFormDiv">
            <div className="experienceHeading">
                <div className="experienceTitle">
                    <img src={workIcon} alt="work Icon" />
                    <div>Experience</div>
                </div>
                <button className="showForm" onClick={()=>setShowForm(!showForm)}>{showForm?'☝️':'👇'}</button>
            </div>
            {showForm?getShowForm():""}   
            {(props.experienceInfo.length>0)?existingInfo():""}       
        </div>
    )
}
