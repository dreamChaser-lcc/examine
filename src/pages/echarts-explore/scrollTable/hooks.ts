import { useRef } from "react";

export const handleTimer = (callback: Function, timer: number) => {
  const timerRef = useRef<any>(null);

  const clearTimer = () => {
    clearInterval(timerRef.current);
  }
  const setTimer = () => {
    console.log(timerRef.current)
      timerRef.current = setInterval(callback, timer);
  }
  return {
    setTimer,
    clearTimer
  }
}