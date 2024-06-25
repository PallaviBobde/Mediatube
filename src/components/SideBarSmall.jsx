import React from "react";
import { IconButton, Stack } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import { categories } from "../utils/constants";

const SideBarSmall = ({
  selectedCategory,
  setSelectedCategory,
  setShowBigSideBar,
}) => (
  <Stack
    direction="row"
    sx={{
      overflowY: "auto",
      height: { sx: "auto", md: "95%" },
      flexDirection: { md: "column" },
    }}
  >
    <IconButton
      onClick={() => {
        setShowBigSideBar(true);
      }}
    >
      <MenuIcon sx={{ color: "white", padding: "10px" }} className="menu-btn" />
    </IconButton>
    {categories.map((category) => (
      <button
        className="category-btn"
        onClick={() => setSelectedCategory(category.name)}
        style={{
          background: category.name === selectedCategory && "#ffffff20",
          color: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding:"15px 10px"
        }}
        key={category.name}
      >
        <span
          style={{
            color: "white",
          }}
        >
          {category.icon}
        </span>
        <span style={{ fontSize: "12px" }}>{category.name}</span>
      </button>
    ))}
  </Stack>
);

export default SideBarSmall;
