import logo from './logo.svg';
import './App.css';
import FuncComp from './FuncComp';
import Status from './Component/Status';
import Listandkeys from './Component/Listandkeys';
import UseStateCounter from './Component/UseStateCounter';
import Routing from './Rouuting/Routing';
import Contact from './Component/Form validation/Contact';
import Navbar from './Rouuting/Navbar';
import BackroundButton from './Component/BackroundButton';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routing />
    {/* <FuncComp /> */}
    {/* <Status /> */}
    {/* <UserData /> */}
    {/* <StatusIndicator /> */}
    {/* <Contact/> */}
    {/* <Listandkeeys /> */}
    </div>
  );
}

export default App;
