// import Header from './Header';
import Usestate from './components/Usestate'
import './App.css';
import UseReducer from './components/UseReducer';
import UseEffect from './components/UseEffect';
 import UseRef from './components/UseRef';

 import { createContext, useState } from 'react';
import Child from './Child';
import HigherOrderCom from './HigherOrderCom';
import UseMemo from './components/UseMemo';
import User from './User'
import Home from './components/Home';
import HomeContainer from './container/HomeContainer';
import Header from './container/Header';
import EventDelegation from './components/EventDelegation';

// export const GlobalInfo = createContext()
function App() {

  // const [color,setColor] = useState('red')
  return (
    // <GlobalInfo.Provider value={{appColor:color}}>
    <div >
      <h1>App components</h1>
      {/* <Header/> */}
      {/* <Usestate/> */}
      {/* <UseReducer/> */}
      {/* <UseEffect/> */}
     
      {/* <UseRef/> */}
       {/* < Child/> */}

       {/* <HigherOrderCom/> */}
       {/* <UseMemo/> */}
       {/* <User data={{name:'akanksha',age:26}}/> */}

       {/* <Home/> */}
       {/* <HomeContainer/> */}

       {/* <Header/> */}

       <EventDelegation/>

    </div>
    // </GlobalInfo.Provider>
  );
}

export default App;
