import React from 'react';
import { Box, CircularProgress, Stack, Typography } from '@mui/material';

const Loader = ({ selectedCategory }) => (
  <Box minHeight="95vh">
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      height="70vh"
    >
      <CircularProgress />
      <Typography style={{ color: "white" }}>Loading {selectedCategory} Videos...</Typography>
    </Stack>
  </Box>
);

export default Loader;
