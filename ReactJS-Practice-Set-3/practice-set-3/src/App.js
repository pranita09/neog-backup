import logo from './logo.svg';
import './App.css';
import DisplayImage from './set-3/QuestionOne';
import DisplayCartoons from './set-3/QuestionTwo';
import { cartoons } from './set-3/Data';

function App() {
  return (
    <div className="App">
    <DisplayCartoons cartoonsData={cartoons}/>
      <DisplayImage imgLink={'https://picsum.photos/200'} imgWidth={'70%'} imgHeight={'70%'} />
    </div>
  );
}

export default App;
