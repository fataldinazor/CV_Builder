export default function GeneralInformation(props) {
  function submitGeneralInfo(event) {
    event.preventDefault();
    const formData= new FormData(event.target);
    const userName = formData.get("userName");
    const userContact = formData.get("userContact");
    const userMail = formData.get("userMail");
    const userLocation=formData.get("userLocation")

    const generalInfo={name:userName,contact:userContact, email:userMail, location:userLocation};
    console.log(generalInfo);
    props.setGeneralInfo(generalInfo);
  }

  return (
    <div className='generalInformationForm'>General Information
      <form onSubmit={submitGeneralInfo}>
        <label htmlFor='name'>
          Full Name:
          <input type='text' id='name' name='userName' />
        </label>
        <label htmlFor='contact'>
          Phone Number:
          <input type='text' id='contact' name='userContact' />
        </label>
        <label htmlFor='email'>
          Email:
          <input type='text' id='email' name='userMail' />
        </label>
        <label htmlFor='location'>
          Location:
          <input type='text' id='location' name='userLocation' />
        </label>
        <button type='submit'>Add</button>
      </form>
    </div>
  );
}
