import { useState, useEffect } from "react";

const FlashDealCounter = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="max-w-max flex space-x-4 text-center">
      {Object.keys(timeLeft).length === 0 ? (
        <span className="text-xl font-bold text-red-600">Deal ended!</span>
      ) : (
        <>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold">{timeLeft.days}</span>
            <span className="text-sm uppercase">Days</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold">{timeLeft.hours}</span>
            <span className="text-sm uppercase">Hours</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold">{timeLeft.minutes}</span>
            <span className="text-sm uppercase">Mins</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold">{timeLeft.seconds}</span>
            <span className="text-sm uppercase">Secs</span>
          </div>
        </>
      )}
    </div>
  );
};

export default FlashDealCounter;
