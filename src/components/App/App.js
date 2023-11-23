import './App.css';
import HomeMenu from '../nav/HomeMenu';
import MultiActionAreaCard from '../home/HomeOverlay'

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <div className="menu">
          <HomeMenu />
          {/* <MultiActionAreaCard /> */}
          </div>
      </header>
    </div>
  );
}

export default App;
