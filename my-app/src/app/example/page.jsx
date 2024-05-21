"use client";

import * as React from "react";
import { Button, Typography } from "@mui/material";

import { StyledButton, StyledDiv } from "./example.styles";

export default function Page() {
  return (
    <StyledDiv>
      <Typography variant="p">Click it:</Typography>
      <StyledButton
        variant="contained"
        onClick={() => alert("Yeah you did it!")}
      >
        Just do it
      </StyledButton>
    </StyledDiv>
  );
}
