import React, { useEffect } from "react";
import "./Loader.css";

export default function Loader({ onFinish }) {
  useEffect(() => {
    const animationDuration = 2100;
    const timer = setTimeout(() => {
      onFinish();
    }, animationDuration);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
   <section class="dots-container">
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
</section>

  );
}
