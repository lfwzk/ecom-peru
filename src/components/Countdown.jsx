import React, { useState, useEffect } from "react";

export const Countdown = () => {
  const [days, setDays] = useState(15);
  const [hours, setHours] = useState(10);
  const [minutes, setMinutes] = useState(24);
  const [seconds, setSeconds] = useState(41);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      // Actualiza los valores de tiempo aquí
      // Por ejemplo, para restar un segundo:
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else if (minutes > 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      } else if (hours > 0) {
        setHours(hours - 1);
        setMinutes(59);
        setSeconds(59);
      } else if (days > 0) {
        setDays(days - 1);
        setHours(23);
        setMinutes(59);
        setSeconds(59);
      } else {
        // Cuando se llega a cero, puedes tomar medidas adicionales, como detener el temporizador.
        clearInterval(countdownInterval);
      }
    }, 1000); // Actualiza cada segundo

    return () => {
      clearInterval(countdownInterval);
    };
  }, [days, hours, minutes, seconds]);

  return (
    <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
      <div className="flex flex-col">
        <span className="countdown font-mono text-xl">
          <span style={{ "--value": days }}>{days}</span>
        </span>
        dias
      </div>
      <div className="flex flex-col">
        <span className="countdown font-mono text-xl">
          <span style={{ "--value": hours }}>{hours}</span>
        </span>
        horas
      </div>
      <div className="flex flex-col">
        <span className="countdown font-mono text-xl">
          <span style={{ "--value": minutes }}>{minutes}</span>
        </span>
        minutos
      </div>
      <div className="flex flex-col">
        <span className="countdown font-mono text-xl">
          <span style={{ "--value": seconds }}>{seconds}</span>
        </span>
        segundos
      </div>
    </div>
  );
};
