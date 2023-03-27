// import logo from './logo.svg';
import './App.css';
import EmployeeCard from './EmployeeCard';

function App() {
  return (
    <div className="App">
      <EmployeeCard name={"John Doe"} designation={"Software Engineer"} workExperience={"10 Yrs"} />
    </div>
  );
}

export default App;
