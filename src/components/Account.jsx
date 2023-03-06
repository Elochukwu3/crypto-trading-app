import { Box, Container, TextField, Typography, Button, CssBaseline } from "@mui/material";
import { ExitToApp } from "@mui/icons-material";
import React from "react";
import NaBar from "./NaBar";
import forex from "../image/forex2.png"
import { Outlet } from "react-router-dom";

const Account = () => {
  return (
    <div>
      <NaBar position={"fixed"} />
      <CssBaseline/>
      <Container
      component={"div"}
      maxWidth={'xl'}
        sx={{
          display: "flex",
          gap:5,
          justifyContent: 'space-around',
          width: "100%",
          mt: 6,
        }}
      >
        <Box position={"relative"} maxWidth={'xl'} component={"div"} sx={{width:'100%',color:'white', height: '100vh',  bgcolor: "#3d1e58", flex:'1', display:'flex', flexDirection:'column', alignItems:'center',}}>
         <div>
         <Typography variant="h4" mb={1}>
        Sign up now
         </Typography>
         <Typography variant="p" component={'div'} sx={{fontWeight: 'bold', }} mb={1}>
        Sign up now to start trading
         </Typography>
         <Typography variant="h5" component={'div'} sx={{fontWeight: 'bold'}} mb={1}>
        Smoothly and Swiftly
         </Typography>
         <div>
          {/* <img src={forex} alt="" /> */}
         </div>
         </div>
        </Box>
        <Box
          sx={{
            width: { xs: "100%", sm: "50%" },
            m: 0,
            fontFamily: "'Alegreya Sans', sans-serif",
            px:5,
          }}
        >
          <Typography
            variant="p"
            component={"div"}
            fontSize={21}
            sx={{ my: 5 }}
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
              sx={{ width: "100%", bgcolor: "white", mb: 4 ,  "& fieldset": { borderRadius: "30px" }}}
            />
          </div>
          <div>
            <Button
              variant="outlined"
              sx={{
                px: 9,
                borderRadius: 40,
                bgcolor: "#3c115f",
                color: "black",
                ":hover": { borderColor: "#3c115f", color: "#3c115f" },
              }}
              endIcon={<ExitToApp />}
            >
              {" "}
              REGISTER NOW{" "}
            </Button>
          </div>
          <Typography sx={{my:3, textTransform:'capitalize'}} variant='h5' component={'div'} textAlign='center'>
         Or Sign in with Google
          </Typography>

          <Box sx={{my:3}}>
          You don't have an account? <span>Register</span>
          </Box>
         
        </Box>
        <Outlet/>
      </Container>
    </div>
  );
};

export default Account;
