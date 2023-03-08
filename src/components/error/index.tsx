import { FC } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";

const Error: FC<Props> = ({ onClick }) => {
  return (
    <Box component="div" textAlign="center">
      <Typography variant="h4">Something went wrong</Typography>
      <Button onClick={onClick} variant="outlined" sx={{ marginTop: "1rem" }}>
        Try again
      </Button>
    </Box>
  );
};

interface Props {
  onClick: () => void;
}

export default Error;
