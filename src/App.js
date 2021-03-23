import logo from './logo.svg';
import './App.css';
/* routes */
import routes from './routes/routes';
import Navbar from './components/Navbar/Navbar';
/* testing */
import reportWebVitals from './reportWebVitals';

function App() {
  return (
    <div className="App">
      <Navbar />
     { routes }
    </div>
  );
}

reportWebVitals(console.log);
export default App;


