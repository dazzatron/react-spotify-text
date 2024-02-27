import useResizeObserver from "@react-hook/resize-observer";
import React, { useRef, useState } from "react";
import "./react-spotify-text.scss";

// todo:
// base speed on width, not amount of chars
// base pause on something else, not speed
// padding-right 1rem, not 10%, and calc transitions
// tests
// 1 command to delete old and publish new with bump in version
// props: speed, pause time, mask size, pause on hover*
// reset on update text*
// fully test npm install
// pixel perfect with spotify
// accessibility
// fix imports
// dont put sb files in dist folder

const ReactSpotifyText = (props: { text: string }) => {
  const { text } = props;
  const reactSpotifyTextPlaceholderRef = useRef<HTMLDivElement>(null);
  const [isOverflowing, setIsOverflowing] = useState<boolean>(false);
  const animationDuration = text.length / 7.5 + "s";

  useResizeObserver(reactSpotifyTextPlaceholderRef, () => {
    if (
      reactSpotifyTextPlaceholderRef.current!.clientWidth >=
      reactSpotifyTextPlaceholderRef.current!.parentElement!.clientWidth
    ) {
      setIsOverflowing(true);
    } else {
      setIsOverflowing(false);
    }
  });

  return (
    <div className="react-spotify-text-wrapper">
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
