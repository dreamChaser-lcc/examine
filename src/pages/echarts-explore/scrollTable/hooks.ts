import { useEffect, useRef } from "react";

export const handleTimer = (callback: Function, timer: number) => {
  const timerRef = useRef<any>(null);
  useEffect(() => {
    setTimer();
    return () => {
      clearTimer();
    };
  });
  const clearTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  }
  const setTimer = () => {
    timerRef.current = null;
    timerRef.current = setInterval(callback, timer);
  }
  return {
    setTimer,
    clearTimer
  }
}