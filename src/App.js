import { createContext } from 'react';
import './App.css';
import C1 from './components/C1';

const FirstName=createContext();
const LastName=createContext();
const Data=createContext();
function App() {
  const obj={
    fruit:'mango',
    veg:'manchuriyan',
    place:'harvard',
    color:'cyan'
  }
  return (
    <div className="App">
      <h1>Context - API</h1>
      <>Inside app.js and calling C1</>
      <FirstName.Provider value={'shilpa'}>
        <LastName.Provider value={'Keswani'}>
          <Data.Provider value={obj}>
            <C1/>
          </Data.Provider>
        </LastName.Provider>
      </FirstName.Provider>
    </div>
  );
}

export default App;
export {FirstName,LastName,Data} ;