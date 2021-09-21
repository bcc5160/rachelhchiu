import './App.css';
import './main.css';
import NavBar from './NavBar/NavBar';
import Interviews from './Posts/Posts';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar></NavBar>
        <Interviews></Interviews>
      </header>
    </div>
  );
}

export default App;
