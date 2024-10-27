import { useState, useEffect } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timerId);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  return (
    <div className="clock-container">
      <div className="clock-box">
        <h1 className="clock-heading">Clock APP</h1>
        <div className="clock">
          <span className="time">{formatTime(time)}</span>
        </div>
      </div>
    </div>
  );
};

export default Clock;