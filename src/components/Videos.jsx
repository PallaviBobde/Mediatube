import React from "react";
import { Stack, Box, Typography } from "@mui/material";

import { ChannelCard, Loader, VideoCard } from "./";

const Videos = ({ videos, direction, selectedCategory }) => {
  if (!videos?.length)
    return (
      <>
        <Loader selectedCategory={selectedCategory} />
      </>
    );

  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="start"
      alignItems="start"
      gap={2}
    >
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
