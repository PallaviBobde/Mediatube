import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const onhandleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);

      setSearchTerm('');
    }
  };

  return (
    <Paper
      component="form"
      onSubmit={onhandleSubmit}
      sx={{
        borderRadius: 20,
        border: "1px solid #333",
        pl: 2,
        boxShadow: "none",
        mr: { sm: 5 },
        background: "#222",
      }}
    >
      <input
        className="search-bar"
        placeholder="Search something .."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ background: "#222",color:"white" }}
      />
      <IconButton type="submit"  aria-label="search">
        <SearchIcon sx={{ color: "#888",  }}/>
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
