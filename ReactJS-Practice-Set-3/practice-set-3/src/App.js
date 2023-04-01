import logo from './logo.svg';
import './App.css';
import DisplayImage from './set-3/QuestionOne';

function App() {
  return (
    <div className="App">
      <DisplayImage imgLink={'https://picsum.photos/200'} imgWidth={'90%'} imgHeight={'90%'} />
    </div>
  );
}

export default App;
