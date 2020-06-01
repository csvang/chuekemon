/* 
*   useContext sample:
*   https://stackoverflow.com/questions/54738681/how-to-change-context-value-while-using-react-hook-of-usecontext
*/

import React, {useState, createContext} from 'react';
import './App.css';
import 'semantic-ui-react/';
import 'semantic-ui-css/semantic.min.css';

//import GlobalStateProvider from './components/GlobalStateProvider';
import Search from './components/search/search';

export const ShowModalContext = createContext();

function App() {
  const [showHideModal, setShowHideModal] = useState(false);

  function showModal() {
    setShowHideModal(true);
  }

  function hideModal() {
    setShowHideModal(false);
  }

  return (
    <div className="App">
      <header className="App-header">
        ChueKémon
      </header>
      <ShowModalContext.Provider value={{showHideModal, showModal, hideModal}}>
        <Search></Search>
      </ShowModalContext.Provider>
      {/* <GlobalStateProvider>
        <Search></Search>
      </GlobalStateProvider> */}
    </div>
  );
}

export default App;
