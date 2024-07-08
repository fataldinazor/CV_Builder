import {useState} from "react";
import "../styles/generalInfo.css"
import personIcon from "../assets/person.svg"

export default function GeneralInformation(props) {
  const [showForm, setShowForm]= useState(false);
  const [currentEdit, setCurrentEdit]=useState(null);

  function submitGeneralInfo(event) {
    event.preventDefault();
    const formData= new FormData(event.target);
    const userName = formData.get("userName");
    const userContact = formData.get("userContact");
    const userMail = formData.get("userMail");
    const userLocation=formData.get("userLocation")

    const newGeneralInfo={name:userName,contact:userContact, email:userMail, location:userLocation};
    props.setGeneralInfo(newGeneralInfo);
    setCurrentEdit(null);
    setShowForm(false);
  }

  function editGeneralInfoForm(info){
    setCurrentEdit(info);
    setShowForm(true);
  }

  function existingInfo(){
    const info=props.generalInfo;
    return(
      <div className="editGeneralInfo">
        <div className="givenGeneralInfoBlock">
          <div className="name">{info.name}</div>
          <div>{info.contact}</div>
          <div>{info.email}</div>
          <div>{info.location}</div>
        </div>
        <button className="editBtn" onClick={()=>editGeneralInfoForm(props.generalInfo)}>📝</button>
      </div>
    )
  }

  function getShowForm(){
    return(
      <div className="form">
        <form className="generalInfoForm" onSubmit={submitGeneralInfo}>
          <label htmlFor='name'>
            Full Name:
            <input type='text' id='name' name='userName' placeholder="Enter Full Name" required defaultValue={currentEdit?currentEdit.name:""}/>
          </label>
          <label htmlFor='contact'>
            Phone Number:
            <input type='text' id='contact' name='userContact' placeholder="Enter Phone Number" required defaultValue={currentEdit?currentEdit.contact:""}/>
          </label>
          <label htmlFor='email'>
            Email:
            <input type='text' id='email' name='userMail' placeholder="Enter Personal Email" required defaultValue={currentEdit?currentEdit.email:""}/>
          </label>
          <label htmlFor='location'>
            Location:
            <input type='text' id='location' name='userLocation' placeholder="Enter Region/ Country" required defaultValue={currentEdit?currentEdit.location:""} />
          </label>
          <button type='submit'>{currentEdit ? 'Update' : 'Add'}</button>
        </form>
      </div> 
    )
  }

  return (
    <div className="generalInfoDiv">
      <div className="generalInfoHeading">
        <div className="generalInfoTitle">
          <img src={personIcon} alt="personIcon" />
           <div>General Information</div>
          </div>
        <button className="showForm" onClick={()=>setShowForm(!showForm)}>{showForm?'☝️':'👇'}</button>
      </div>
      {showForm?getShowForm():""}
      {Object.keys(props.generalInfo).length>0 ? existingInfo() : ""}
    </div>
  );
}
