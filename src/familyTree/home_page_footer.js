import React, { Component } from 'react';
import {LabelInfoItemStyle,dividerStyle} from './home_page_style.js'
import './style.css'
import InfoData from './contactsInfo.json'
class Footer extends Component {

  render() {
    return (
      <div className="container-fluid pb-3" style={{borderTop : "1px solid #ddd"}}>
          <div className='row addition-infomation mt-3'>
              {InfoData.map((item,index)=>{
                  return <AdditionInfoItem key={index} info={item}></AdditionInfoItem>
              })}
          </div>
          <div className='row company-information'>
              <div className='col-sm-12'><h1>Family-Connector Corporation</h1></div>
                <div className='col-sm-12 detail-company'>
                    <h6>Hà Nội : 226 ngách 60 số nhà 5C Trần Cung , Nam Từ Liêm , Hà Nội</h6>
                </div>
          </div>
      </div>
    );
  }
}
function AdditionInfoItem(props) {
    return(
        <div className='col-sm-3'>
            <div className='col-sm-12' style={LabelInfoItemStyle}>
                {props.info.name}
            </div>
            <div className='divider' style={dividerStyle}></div>
            <div className='col-sm-12'>
                <p>
                    {props.info.detail.phone_number}
                    <br/>
                    {props.info.detail.email}
                </p>

            </div>
        </div>
    )
}

export default Footer