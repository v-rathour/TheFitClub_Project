import React from 'react'

export default function Heading(props) {
  return (
   <React.Fragment>
     <div className="headings">
        <span id='stoke-text'>{props.text1}</span>
        <span>{props.text2}</span>
        <span id="stoke-text">{props.text3}</span>
     </div>
   </React.Fragment>
  )
}
