import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import navItemStyle,{searchBarStyle,submitSearchStyle} from './home_page_style.js'
import {navItemClass} from "./home_page_style";
import './style.css'
class Header extends Component {

  render() {
    return (
      <div className="wrapper pb-3 container-fluid" style={{borderBottom : "1px solid #ddd"}}>
          <div className='row'>
              <LoGoDesign></LoGoDesign>
              <div className="col-sm-8 navbar navbar-expand-md mt-5">
                    <ul className="navbar-nav col-sm-7 mt-1">

                        <HeaderMenuSelector title={"Trang chủ"}></HeaderMenuSelector>

                        <HeaderMenuSelector title={"Thông báo"}></HeaderMenuSelector>

                        <HeaderMenuSelector title={"Gia phả"}></HeaderMenuSelector>

                        <HeaderMenuSelector title={"Trợ giúp"}></HeaderMenuSelector>

                    </ul>
                    <SearchBar></SearchBar>
              </div>
          </div>
      </div>
    );
  }
}
class HeaderMenuSelector extends Component {
    render() {
        return (
             <li className={navItemClass}>
                 <a  style={navItemStyle} href="#">{this.props.title}</a>
             </li>
        );
    }
    
}
class LoGoDesign extends Component {
    render() {
        return (
            <div className="col-sm-4 mt-4">
              <a className="display-4"> GiaPhả Online</a>
          </div>
        );
    }

}
class SearchBar extends Component {
    render() {
        return (
            <div className="col-sm-5 input-group-lg">
                {/*<button type="submit"  className='btn' id='searchLogo' style={submitSearchStyle}><i className="fa fa-search"></i></button>*/}
                <div className="input-group-prepend">
                    <div className="input-group-text" id="searchLogo" style={submitSearchStyle}>
                        <i className="fa fa-search"></i>
                    </div>
                    <input type="search" id='searchBar' className='' placeholder="Search"
                       style={searchBarStyle}
                />
                </div>

            </div>
        );
    }

}

export default Header;