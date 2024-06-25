import { useState, useEffect } from "react";
import { Typography, Box } from "@mui/material";
import { useParams } from "react-router-dom";

import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Navbar, Videos } from "./";

const SearchFeed = () => {
  const [videos, setVideos] = useState(null);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items))
  }, [searchTerm]);

  return (
    <Box p={2} minHeight="95vh">
      <Navbar hideCategories/>
      <Typography  color="white" mb={3} ml={{ sm: "100px"}}>
        Results for '<span >{searchTerm}</span>'
      </Typography>
      <Box display="flex">
        <Box sx={{ mr: { sm: '100px' } }}/>
        {<Videos videos={videos} />}
      </Box>
    </Box>
  );
};

export default SearchFeed;
