import React, { useState } from 'react';
import logo from './logo.png';
import { FacebookOutlined, TwitterOutlined, LinkedinOutlined } from '@ant-design/icons';
import classNames from 'classnames';
import Select from 'react-select';
import { NavLink } from 'react-router-dom';
import './App.scss';

const SELECT = {
  one: 'One',
  two: 'Two',
  three: 'Three',
}

const MENU = {
  closed: 'closed',
  visible: 'visible',
}

const options = [
  { value: 'chocolate', label: 'item 1' },
  { value: 'strawberry', label: 'item 2' },
  { value: 'vanilla', label: 'item 3' }
];

function App() {
  const [activeButton, setActiveButton] = useState('');
  const [activeField, setActiveField] = useState('');
  const [openedMenu, setOpenedMenu] = useState(false);

  return (
    <div 
      className="App"
      onClick={()=> {
        setActiveButton('')}}
    >
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
            <li 
              className={
                classNames(
                  "menu__item", {"number": activeButton !== SELECT.one, "number-active": activeButton === SELECT.one})
              }
              onClick={(event)=> {
                event.stopPropagation();
                setActiveButton(SELECT.one)}}
            >
              <Select 
                className="select-one"
                options={options}
                menuIsOpen={activeButton === SELECT.one}
                />
            </li>
            <li
              className={
                classNames("menu__item", "number", {"number-active": activeButton === SELECT.two})
              }
              onClick={(event)=> {
                event.stopPropagation();
                setActiveButton(SELECT.two);
              }}
            >
              <Select
                className="select-two"
                options={options}
                menuIsOpen={activeButton === SELECT.two}
              />
            </li>
            <li
              className={
                classNames("menu__item", "number", {"number-active": activeButton === SELECT.three})
              }
              onClick={(event)=> {
                event.stopPropagation();
                setActiveButton(SELECT.three);
              }}
            >
              <Select
                className="select-three"
                options={options}
                menuIsOpen={activeButton === SELECT.three}
              />
            </li>
            <li className={classNames({"menu__item": true})}
              onClick={()=> setActiveButton(SELECT.one)}
            >
              <button className="button button-login">
                LOG IN
              </button>
            </li>
            <li className={classNames({"menu__item": true})}
              onClick={()=> setActiveButton(SELECT.one)}
            >
              <button className="button button-sign">
                SIGN UP
              </button>
            </li>
            <li 
              className={classNames("burger", {"open": openedMenu})}
              onClick={()=>setOpenedMenu(!openedMenu)}
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </li>
          </ul>
          <div className={openedMenu ? "nav__bottom-visible" : "nav__bottom-closed"}>
            <div 
              className={classNames("nav__dropdown", {"active": activeField === SELECT.one})}
              onClick={(event)=> {
                event.stopPropagation();
                setActiveField(SELECT.one)
              }}
            >
              <FacebookOutlined className="nav__dropdown-icon"/>
              <span className="nav__dropdown-text">Facebook</span>
              <div className={classNames("nav__dropdown-plus", {"active-plus": activeField === SELECT.one})}>
                <span></span>
                <span></span>
              </div>
            </div>
            <div 
              className={classNames("nav__dropdown", {"active": activeField === SELECT.two})}
              onClick={(event)=> {
                event.stopPropagation();
                setActiveField(SELECT.two)}}
            >
             <TwitterOutlined className="nav__dropdown-icon"/>
              <span className="nav__dropdown-text">Twitter</span>
              <div className={classNames("nav__dropdown-plus", {"active-plus": activeField === SELECT.two})}>
                <span></span>
                <span></span>
              </div>
            </div>
            <div 
              className={classNames("nav__dropdown", {"active": activeField === SELECT.three})}
              onClick={(event)=> {
                event.stopPropagation();
                setActiveField(SELECT.three)}}
            >
              <LinkedinOutlined className="nav__dropdown-icon"/>
              <span className="nav__dropdown-text">LinkedIn</span>
              <div className={classNames("nav__dropdown-plus", {"active-plus": activeField === SELECT.three})}>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default App;
