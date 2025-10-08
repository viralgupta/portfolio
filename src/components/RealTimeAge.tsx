"use client";

import { useEffect, useState } from "react";

interface RealTimeAgeProps {
  birthDate: Date;
  decimalPlaces?: number;
}

export function RealTimeAge({ birthDate, decimalPlaces = 9 }: RealTimeAgeProps) {
  const [age, setAge] = useState<string>("");

  useEffect(() => {
    let animationFrameId: number;

    const updateAge = () => {
      const now = new Date().getTime();
      const birth = birthDate.getTime();
      const diffInMilliseconds = now - birth;
      
      // Convert milliseconds to years
      // 1 year = 365.25 days (accounting for leap years)
      const millisecondsPerYear = 365.25 * 24 * 60 * 60 * 1000;
      const ageInYears = diffInMilliseconds / millisecondsPerYear;
      
      setAge(ageInYears.toFixed(decimalPlaces));
      animationFrameId = requestAnimationFrame(updateAge);
    };

    updateAge();

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [birthDate, decimalPlaces]);

  return <span className="tabular-nums">{age}</span>;
}

