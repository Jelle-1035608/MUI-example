"use client";

import * as React from "react";
import { Button, Typography } from "@mui/material";

export default function Page() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "30px",
      }}
    >
      <Typography variant="p">Click it:</Typography>
      <Button
        variant="contained"
        sx={{ marginLeft: "20px", textTransform: "capitalize", fontSize: "1em" }}
        onClick={() => alert("Yeah you did it!")}
      >
        Just do it
      </Button>
    </div>
  );
}
