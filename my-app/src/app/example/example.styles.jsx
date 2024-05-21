"use client";

import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const StyledButton = styled(Button)({
    marginLeft: 20,
    textTransform: "capitalize",
    fontSize: "1em",
    backgroundColor: "darkblue",
});

const StyledDiv = styled("div")({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "30px",
});

export { StyledButton, StyledDiv };