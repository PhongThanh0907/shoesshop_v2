import React, { useState, useEffect } from "react";

interface ICountdown {
  hours: number;
  minutes: number;
  seconds: number;
}

const CountDown = ({ hours = 0, minutes = 0, seconds = 60 }: ICountdown) => {
  const [time, setTime] = useState<ICountdown>({ hours, minutes, seconds });

  const tick = () => {
    if (time.hours === 0 && time.minutes && time.seconds === 0) {
      reset();
    } else if (time.hours === 0 && time.seconds === 0) {
      setTime({ hours: time.hours - 1, minutes: 59, seconds: 59 });
    } else if (time.seconds === 0) {
      setTime({ hours: time.hours, minutes: time.minutes - 1, seconds: 59 });
    } else {
      setTime({
        hours: time.hours,
        minutes: time.minutes,
        seconds: time.seconds - 1,
      });
    }
  };

  const reset = () =>
    setTime({
      hours: time.hours,
      minutes: time.minutes,
      seconds: time.seconds,
    });

  useEffect(() => {
    const timerId = setInterval(() => {
      tick();
    }, 1000);
    return () => {
      clearInterval(timerId);
    };
  }, [time]);

  return (
    <div>
      <div className="flex justify-center text-2xl items-center gap-2 text-white">
        <p>{`${time.hours.toString().padStart(2, "0")}`} </p>:
        <p>{`${time.minutes.toString().padStart(2, "0")}`} </p>:
        <p>{`${time.seconds.toString().padStart(2, "0")}`} </p>
      </div>
    </div>
  );
};

export default CountDown;
