"use client";
import React, { useState, useEffect } from "react";

const Clock: React.FC = () => {
  // State to store the current time, initialized as undefined
  const [currentTime, setCurrentTime] = useState<Date | undefined>(undefined);

  useEffect(() => {
    // Set the initial time as soon as the component mounts
    setCurrentTime(new Date());

    // Interval to update the time every second
    const timerId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(timerId);
  }, []);

  return (
    <div className="mx-3">
      {currentTime ? currentTime.toLocaleTimeString() : "Loading time..."}
    </div>
  );
};

export default Clock;
