import React from "react";
import { Box, Stack, Typography } from "@mui/material";

const Footer = () => (
  <Box mt="40px" bgcolor="#D2D9A0">
    <Stack
      gap="40px"
      sx={{ alignItems: "center" }}
      flexWrap="wrap"
      px="50px"

    >
    </Stack>
    <Typography
      variant="h5"
      sx={{ fontSize: { lg: "28px", xs: "20px" } }}
      mt="40px"
      textAlign="center"
      pb="30px"
    >
      FEEL GREAT. BODY AND MIND
    </Typography>
  </Box>
);

export default Footer;
