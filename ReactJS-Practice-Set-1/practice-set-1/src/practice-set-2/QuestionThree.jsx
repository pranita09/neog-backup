const UserProfile = ({ user: { name, age, email } }) => {
    return (
      <div className="Component">
        <h1>User Details</h1>
        <p>Name: {name}</p>
        <p>Age: {age} yrs.</p>
        <p>Email ID: {email}</p>
      </div>
    );
  };
  
  export default UserProfile;
  