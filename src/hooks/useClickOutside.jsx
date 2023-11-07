import { useEffect } from "react";
import { useRef } from "react";

const useClickOutside = (onClicks, listenCapture = true) => {
  const ref = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        onClicks?.();
      }
    };
    document.addEventListener("click", handler, listenCapture);

    return () => document.removeEventListener("click", handler);
  }, [ref, listenCapture, onClicks]);

  return ref;
};

export default useClickOutside;
