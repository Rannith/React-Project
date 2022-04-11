
import './App.css';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      <Profile name = "Rannith" team = "LAMP" >
        <p>From department of Electrical and Electronics Engineering</p>
        <button>About More</button>
      </Profile>
      <Profile name = "Prithvi" team = "DOTNET">
        <p>From department of Electrical and Electronics Engineering</p>
        <button>About More</button>
      </Profile>
      <Profile name = "Deva" team = "EBA">
        <p>From Department of Electrical and Communication Engineering</p>
        <button>About More</button>
      </Profile>
    </div>
  );
}

export default App;
