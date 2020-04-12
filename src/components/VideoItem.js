import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div>
      <Grid item xs={12}>
        <Paper
          style={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            paddingTop: "5px",
            frameBorder: "0",
            // flexGrow: "1",
          }}
          onClick={() => onVideoSelect(video)}
        >
          <img
            style={{ marginRight: "30px", justifyContent: "justify" }}
            alt="thumbnail"
            src={video.snippet.thumbnails.medium.url}
          />
          <Typography variant="subtitle1">
            <b>{video.snippet.title}</b>
          </Typography>
        </Paper>
      </Grid>
    </div>
  );
};

export default VideoItem;
