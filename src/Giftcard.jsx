import React from 'react'
// import {Top} from"./Top"
const Giftcard = (props) => {

  return (
    <div  className={`giftcard ${props.color}`}>
     {/* <Top />  */}
     <>
    <div className={`card_top ${props.color}`}>
        <div><h4>{props.date}</h4>
        <button >{props.btn}</button></div>

        <div className="card_logo">
<img src={props.logo} alt="img" className="logo"></img>
        </div>


    </div>


<div className="h1">
    <h1>{props.company}</h1>
    
    <h1>Pay</h1>
    <div className="card_btm">
    <p>{props.platform}</p>
    <p>-></p>
    </div>
   
</div>
    </>
    </div>
  )
}

export default Giftcard
