import './App.css';
import './Components/Navbar/Navbar'
import Navbar from './Components/Navbar/Navbar';
import Intro from './Components/Intro/Intro';
import Services from './Components/Services/Services';
import Experience from './Components/Experience/Experience';
import Work from './Components/Works/Work';


function App() {
  return (
    <div className='App'>
     <Navbar/>
     <Intro/>
     <Services/>
     <Experience/>
     <Work/>
    </div>
  );
}

export default App;
