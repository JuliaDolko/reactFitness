import React from "react";
import { Box, Typography, Button } from "@mui/material";
import HeroBannerImage from "../assets/images/posters-fitness-woman.jpg.png";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "100px", xs: "70px" },
        ml: { sm: "50px" },
      }}
      position="relative"
      pl="50px"
      mr={1}
    >
      <Typography
        color="#24A65C"
        fontWeight="600"
        fontSize="40px"
        letterSpacing="8px"
      >
        FEEL GREAT. BODY AND MIND.
      </Typography>

      <Typography
        fontWeight="600"
        letterSpacing="2px"
        sx={{ fontSize: { lg: "40px", xs: "30px" } }}
        mb="23px"
        mt="30px"
        color="#E8F2D0"
      >
        with 100+ of exercises
      </Typography>

      <Typography fontSize="22px" fontWeight='300' lineHeight="40px" mb={4} color="#E8F2D0">
      Whether you're a beginning exerciser who needs help getting <br/> started or 
      someone who wants to add some spice to your fitness <br/>routine, our Library offers a variety of movements to choose from.
      </Typography>

      <Button
        variant="contained"
        color="success"
        href="#exercises"
        sx={{ backgroundColor: "#44A65D", padding: "10px" }}
      >
        Check it out{" "}
      </Button>

      <Typography
        fontWeight={600}
        pt="40px"
        zIndex="30"
        fontSize="200px"
        color="#E8F2D0" 
        sx={{ opacity: "0.5", display: { lg: "block", xs: "none" } }}
      >
        push yourself
      </Typography>

      <img src={HeroBannerImage} alt="banner" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
