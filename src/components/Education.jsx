import { v4 as uuidv4 } from 'uuid';
import {useState} from "react";
import "../styles/educationInfo.css"
import educationIcon from "../assets/education.svg"

export default function Education(props){
const [showForm, setShowForm]=useState(false);
const [currentEdit, setCurrentEdit]=useState(null);

    function submitEducationInfo(event){
        event.preventDefault();
        const formData= new FormData(event.target);
        const userDegree=formData.get("userDegree");
        const userCollege=formData.get("userCollege");
        const userCity=formData.get("userCity");
        const userCountry=formData.get("userCountry");
        let userStartDate=formData.get("userStartDate");
        let userEndDate=formData.get("userEndDate");           

        const newEducationInfo={id: (currentEdit ? currentEdit.id : uuidv4()), degree:userDegree, college:userCollege, city:userCity, country:userCountry, startDate: userStartDate, endDate: userEndDate}
        if(currentEdit){
            props.setEducationInfo(prevInfo=>
                    prevInfo.map(info=>
                        info.id===currentEdit.id? newEducationInfo:info
                )
            );
        }
        else{
            props.setEducationInfo(prevInfo=>[...prevInfo,newEducationInfo] )
        }
        setShowForm(false);
        setCurrentEdit(null);
    }

    function deleteGivenEducation(id){
        props.setEducationInfo(props.educationInfo.filter((info)=>info.id!==id))
    }
    function editGivenEducationInfo(id){
        const editInfo=props.educationInfo.find((info)=>info.id===id);
        setCurrentEdit(editInfo);
        setShowForm(true);
    }

    function moveInfoUp(id) {
        const index=props.educationInfo.findIndex(info=>info.id===id);
        if (index > 0) {
            props.setEducationInfo(prevInfo => {
                const newInfo = [...prevInfo];
                [newInfo[index - 1], newInfo[index]] = [newInfo[index], newInfo[index - 1]];
                return newInfo;
            });
        }
    }
    
    function moveInfoDown(id) {
        const index=props.educationInfo.findIndex(info=>info.id===id);
        if (index < props.educationInfo.length - 1) {
            props.setEducationInfo(prevInfo => {
                const newInfo = [...prevInfo];
                [newInfo[index], newInfo[index + 1]] = [newInfo[index + 1], newInfo[index]];
                return newInfo;
            });
        }
    }

    function existingInfo(){
        return(
            <div className="editGivenInfo">
            {props.educationInfo.map((info)=>(
                <div key={info.id} className="givenEducationBlock">
                    <div className="givenInfo">
                        <div className="editDegree">{info.degree}</div>
                        <div>{info.college}</div>
                        <div>{info.city}, {info.country}</div>
                        <div>{info.startDate} to {info.endDate}</div>
                    </div>
                    <div className="editBtns">
                        <button onClick={()=>editGivenEducationInfo(info.id)}>📝</button>
                        <button onClick={()=>deleteGivenEducation(info.id)}>X</button>
                        <button onClick={()=>moveInfoUp(info.id)}>⬆️</button>
                        <button onClick={()=>moveInfoDown(info.id)}>⬇️</button>
                    </div>
                </div>
            ))}
        </div>
        )
    }

    function getShowForm(){
        return(
            <div>
                <form className="educationForm" onSubmit={submitEducationInfo}>
                    <label htmlFor="degree">Degree:
                        <input type="text" placeholder="Enter Degree/ Field of Study" name="userDegree" id="degree" defaultValue={currentEdit?currentEdit.degree:""} required/>
                    </label>
                    <label htmlFor="school">School:
                        <input type="text" placeholder="Enter School/ University" name="userCollege" id="school" defaultValue={currentEdit?currentEdit.college:""} required/>
                    </label>
                    <label htmlFor="city">City:
                        <input type="text" placeholder="Enter City" name="userCity" id="city" defaultValue={currentEdit?currentEdit.city:""} required/>
                    </label>
                    <label htmlFor="country">Country:
                        <input type="text" placeholder="Enter country" name="userCountry" id="country" defaultValue={currentEdit?currentEdit.country:""} required/>
                    </label>
                    <div className="dates">
                    <label htmlFor="startDate">Start Date:
                        <input type="date" placeholder="dd-mm-yyyy" name="userStartDate" id="startDate" defaultValue={currentEdit?currentEdit.startDate:""} required/>
                    </label>
                    <label htmlFor="endDate">End Date:
                        <input type="date" placeholder="dd-mm-yyyy" name="userEndDate" id="endDate" defaultValue={currentEdit?currentEdit.endDate:""} required/>
                    </label>
                    </div>
                    <button type="submit"> {currentEdit ? 'Update' : 'Add'}</button>
                </form>
            </div>
        )
    }

    return(
        <div className="educationFormDiv">
            <div className="educationHeading">
                <div className="educationInfoTitle">
                    <img src={educationIcon} alt="education logo" />
                    <div>Education</div>
                    </div>
                <button className="showForm" onClick={()=>setShowForm(!showForm)}>{showForm?'☝️':'👇'}</button>
            </div>
            {showForm?getShowForm():""}
            {(props.educationInfo.length>0)?existingInfo():""}
        </div>
    )
}