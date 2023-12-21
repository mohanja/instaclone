import './App.css'
import Navbar from './Navbar/Navbar';
import { Provider } from "react-redux";
import { store } from './store/data';
import Center from './Center';
import CreSub from './CreSub';

function App() {
 

  return (
    <> 
    <Provider store={store}>
    <div className="App">
      <Navbar/>
      {/* <CreSub/> */}
      {/* <Center/> */}
    </div> 
   
    </Provider>
    
    </>
  );
}

export default App;
