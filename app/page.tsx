import Card from "@/components/Card";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";

const Home = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
      className="container"
    >
      <Card />
    </Box>
  );
};

export default Home;
