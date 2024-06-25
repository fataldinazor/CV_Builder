export default function GeneralInformation(props) {
  function submitGenralInfo(event) {
    event.preventDefault();
    const formData= new FormData(event.target);
    const userName = formData.get("userName");
    const userContact = formData.get("userContact");
    const userMail = formData.get("userMail");
     
    const generalInfo={name:userName,contact:userContact, email:userMail};
    props.setGeneralInfo([generalInfo]);
  }

  return (
    <div className='genenalInformationForm'>
      <form onSubmit={submitGenralInfo}>
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
        <button type='submit'>Add</button>
      </form>
    </div>
  );
}
