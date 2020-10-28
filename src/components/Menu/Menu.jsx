import React, {useState} from 'react';
import {SELECT, OPTIONS} from '../../vars';
import classNames from 'classnames';
import Select from 'react-select';
import { NavLink } from 'react-router-dom';
import logo from '../../logo.png';

export const Menu = ({
  openedMenu,
  setOpenedMenu,
  setActiveButton,
  activeButton,
  setActiveField
}) => {

  return(
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
          options={OPTIONS}
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
          options={OPTIONS}
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
          options={OPTIONS}
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
        onClick={()=> {
          setOpenedMenu(!openedMenu);
          if (!openedMenu) {
            setActiveField('')
          }
        }}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </li>
    </ul>
  )
}