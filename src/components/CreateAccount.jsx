import React, {useEffect, useState} from 'react';
import { Box, Container, TextField, Autocomplete, Typography, Button, Select, MenuItem, InputLabel, styled} from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';
import {countries} from "../asset/countries";
import NaBar from "./NaBar";
console.log(Object.keys(countries));

const CustomTextField = styled(TextField)({
       width: "100%",
          backgroundColor: "white",
          marginBottom: '20px',
          "& fieldset": { borderRadius: "30px" },
});

function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

  const data = []
  const doll = Object.entries(countries).map(([a, b])=> {
    data.push(b)
    return data
  })
  


 function CreateAccount() {
    
  const [options, setOptions] = useState([]);
  const [open, setOpen] = useState(false);
  const loading = open && options.length === 0;

  useEffect(() => {
    let active = true;
    if (!loading) {
      return undefined;
    }
    (async () => {
      await sleep(1e3); 
      if (active) {
        setOptions([...data]);
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  
  return (
    <form noValidate autoComplete="off">
      <NaBar/>
      <Container  sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "auto  ",
          bgcolor: "white",
          mt: 6,
        }}>
        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center',  width: { xs: "100%", sm: "60%" },
            bgcolor: "",
            m: 0,
            fontFamily: "'Alegreya Sans', sans-serif",}}>
           
          <Typography
            variant="h2"
            textAlign={"center"}
            component={"div"}
            fontWeight={"bold"}
            fontSize={"2.1rem"}
            sx={{ my: 3, fontFamily: " 'Poppins', sans-serif;" }}
          >
            Sign Up
          </Typography>
          <Typography
            variant="p"
            component={"div"}
            fontSize={21}
            sx={{ my: 2 }}
          >
           Kindly provide your you details 
          </Typography>

        <CustomTextField
          required
          id="firstName"
          label="First Name"
          variant="outlined"
          
        />
        <CustomTextField
          required
          id="lastName"
          label="Last Name"
          variant="outlined"
        />
     
      <CustomTextField
        required
        id="email"
        label="Email"
        variant="outlined"
      />
      <CustomTextField
        required
        id="password"
        label="Password"
        type="password"
        variant="outlined"
      />
      <CustomTextField
        required
        id="passwordConfirm"
        label="Confirm Password"
        type="password"
        variant="outlined"
      />
      <Button>Select Country</Button>
       <Autocomplete
      id="asynchronous-demo"
      sx={{ width:' 100%', my:5 }}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      isOptionEqualToValue={(option, value) => option === value}
      getOptionLabel={(option) => option}
      options={options}
      loading={loading}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Country"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </>
            ),
          }}
        />
      )}
    />
      <Button variant="contained" color="primary" >
        Create Account
      </Button>
      </Box>
        </Container>
    </form>
  );
}

export default CreateAccount;
