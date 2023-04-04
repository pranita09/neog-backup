import logo from './logo.svg';
import './App.css';
import DisplayImage from './set-3/QuestionOne';
import DisplayCartoons from './set-3/QuestionTwo';
import { cartoons } from './set-3/Data';
import { characters, itemList, todoItems, todoItems2, books } from './set-4/Data';
import ShowCharacters from './set-4/QuestionOne';
import FontSizeHandler from './set-4/QuestionTwo';
import ListingItems from './set-4/QuestionThree';
import ToDoList from './set-4/QuestionFour';
import TodoList from './set-4/QuestionFive';
import BooksByGenre from './set-4/QuestionSix';

function App() {
  return (
    <div className="App">
    <BooksByGenre booksData={books} />
    <TodoList todoItemsData={todoItems2}/>
    <ToDoList toDoItemsData={todoItems} />
    <ListingItems itemsData={itemList} />
    <FontSizeHandler />
    <ShowCharacters charactersData={characters}/>
    {/* <DisplayCartoons cartoonsData={cartoons}/> */}
    {/* <DisplayImage imgLink={'https://picsum.photos/200'} imgWidth={'70%'} imgHeight={'70%'} /> */}
    </div>
  );
}

export default App;
