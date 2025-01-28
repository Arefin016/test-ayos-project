const Video = () => {
  return (
    <button onClick={handleVideoPlay} className="focus:outline-none">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="144"
        height="144"
        viewBox="0 0 144 144"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M143.741 71.7415C143.741 111.363 111.621 143.483 71.9993 143.483C32.3776 143.483 0.257812 111.363 0.257812 71.7415C0.257812 32.1198 32.3776 0 71.9993 0C111.621 0 143.741 32.1198 143.741 71.7415ZM100.696 71.7414L57.6507 43.0448V100.438L100.696 71.7414Z"
          fill="white"
          fillOpacity="0.8"
        />
      </svg>
    </button>
  );
};

export default Video;
