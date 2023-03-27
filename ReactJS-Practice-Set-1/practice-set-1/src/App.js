// import logo from './logo.svg';
import './App.css';
import EmployeeCard from './EmployeeCard';
import ProductList from './ProductList';
import ImageComponent from './ImageComponent';

const backgroundColor = 'lightgreen';
const color = 'darkgreen';
const borderRadius = '5px';
const padding = '10px';
const items = ['pen', 'pencil', 'ruler', 'eraser']
const imageLink =
  'https://cdn.pixabay.com/photo/2023/03/18/10/43/plum-blossoms-7860381_1280.jpg';
const caption = 'Spring Flowers';

function App() {
  return (
    <div className="App">

      <EmployeeCard name={"John Doe"} designation={"Software Engineer"} workExperience={"10 Yrs"} />

      <button style={{backgroundColor, color, borderRadius, padding}} >Start</button>     
      {/* object shorthand property */}

      <ProductList products={items} productsHeader={"Stationary Items"} />

      <ImageComponent link={imageLink} caption={caption}/>

    </div>
  );
}

export default App;
