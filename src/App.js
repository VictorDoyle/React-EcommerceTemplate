import logo from './logo.svg';
import './App.css';
/* routes */
import routes from './routes/routes';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
/* testing */
import reportWebVitals from './reportWebVitals';

function App() {
  return (
    <div className="App">
      <Navbar />
     { routes }
     <Footer />
    </div>
  );
}

reportWebVitals(console.log);
export default App;


