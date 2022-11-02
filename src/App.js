import { ToastContainer } from 'react-toastify';
import './App.css';
import Navbar from './components/Navbar';
import Routing from './components/Routing';

function App() {
  return (
    <div className="App">
    <ToastContainer />
    <Navbar />
      <Routing />
   
    </div>
  );
}

export default App;
