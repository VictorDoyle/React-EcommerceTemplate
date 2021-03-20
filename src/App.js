import logo from './logo.svg';
import './App.css';
/* routes */
import routes from './routes/routes';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
     { routes }
    </div>
  );
}

export default App;
