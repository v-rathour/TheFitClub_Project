import React from 'react'

export default function Feacture(props) {
  return (
    <React.Fragment>
        <div id='card_sec'>
            <div className='About_this'>
                <img src={props.image} alt="" />
            </div>
            <h3>{props.About}</h3>
            <p>{props.information}</p>
            <div className="btn_to_join">
                <span>Join Now</span>
                <label htmlFor="">
                <i class="fa-solid fa-arrow-right"></i>
                </label>
            </div>
        </div>
    </React.Fragment>
  )
}
