import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Hi = ({ name }) => {
  return (
    <div>
      <div>
        Hello <strong>{name}</strong>
      </div>
      <h2>Favourite Drinks</h2>
      <ol type="i">
        <code>
          <li>Coffee</li>
          <li>Tea</li>
          <li>Milk</li>
        </code>
      </ol>
      <p className="violetStyle">Balance : {5 + 2}</p>
    </div>
  );
};

const MediaCard = ({ title, body, imageUrl }) => (
  <div>
    <h2>{title}</h2>
    <p>{body}</p>
    <img src={imageUrl} alt=""></img>
  </div>
);

const Gate = ({ isOpen }) => <div>{isOpen ? "Open" : "Closed"}</div>;

function Room() {
  const [isLit, setLit] = useState(true);
  const [roomTemp, setTemp] = useState(22);
  const brightness = isLit ? "lit" : "dark";
  return (
    <div className={`room ${brightness}`}>
      the room is {isLit ? "lit" : "dark"}
      <br></br>
      <button onClick={() => setLit(!isLit)}> FLIP </button>
      <div>
        <span>Room Temperature: {roomTemp} </span>
        <button onClick={() => setTemp(roomTemp + 1)}>+</button>
        <button onClick={() => setTemp(roomTemp - 1)}>-</button>
      </div>
    </div>
  );
}

const OnOff = () => {
  const [lightOn, setLight] = useState(false);
  return (
    <div className={`room ${lightOn ? "lightOn" : " "}`}>
      <button onClick={() => setLight(true)}>ON</button>
      <button onClick={() => setLight(false)}>OFF</button>
    </div>
  );
};

ReactDOM.render(
  <div>
    <Hi name="Ahsan"></Hi>
    <MediaCard
      title="React JS"
      body={
        <span>
          Tutorial for
          <strong>
            <i> React! </i>
          </strong>
          Basic React.
        </span>
      }
      imageUrl="data:image/jpeg;base64,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"
    ></MediaCard>
    <Gate isOpen={false}></Gate>
    <Room></Room>
    <OnOff></OnOff>
  </div>,
  document.getElementById("root")
);
