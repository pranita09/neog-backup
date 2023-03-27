const StudentsDetails = ({ students }) => {
    
    const totalMarks = students.english + students.maths + students.computers;
    
    const getGrade = (totalMarks) => {
      if (totalMarks >= 225) return "A";
      else if (totalMarks >= 180 && totalMarks < 225) return "B";
      else if (totalMarks >= 150 && totalMarks < 180) return "C";
      return "D";
    };
    
    return (
      <div style={{
        border: "1px solid black",
        borderRadius: "5px",
        margin: "10px auto",
        padding: "1rem",
        width: "60%"
      }}>
        <h1>Students Details</h1>
        <p>Name: {students.name}</p>
        <p>English: {students.english}</p>
        <p>Maths: {students.maths}</p>
        <p>Computers: {students.computers}</p>
        <p>Total Marks: {totalMarks}</p>
        <p>Grade: {getGrade(totalMarks)}</p>
      </div>
    );
};
  
export default StudentsDetails;
  