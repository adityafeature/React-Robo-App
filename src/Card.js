//import React, { Component } from "react";
import React from "react";

//class Card extends Component {
//  render(props) {
    // with in (props we can do destructure)
    //const Card = (props) => {
        const Card = ({name, email, id})=> {
        //destructing concepts we can use below 3 ways we can use destructure concepts
       // const {name, email, id} = props;
    return (
      <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
        <h3>Card Component</h3>
        <img alt="photo" src={`https://robohash.org/${id}?200X200`}/>
        <div>
          <h2>{name}</h2>
          <p>{email}</p>
        </div>
      </div>
    );
  }


export default Card;
