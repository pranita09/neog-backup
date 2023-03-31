// import logo from './logo.svg';
import './App.css';
import EmployeeCard from './EmployeeCard';
import ProductList from './ProductList';
import ImageComponent from './ImageComponent';
import ProductData from './ProductData';
import StudentsDetails from './StudentDetails';
import EmployeeDetails from './EmployeeDetails';

// practice-set-2
import Greeting from "./practice-set-2/QuestionOne";
import Product from "./practice-set-2/QuestionTwo";
import UserProfile from "./practice-set-2/QuestionThree";
import Gadgets from "./practice-set-2/QuestionFour";
import Phones from "./practice-set-2/QuestionFive";
import Article from "./practice-set-2/QuestionSix";
import About from "./practice-set-2/QuestionSeven";
import MyGadgets from "./practice-set-2/QuestionEight";
import ColorPicker from "./practice-set-2/QuestionNine";
import Todo from "./practice-set-2/QuestionTen";
import {userData, products1, products2, title, content, heading, name, learning, products3, todoItems} from './practice-set-2/Data';

const backgroundColor = 'lightgreen';
const color = 'darkgreen';
const borderRadius = '5px';
const padding = '10px';
const items = ['pen', 'pencil', 'ruler', 'eraser']
const imageLink =
  'https://cdn.pixabay.com/photo/2023/03/18/10/43/plum-blossoms-7860381_1280.jpg';
const caption = 'Spring Flowers';
const products = [
  { name: 'Perk', quantity: 10, sales: 7 },
  { name: 'Pepsi', quantity: 10, sales: 20 },
  { name: 'Coke', quantity: 18, sales: 50 },
  { name: 'Maggi', quantity: 41, sales: 22 },
  { name: '5Star', quantity: 7, sales: 9 },
]
const student = {
  name: "John Doe",
  english: 90,
  maths: 80,
  computers: 70
};
const employees = [
  {
    name: "Jack Smith",
    level: 2,
    dept: "Tech",
    designation: "Manager",
    salary: 24000
  },
  {
    name: "Mary Robbins",
    level: 3,
    dept: "Fin",
    designation: "Manager",
    salary: 28000
  },
  {
    name: "Steve Williams",
    level: 4,
    dept: "Ops",
    designation: "President",
    salary: 35000
  },
  {
    name: "Bob Andrews",
    level: 1,
    dept: "Fin",
    designation: "Trainee",
    salary: 16500
  },
  {
    name: "Dave Martin",
    level: 2,
    dept: "Fin",
    designation: "Manager",
    salary: 21700
  },
  {
    name: "Julia Clarke",
    level: 3,
    dept: "Ops",
    designation: "Manager",
    salary: 26900
  },
  {
    name: "Kathy Jones",
    level: 4,
    dept: "Tech",
    designation: "President",
    salary: 42500
  },
  {
    name: "Tom Bresnan",
    level: 2,
    dept: "Tech",
    designation: "Manager",
    salary: 22200
  }
];


function App() {
  return (
    <div className="App">

      <EmployeeCard name={"John Doe"} designation={"Software Engineer"} workExperience={"10 Yrs"} />

      <button style={{backgroundColor, color, borderRadius, padding}} >Start</button>     
      {/* object shorthand property */}

      <ProductList products={items} productsHeader={"Stationary Items"} />

      <ImageComponent link={imageLink} caption={caption}/>

      <ProductData productList={products}/>

      <StudentsDetails students={student} />

      <EmployeeDetails employees={employees}/>
      done with que 8, 9, 10, 11 in this component only

    </div>
  );
}

export default App;
