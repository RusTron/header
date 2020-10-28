import React, { useState, useEffect } from 'react';
import {Menu} from './components/Menu';
import { DropdownMenu } from './components/DropdownMenu';
import './App.scss';

function App() {
  const [openedMenu, setOpenedMenu] = useState(false);
  const [activeButton, setActiveButton] = useState('');
  const [activeField, setActiveField] = useState('');

  useEffect(() => {
    const handleEsc = (event) => {
       if (event.keyCode === 27) {
        setActiveField('');
        setOpenedMenu(false);
        setActiveButton('')

      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

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
            setActiveField={setActiveField}
          />
          <DropdownMenu 
            openedMenu={openedMenu}
            activeField={activeField}
            setActiveField={setActiveField}
            />
        </nav>
      </header>
    </div>
  );
}

export default App;
