import NavBar from "./NaBar";
import { Typography, Grid, Button } from "@mui/material";
import { Box } from "@mui/system";
import { deepOrange } from "@mui/material/colors";
import React from "react";
import { ExitToApp } from "@mui/icons-material";

const IntroSection = () => {
  return (
    <div>
      <Box
        sx={{
          width: "100%",
          minHeight: "100vh",
          bgcolor: "#3c115f",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          py: 3,
          gap: 20,
          "&:hover": {
            // backgroundColor: '#3C115FF',
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      >
        <NavBar position={"relative"} />
        <Grid container spacing={2} justifyContent={"center"}>
          <Grid
            item
            lg={12}
            xs={10}
            sx={{ textAlign: "center", color: "white" }}
          >
            <Typography
              variant={"h2"}
              fontWeight={"1000"}
              component="div"
              sx={{}}
            >
              Forex Trading
            </Typography>
            <Typography
              variant={"p"}
              fontFamily={"'Poppins', sans-serif"}
              fontSize={18}
              component="div"
              sx={{
                margin: { xs: "0 auto" },
                width: { sm: "100%", xs: "60%" },
                py: 3,
              }}
            >
              Start trading now with Forex Trading
            </Typography>
            <div>
              <Button
                variant="outlined"
                sx={{
                  px: 9,
                  borderRadius: 40,
                  bgcolor: "#ffff",
                  color: "black",
                  ":hover": { borderColor: "white", color: "white" },
                }}
                endIcon={<ExitToApp />}
              >
                REGISTER NOW
              </Button>
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default IntroSection;
