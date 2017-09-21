import React from "react";

const PigCard = (props) => {
  return (
    <div className="card">
      <div className="blurring dimmable image">
        <div className="ui dimmer">
          <div className="content">
            <div className="center">
              <p className="ui button" style={{lineHeight: "18px"}}>
                {props.name}'s weight<br/> <b>{props.weight} LG / 24.7 Ft<sup>3</sup></b><br/><br/>
                {props.name}'s specialty is<br/> <b>{props.specialty}</b>
              </p>
            </div>
          </div>
        </div>
        <img src={"hog-imgs/" + props.name.toLowerCase().replace(/\s/g, "_") + ".jpg"}/>
      </div>
      <div className="content">
        <a className="header">{props.name}</a>
        <div className="meta">
          <span className="date">{props.highestMedalAchieved}</span>
        </div>
      </div>
      <div className="extra content">
        <a>
          <i className="bitbucket icon"></i>
          Greased: <b>{props.greased ? "yes" : "no"}</b>
        </a>
      </div>
    </div>
  );
}

export default PigCard;