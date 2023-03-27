
const EmployeeCard = ({name, designation, workExperience}) => {
    return(
        <div style={{border: '1px solid black', borderRadius:'5px', margin: '10px auto',padding: '1rem', width: '40%', }}>
            <h1>{name}</h1>
            <p><span style={{color: "green"}}>Designation:</span> {designation}</p>
            <p><span style={{color: "blue"}}>Work Experience:</span> {workExperience}</p>
        </div>
    );
}

export default EmployeeCard;