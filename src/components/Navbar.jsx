import { Box, IconButton, Stack } from "@mui/material";
import { Link } from "react-router-dom";

import { allCategories, logo } from "../utils/constants";
import { SearchBar } from "./";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = ({
  setSelectedCategory,
  selectedCategory,
  hideCategories=false,
}) => (
  <Box
    sx={{
      position: "sticky",
      background: "#000",
      top: 0,
      justifyContent: "space-between",
    }}
  >
    <Stack
      direction="row"
      alignItems="center"
      sx={{
        background: "#000",
        justifyContent: "space-between",
        padding:"10px"
      }}
    >
      <Link
        to="/"
        style={{ display: "flex", alignItems: "center", color: "white" }}
      >
        <img src={logo} alt="logo" height={30} />
        <p style={{ color: "white", fontSize: "12px", marginLeft: "10px" }}>
          Youtube
        </p>
      </Link>

      <SearchBar />
    </Stack>
    {!hideCategories && (
      <Stack
        direction="row"
        sx={{
          width: "100%",
          overflow: "scroll",
          scrollbarWidth: "none",
          "-ms-overflow-style": "none",
        }}
      >
        {allCategories.map((category) => (
          <button
            className="category-btn"
            onClick={() => setSelectedCategory(category.name)}
            style={{
              background: category.name === selectedCategory && "#333",
              color: "white",
              margin: "5px",
              fontWeight: "bold",
            }}
            key={category.name}
          >
            <span
              style={{
                opacity: category.name === selectedCategory ? "1" : "0.8",
              }}
            >
              {category.name}
            </span>
          </button>
        ))}
      </Stack>
    )}
  </Box>
);

export default Navbar;
