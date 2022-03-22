import './App.css';
import ToDo from './components/ToDo';

const listToDo = ['Do the tasks!','Watch a tutorial!','Learn React'];

function App() {

  return (
    <div className="App">
     <ToDo data={listToDo}/>
    </div>
  );
}

export default App;
