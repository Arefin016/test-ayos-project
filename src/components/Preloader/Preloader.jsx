import React, { useState, useEffect } from "react";
import "./Preloader.css";

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    loading && (
      <div className="preloader">
        <div className="spinner"></div>
      </div>
    )
  );
};

export default Preloader;
