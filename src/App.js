import React, { useState } from 'react';
import {Menu} from './components/Menu';
import { DropdownMenu } from './components/DropdownMenu';
import './App.scss';

function App() {
  const [openedMenu, setOpenedMenu] = useState(false);
  const [activeButton, setActiveButton] = useState('');

  return (
    <div 
      className="App"
      onClick={()=> {
        setActiveButton('')}}
    >
      <header className="App-header">
        <nav className="nav">
          <Menu 
            openedMenu={openedMenu}
            setOpenedMenu={setOpenedMenu}
            setActiveButton={setActiveButton}
            activeButton={activeButton}
          />
          <DropdownMenu openedMenu={openedMenu}/>
        </nav>
      </header>
    </div>
  );
}

export default App;
