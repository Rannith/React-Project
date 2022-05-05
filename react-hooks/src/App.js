
import './App.css';
import HookCounter from './component/HookCounter';
import PreviousHook from './component/PreviousHook';
import StopWatch from './component/StopWatch';
import TitleCounter from './component/TitleCounter';

function App() {
  return (
    <div className="App">
      <HookCounter />
      <PreviousHook />
      <TitleCounter />
      <StopWatch />
    </div>
  );
}

export default App;
