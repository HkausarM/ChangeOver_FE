import './App.css';
import HomeMenu from '../nav/HomeMenu';
import BasicSelect from '../home/Filter';
import AltCard from '../home/HomeOverlay';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <HomeMenu />
          <BasicSelect />
          <AltCard />
      </header>
    </div>
  );
}

export default App;
