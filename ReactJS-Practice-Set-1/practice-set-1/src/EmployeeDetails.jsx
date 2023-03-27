const EmployeeDetails = ({ employees }) => {
    
    const totalSalary = employees.reduce((acc, curr) => acc + curr.salary, 0);
  
    const isOrange = (level) => (level === 2 ? "orange" : "white");
  
    const isBorder = (designation) =>
      designation === "President" ? "1px solid black" : "none";
  
    return (
      <div>
        <h1>Employee Details</h1>
        {employees.map(({ name, level, dept, designation, salary }) => (
          <div
            style={{
              border: isBorder(designation),
              borderRadius: "5px",
              margin: "10px auto",
              padding: "1rem",
              width: "60%",
              backgroundColor: isOrange(level)
            }}
          >
            <p>
              Name: {name}, Level: {level}, Dept: {dept}, Designation:
              {designation}, Salary: {salary}
            </p>
          </div>
        ))}
        <div
          style={{
            border: "1px solid black",
            borderRadius: "5px",
            margin: "10px auto",
            padding: "1rem",
            width: "60%"
          }}
        >
          <p>Total Salary Expense: {totalSalary}</p>
        </div>
      </div>
    );
};
  
export default EmployeeDetails;
  