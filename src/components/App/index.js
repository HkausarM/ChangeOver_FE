import './App.css';
import ClippedDrawer from '../nav/SideNav';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <div className='homeLayout'>
          <ClippedDrawer className='sidenav'/>
          </div>
      </header>
    </div>
  );
}

export default App;
