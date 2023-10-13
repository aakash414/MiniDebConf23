import React, { useEffect, useState } from 'react';

function Count() {
  const eventDate = new Date('2023-10-21T09:00:00'); // 21st October 2023, 9 am

  // Calculate initial countdown values
  const now = new Date();
  const timeDifference = eventDate - now;

  const initialCountdownValues = {
    days: Math.floor(timeDifference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((timeDifference % (1000 * 60)) / 1000),
  };

  // State to hold countdown values
  const [countdownValues, setCountdownValues] = useState(initialCountdownValues);

  // useEffect to handle countdown logic
  useEffect(() => {
    // Set interval to update countdown values every second
    const intervalId = setInterval(() => {
      setCountdownValues((prevValues) => {
        const newValues = { ...prevValues };

        // Decrease seconds
        newValues.seconds -= 1;

        // If seconds reach zero, decrement minutes
        if (newValues.seconds < 0) {
          newValues.seconds = 59;
          newValues.minutes -= 1;

          // If minutes reach zero, decrement hours
          if (newValues.minutes < 0) {
            newValues.minutes = 59;
            newValues.hours -= 1;

            // If hours reach zero, decrement days
            if (newValues.hours < 0) {
              newValues.hours = 23;
              newValues.days -= 1;

              // If days reach zero, stop the countdown
              if (newValues.days < 0) {
                clearInterval(intervalId);
                return initialCountdownValues; // Reset to initial values
              }
            }
          }
        }

        return newValues;
      });
    }, 1000); // Update every second

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array means the effect runs once on mount

  return (
    <div className=" relative p-5 overflow-hidden bg-white justify-center flex items-center flex-col pt-8">
      <h2 className="text-center text-xl sm:text-2xl font-bold text-[#a80030] mb-4">
        The event starts in
      </h2>
      <div className="grid grid-flow-row gap-5 sm:grid-flow-col sm:auto-cols-max">
        {Object.entries(countdownValues).map(([unit, value]) => (
          <div key={unit} className="p-4 sm:p-8 border border-gray-200 rounded-lg text-center shadow-md">
            <span className="countdown font-mono text-4xl sm:text-5xl text-[#a80030]">
              <span style={{ '--value': value }}>{value}</span>
            </span>
            <p className="text-gray-400 text-sm sm:text-base">{unit}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Count;
