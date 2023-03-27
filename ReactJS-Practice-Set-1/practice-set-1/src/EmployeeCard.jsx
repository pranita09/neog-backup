
const EmployeeCard = ({name, designation, workExperience}) => {
    return(
        <div style={{border: '1px solid black', borderRadius:'5px', margin: '10px auto',padding: '1rem', width: '50%', }}>
            <h1>{name}</h1>
            <p>Designation: {designation}</p>
            <p>Work Experience: {workExperience}</p>
        </div>
    );
}

export default EmployeeCard;