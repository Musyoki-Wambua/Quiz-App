import React, { useRef, useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const CountDown = ({ remainingTime }) => {
  const currentTime = useRef(remainingTime);
  const prevTime = useRef(null);
  const isNewTimeFirstTick = useRef(false);
  const [, setOneLastRerender] = useState(0);

  if (currentTime.current !== remainingTime) {
    isNewTimeFirstTick.current = true;
    prevTime.current = currentTime.current;
    currentTime.current = remainingTime;
  } else {
    isNewTimeFirstTick.current = false;
  }

  // force one last re-render when the time is over to trigger the last animation
  if (remainingTime === 0) {
    setTimeout(() => {
      setOneLastRerender((val) => val + 1);
    }, 20);
  }

  const isTimeUp = isNewTimeFirstTick.current;

  const renderTime = ({ remainingTime }) => {
    return (
      <div className="time-wrapper">
        <div key={remainingTime} className={`time ${isTimeUp ? "up" : ""}`}>
          {remainingTime}
        </div>
        {prevTime.current !== null && (
          <div key={prevTime.current} className={`time ${!isTimeUp ? "down" : ""}`}>
            {prevTime.current}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="d-flex justify-items-center align-items-center ">
      <h1>
       Timer
      </h1>
      <div className="timer-wrapper">
        <CountdownCircleTimer
          isPlaying
          duration={60}
          colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
          colorsTime={[15, 10, 5, 0]}
        >
          {renderTime}
        </CountdownCircleTimer>
      </div>
    </div>
  );
};

export default CountDown;
