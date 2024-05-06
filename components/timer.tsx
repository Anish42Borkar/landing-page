"use client";
import useCountdownTimer from "@/hooks/useCountdownTimer";
import React, { useEffect, useState } from "react";

const Timer = () => {
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 7);
  const countDown = useCountdownTimer(targetDate);

  const [timer, setTimer] = useState(countDown);

  const { days, hours, minutes, seconds } = timer;

  useEffect(() => {
    setTimer(countDown);
  }, [timer]);

  return (
    <div>
      {JSON.stringify(timer)}
      {days} days {hours} hours {minutes} minutes {seconds} seconds
    </div>
  );
};

export default Timer;
