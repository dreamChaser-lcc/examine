import { useRef } from "react";

export const handleTimer = (callback: Function, timer: number) => {
  const timerRef = useRef<any>(null);

  const clearTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  }
  const setTimer = () => {
    console.log(timerRef.current)
    timerRef.current = null;
    timerRef.current = setInterval(callback, timer);
  }
  return {
    setTimer,
    clearTimer
  }
}