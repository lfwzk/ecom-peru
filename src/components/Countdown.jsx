import React, { useState, useEffect } from 'react';

export const Countdown = ({ days, hours, minutes, seconds }) => {
  const [daysLeft, setDaysLeft] = useState(days);
  const [hoursLeft, setHoursLeft] = useState(hours);
  const [minutesLeft, setMinutesLeft] = useState(minutes);
  const [secondsLeft, setSecondsLeft] = useState(seconds);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      // Update the values of time here
      if (secondsLeft > 0) {
        setSecondsLeft(secondsLeft - 1);
      } else if (minutesLeft > 0) {
        setMinutesLeft(minutesLeft - 1);
        setSecondsLeft(59);
      } else if (hoursLeft > 0) {
        setHoursLeft(hoursLeft - 1);
        setMinutesLeft(59);
        setSecondsLeft(59);
      } else if (daysLeft > 0) {
        setDaysLeft(daysLeft - 1);
        setHoursLeft(23);
        setMinutesLeft(59);
        setSecondsLeft(59);
      } else {
        // When it reaches zero, you can take additional actions, such as stopping the timer.
        clearInterval(countdownInterval);
      }
    }, 1000); // Update every second

    return () => {
      clearInterval(countdownInterval);
    };
  }, [daysLeft, hoursLeft, minutesLeft, secondsLeft]);

  return (
    <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
      <div className="flex flex-col">
        <span className="countdown font-mono text-xl">
          <span style={{ "--value": daysLeft }}>{daysLeft}</span>
        </span>
        días
      </div>
      <div className="flex flex-col">
        <span className="countdown font-mono text-xl">
          <span style={{ "--value": hoursLeft }}>{hoursLeft}</span>
        </span>
        horas
      </div>
      <div className="flex flex-col">
        <span className="countdown font-mono text-xl">
          <span style={{ "--value": minutesLeft }}>{minutesLeft}</span>
        </span>
        minutos
      </div>
      <div className="flex flex-col">
        <span className="countdown font-mono text-xl">
          <span style={{ "--value": secondsLeft }}>{secondsLeft}</span>
        </span>
        segundos
      </div>
    </div>
  );
};
