import React from "react";

import "../assets/css/ChatCard.css";

class ChatCard extends React.Component {
  state = {};

  render() {
    return (
      <div className="card anti-block">
        <div className="dialog user">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-9 bubble">
              I have a prolonged fever, severe headache, muscle and joint pain,
              fatigue, rash, nausea, abdominal discomfort, and occasional
              bleeding.
            </div>
          </div>
        </div>
        <div className="dialog bot">
          <div className="row">
            <div className="col-md-9 bubble">
              Based on the symptoms provided, our system predicts that you may
              have
              <span></span>.
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>
        <div className="input shadow-sm rounded">
          <div>I have a </div>
        </div>
      </div>
    );
  }
}

export default ChatCard;
