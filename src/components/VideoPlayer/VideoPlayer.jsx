import React, { useRef } from "react";
import "./VideoPlayer.css";
import { Picture } from "../../assets/Picture";

const VideoPlayer = ({ showVideo, setShowVideo }) => {
  const player = useRef(null);
  const closePlayer = (e) => {
    if (e.target === player.current) {
      setShowVideo(false);
    }
  };

  return (
    <div
      className={`video-player ${showVideo ? "" : "hide"}`}
      ref={player}
      onClick={closePlayer}
    >
      <video src={Picture.Clip} autoPlay muted controls></video>
    </div>
  );
};

export default VideoPlayer;
