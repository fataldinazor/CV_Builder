import { v4 as uuidv4 } from 'uuid';
export default function Education(props){
    function submitEducationInfo(event){
        event.preventDefault();
        const formData= new FormData(event.target);
        const userDegree=formData.get("userDegree");
        const userCollege=formData.get("userCollege");
        const userCity=formData.get("userCity");
        const userCountry=formData.get("userCountry");
        const userStartDate=formData.get("userStartDate");
        const userEndDate=formData.get("userEndDate")

        const newEducationInfo={id:uuidv4(), degree:userDegree, college:userCollege, city:userCity, country:userCountry, startDate: userStartDate, endDate: userEndDate}
        props.setEducationInfo(prevInfo=>[...prevInfo,newEducationInfo] )
    }

    return(
        <div className="educationFormDiv">
            <div className="educationHeading">Education</div>
            <div className="educationForm">
                <form onSubmit={submitEducationInfo}>
                    <label htmlFor="degree">Degree:
                        <input type="text" placeholder="Enter Degree/ Field of Study" name="userDegree" id="degree"/>
                    </label>
                    <label htmlFor="school">School:
                        <input type="text" placeholder="Enter School/ University" name="userCollege" id="school"/>
                    </label>
                    <label htmlFor="city">City:
                        <input type="text" placeholder="Enter City" name="userCity" id="city"/>
                    </label>
                    <label htmlFor="country">Country:
                        <input type="text" placeholder="Enter country" name="userCountry" id="country"/>
                    </label>
                    <label htmlFor="startDate">Start Date:
                        <input type="date" placeholder="dd-mm-yyyy" name="userStartDate" id="startDate"/>
                    </label>
                    <label htmlFor="endDate">End Date:
                        <input type="date" placeholder="dd-mm-yyyy" name="userEndDate" id="endDate"/>
                    </label>
                    <button type="submit"> Add</button>
                </form>
            </div>
            <div className="editGivenInfo">

            </div>
        </div>
    )
}