import React, { useState } from 'react';
import logo from './logo.png';
import menu from './Vector.png';
import closeMenu from './x.png';
import classNames from 'classnames';
import './App.scss';
import { NavLink } from 'react-router-dom';

const BUTTONS = {
  one: 'One',
  two: 'Two',
  three: 'Three',
}

function App() {
  const [activeButton, setActiveButton] = useState('');
  const [openedMenu, setOpenedMenu] = useState('');

  return (
    <div className="App">
      <header className="App-header">
        <nav className="nav">
          <ul className="menu">
            <li className={classNames({"menu__item": true, "menu__logo": true})}>
              <NavLink
              className="menu__logo-item"
                to={'/'}
              >
              <img className="menu__logo-img" src={logo}
                alt="logo"
              >
              </img>
              </NavLink>
            </li>
            <li className="menu__item number"
              onClick={()=> setActiveButton(BUTTONS.one)}
            >
              <button className="button">
                One
              </button>
              {/* <div className={
                activeButton === BUTTONS.one
                ? "selector"
                : "selector__hidden"}
                >
                <div className={"selector-button"}>
                  Item 1
                </div>
                <div className={"selector-button"}>
                  Item 2
                </div>
                <div className={"selector-button"}>
                  Item 3
                </div>
              </div> */}
            </li>
            <li className="menu__item number"
              onClick={()=> setActiveButton(BUTTONS.one)}
            >
              <button className="button">
                Two
              </button>
            </li>
            <li className="menu__item number"
              onClick={()=> setActiveButton(BUTTONS.one)}
            >
              <button className="button">
                Three
              </button>
            </li>
            <li className={classNames({"menu__item": true})}
              onClick={()=> setActiveButton(BUTTONS.one)}
            >
              <button className="button button-login">
                LOG IN
              </button>
            </li>
            <li className={classNames({"menu__item": true})}
              onClick={()=> setActiveButton(BUTTONS.one)}
            >
              <button className="button button-sign">
                SIGN UP
              </button>
            </li>
            <li 
              className="menu__item burger"
              onClick={()=>setOpenedMenu(!openedMenu)}
            >
              { !openedMenu
              ? (<img className="burger-image" src={menu}
                alt="burger-menu"
              />)
              : (<img className="close-image" src={closeMenu}
                  alt="close-menu"
                />
              )}
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default App;

              {/* <div className={"selector"}>
                <button className={"selector__block"}>
                  Item 1
                </button>
                <button className={"selector__block"}>
                  Item 2
                </button>
                <button className={"selector__block"}>
                  Item 3
                </button>
              </div> */}