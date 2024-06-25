import React from "react";
import { IconButton,Stack } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import { allCategories, categories, logo } from "../utils/constants";

const Categories = ({
  selectedCategory,
  setSelectedCategory,
  setShowBigSideBar,
}) => (
  <Stack
    direction="row"
    sx={{
      overflowY: "auto",
      height: { sx: "auto", md: "95%" },
      flexDirection: "column",
      position: "absolute",
      top:0,
      background: "#111",
      zIndex: 20,
      padding: "0 20px",
    }}
  >
    <IconButton
      onClick={() => {
        setShowBigSideBar(false);
      }}
      style={{ borderBottom:"1px solid gray" ,borderRadius:0,justifyContent:"start"}}
    >
      <MenuIcon sx={{ color: "white", padding: "10px" }} />
      <img src={logo} alt="logo" height={30} />
      <p style={{ color: "white", fontSize: "12px",marginLeft:"10px" }}>Youtube</p>
    </IconButton>
    {allCategories.map((category) => (
      <button
        className="category-btn"
        onClick={() => setSelectedCategory(category.name)}
        style={{
          background: category.name === selectedCategory && "#333",
          color: "white",
          minWidth: "200px",
        }}
        key={category.name}
      >
        <span
          style={{
            color: "white",
            marginRight: "15px",
          }}
        >
          {category.icon}
        </span>
        <span
          style={{ opacity: category.name === selectedCategory ? "1" : "0.8" }}
        >
          {category.name}
        </span>
      </button>
    ))}
  </Stack>
);

export default Categories;
