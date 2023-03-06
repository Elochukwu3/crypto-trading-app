import {
  Box,
  Container,
  TextField,
  Typography,
  Button,
  CssBaseline,
  Paper,
} from "@mui/material";
import React from "react";
import NaBar from "./NaBar";
import { Link, Outlet } from "react-router-dom";
import { grey, lightBlue,  pink, deepPurple } from "@mui/material/colors";
import { ExitToApp } from "@mui/icons-material";
import forex from "../image/forex.png";
import { ROUTER_PATH } from "../asset/route/routePath";

const Account = () => {
  return (
    <div>
      <NaBar position={"fixed"} />
      <Container
        maxWidth={"xl"}
        component={"div"}
        width = {"100%"}
        sx={{
          display: "flex",
          gap: 5,
          width: "100%",
          mt: 6,
         padding: {sx: 0, sm: 0},
        }}
      >
        <Box
          position={"relative"}
          component={"div"}
          sx={{
            width: "100%",
            height: "100vh",
            bgcolor: "#3d1e58",
            flex: "1",
            display: {sm:"flex", xs: "none"},
           
          }}
        >
          <Paper 
          component={"div"}
          sx={{
                background: `url(${forex}) #3d1e58`,
                width: "100%",  
                minHeight: "100%",
                color: "white",
                backgroundRepeat: 'no-repeat',
                backgroundPosition: "center center",
                display: {sm:"flex", xs: "none"}, 
                flexDirection: "column",
                alignItems: 'center'
              }}>

        
            <Typography variant={"h2"} fontWeight={"1000"} mb={1} mt={3}>
              Sign up now
            </Typography>
            <Typography
              variant="p"
              component={"div"}
              sx={{ fontWeight: "bold", fontSize: "1.3rem" }}
              mb={1}
              color = { pink[200]}
              ml = {10}
              my={3}
            >
              Sign up now to start trading
            </Typography>
            <Typography
              variant="h4"
              component={"div"}
              fontWeight={"bold"}
              mb={1}
              
              
            >
              Smoothly and Swiftly
            </Typography>
            <div sx={{display: "fle"}}>
            
              <Typography
              variant="h5"
              component={"div"}
              fontWeight={"bold"}
              sx ={{writingMode: "vertical-rl", textOrientation: "upright"}}
              textTransform = {"uppercase"}
              width = {400}
              alignItems = {"left"}
              >
                trade now
              </Typography>
              </div>
          </Paper>
        </Box>
        <Box
          sx={{
            width: { xs: "100%", sm: "50%" },
            m: 0,
            fontFamily: "'Alegreya Sans', sans-serif",
            px: 5,
          }}
        >
          <Typography
            variant="p"
            component={"div"}
            fontSize={21}
            sx={{ my: 4 }}
            textAlign = {"center"}
          >
            We provide a full range of forex trading services for you.
          </Typography>
          <Typography
            variant="h2"
            textAlign={"center"}
            component={"div"}
            fontWeight={"bold"}
            fontSize={"2.1rem"}
            sx={{ my: 3, fontFamily: " 'Poppins', sans-serif;" }}
          >
            Sign In
          </Typography>
          <div>
            <TextField
              type={"email"}
              variant="outlined"
              label={"Email Address"}
              placeholder={"e.g elo@gmail.com"}
              sx={{
                width: "100%",
                bgcolor: "white",
                mb: 4,
                "& fieldset": { borderRadius: "30px" },
              }}
            />
          </div>
          <div>
            <TextField
              type={"password"}
              variant="outlined"
              label={"Password"}
              placeholder={"strong password"}
              sx={{
                width: "100%",
                bgcolor: "white",
                mb: 4,
                "& fieldset": { borderRadius: "30px" },
              }}
            />
          </div>
          <div>
            <Button
              variant="outlined"
              sx={{
                px: 9,
                borderRadius: 40,
                bgcolor: "#3c115f",
                color: pink[200],
                ":hover": { borderColor: "#3c115f", color: deepPurple[700] },
              }}
              endIcon={<ExitToApp />}
            >
              {" "}
              Sign In
            </Button>
          </div>
          <Box sx={{ my: 3, cursor: "pointer" }} color= { pink[200]}>
            You don't have an account? <Link to={ROUTER_PATH.CreateAccount}>Register</Link>
          </Box>
        </Box>
        <Outlet />
      </Container>
    </div>
  );
};

export default Account;
