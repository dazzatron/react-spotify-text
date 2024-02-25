import useResizeObserver from "@react-hook/resize-observer";
import React, { useRef, useState } from "react";
import "./react-spotify-text.scss";

// todo: 
// base speed on width, not amount of chars
// base pause on something else, not speed
// padding-right 1rem, not 10%, and calc transitions
// tests
// publish

const ReactSpotifyText = (props: { text: string }) => {
  const { text } = props;
  const reactSpotifyTextPlaceholderRef = useRef<HTMLDivElement>(null);
  const reactSpotifyTextWrapperRef = useRef<HTMLDivElement>(null);
  const [isOverflowing, setIsOverflowing] = useState<boolean>(false);
  const animationDuration = text.length / 7.5 + "s";

  const handleResize = () => {
    if (
      reactSpotifyTextPlaceholderRef.current &&
      reactSpotifyTextWrapperRef.current &&
      reactSpotifyTextPlaceholderRef.current.clientWidth >
        reactSpotifyTextWrapperRef.current.clientWidth
    ) {
      setIsOverflowing(true);
    } else {
      setIsOverflowing(false);
    }
  };

  useResizeObserver(reactSpotifyTextWrapperRef, () => handleResize());
  useResizeObserver(reactSpotifyTextPlaceholderRef, () => handleResize());

  return (
    <div
      className="react-spotify-text-wrapper"
      ref={reactSpotifyTextWrapperRef}
    >
      <div
        style={{ visibility: isOverflowing ? "hidden" : "visible" }}
        className="react-spotify-text-placeholder"
        ref={reactSpotifyTextPlaceholderRef}
      >
        {text}
      </div>
      {isOverflowing && (
        <div className="react-spotify-text" style={{ animationDuration }}>
          <div className="react-spotify-text-inner">
            {[...Array(2)].map((x, i) => (
              <div
                key={i}
                className="react-spotify-text-text"
                style={{ animationDuration }}
              >
                {text}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ReactSpotifyText;
