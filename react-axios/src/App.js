
import './App.css';
import PersonAdd from './components/PersonAdd';
import PersonList from './components/PersonList';
import PersonRemove from './components/PersonRemove';

function App() {
  return (
    <div className="App">
      <PersonList />
      <PersonAdd />
      <PersonRemove />
    </div>
  );
}

export default App;
