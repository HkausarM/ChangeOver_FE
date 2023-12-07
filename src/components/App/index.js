import './App.css';
import HomeMenu from '../nav/HomeMenu';
import AltCard from '../home/HomeOverlay';
import NestedList from '../nav/SideNav';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <HomeMenu />
          <div className='homeLayout'>
          <NestedList />
          <AltCard />
          </div>
      </header>
    </div>
  );
}

export default App;
