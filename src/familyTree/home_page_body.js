import React, { Component } from 'react';
import {navItemClass} from "./home_page_style";
import './style.css'
import logo from './a.jpg'
class Body extends Component {

  render() {
    return (
      <div className="wrapper pb-3 container-fluid" style={{borderTop : "1px solid #ddd"}}>
          <div className='row   ml-4 mr-4'>
              <RightPanel></RightPanel>
              <LeftPanel></LeftPanel>

              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>

          </div>
      </div>
    );
  }
}
class RightPanel extends Component {

  render() {
    return (
          <div className='col-sm-8 mt-4'>
              <BreakingNews></BreakingNews>
              <NewsBoard></NewsBoard>

          </div>
    );
  }
}
class NewsBoard extends Component {

  render() {
    return (
          <div className='col-sm-12'>
              news
          </div>
    );
  }
}

class BreakingNews extends Component {

  render() {
    return (
          <div className='col-sm-12 slideshow-container'>
              <div className="">
                  {/*<div className="numbertext">1 / 3</div>*/}
                  <img src={logo} style={{width:"100%"}}/>
                      <div className="text">Caption Text</div>
              </div>
          </div>
    );
  }
}
class LeftPanel extends Component {
  render() {
    return (
          <div className='col-sm-4 mt-4' >
              <div className='h-50 mb-1' style={{borderBottom:'2px solid #f1f1f1'}}>
                  <span className='mb-5'>Sự kiện đang diễn ra </span>
                  <div style={{overflow:'auto',overflowX: 'hidden',height:'80%'}}>
                      <ul className='col-sm-12 birthdayNoti ml-2' >
                          <NotiLine type='sinh nhật' name='Duy Mạnh' time='Hôm nay'></NotiLine>
                      </ul>
                      <ul className='col-sm-12 goneDayNoti ml-2'>
                          <NotiLine type='giỗ' name='________' time='Hôm nay'></NotiLine>

                      </ul>
                  </div>
              </div>
              <div className='h-50' >
                  <span className='mb-5'>Sự kiện sắp diễn ra </span>
                  <div style={{overflow:'auto',overflowX: 'hidden',height:'80%'}}>
                      <ul className='col-sm-12 birthdayNoti ml-2' >
                          <NotiLine type='sinh nhật' name='Duy Mạnh' time='Ngày mai'></NotiLine>
                          <NotiLine type='sinh nhật' name='Duy Mạnh' time='13/08'></NotiLine>
                          <NotiLine type='sinh nhật' name='Duy Mạnh' time='Ngày mai'></NotiLine>
                          <NotiLine type='sinh nhật' name='Duy Mạnh' time='13/08'></NotiLine>
                          <NotiLine type='sinh nhật' name='Duy Mạnh' time='13/08'></NotiLine>
                          <NotiLine type='sinh nhật' name='Duy Mạnh' time='13/08'></NotiLine>
                          <NotiLine type='sinh nhật' name='Duy Mạnh' time='Ngày mai'></NotiLine>
                          <NotiLine type='sinh nhật' name='Duy Mạnh' time='13/08'></NotiLine>
                          <NotiLine type='sinh nhật' name='Duy Mạnh' time='Ngày mai'></NotiLine>
                          <NotiLine type='sinh nhật' name='Duy Mạnh' time='13/08'></NotiLine>
                          <NotiLine type='sinh nhật' name='Duy Mạnh' time='13/08'></NotiLine>
                          <NotiLine type='sinh nhật' name='Duy Mạnh' time='13/08'></NotiLine>
                      </ul>
                      <ul className='col-sm-12 goneDayNoti ml-2'>
                          <NotiLine type='giỗ' name='________' time='Sắp tới'></NotiLine>
                      </ul>
                  </div>
              </div>
          </div>
    );
  }
}
function NotiLine(props) {
        return(
                <li>
                    {props.time} là ngày {props.type} của <a href='#'>{props.name}</a>
                </li>
        )
}
export default Body