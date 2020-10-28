import React, { useState } from 'react';
import { SELECT } from '../../vars';
import classNames from 'classnames';
import { FacebookOutlined, TwitterOutlined, LinkedinOutlined } from '@ant-design/icons';

export const DropdownMenu = ({openedMenu, activeField, setActiveField}) => {
  return (
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
  );
}