import React from "react";
import { Paper, Typography } from "@material-ui/core";

const VideoDetail = ({ video }) => {
  if (!video) return <div>Loading...</div>;

  console.log(video.id.videoId);

  const videoSrc = `https://youtube.com/embed/${video.id.videoId}`;
  return (
    <div>
      {/* <h1>This is Video Detail Component</h1> */}
      <Paper elevation={3} style={{ height: "30em", paddingTop: "15px" }}>
        <iframe
          frameBorder="0"
          height="100%"
          width="100%"
          title="Video Player"
          src={videoSrc}
        />
        <Typography variant="h4">
          {video.snippet.title} - {video.snippet.channelTitle}
        </Typography>
        <Typography variant="subtitle1">
          {video.snippet.channelTitle}
        </Typography>
        <Typography variant="subtitle2">{video.snippet.description}</Typography>
      </Paper>

      {/* <Paper elevation={3} style={{ padding: "15px" }}>
        
      </Paper> */}
    </div>
  );
};

export default VideoDetail;
