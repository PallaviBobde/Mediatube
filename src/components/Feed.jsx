import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";

import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Videos, Sidebar, Navbar } from "./";
import SideBarSmall from "./SideBarSmall";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState(null);
  const [showBigSideBar, setShowBigSideBar] = useState(false);

  useEffect(() => {
    setVideos(null);

    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items))
    }, [selectedCategory]);

    

  return (
    <>
      <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
        {showBigSideBar && (
          <Sidebar
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            setShowBigSideBar={setShowBigSideBar}
          />
        )}
        <Box
          sx={{
            height: { sx: "auto", md: "92vh" },
          }}
        >
          <SideBarSmall
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            setShowBigSideBar={setShowBigSideBar}
          />
        </Box>

        <Box  sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
          <Navbar
            setSelectedCategory={setSelectedCategory}
            selectedCategory={selectedCategory}
          />
          <Videos videos={videos} selectedCategory={selectedCategory} />
        </Box>
      </Stack>
      <Typography
        className="copyright"
        variant="body2"
        sx={{ mt: 1.5, color: "#fff" }}
      >
        Copyright © 2024 pallavibobde1@gmail.com
      </Typography>
    </>
  );
};

export default Feed;
