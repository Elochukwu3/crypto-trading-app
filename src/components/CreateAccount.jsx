import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  TextField,
  Autocomplete,
  Typography,
  Grid,
  Button,
  styled,
} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { countries } from "../asset/countries";
import NaBar from "./NaBar";
import { FORM_DATA } from "../asset/data/data1";
import { Send } from "@mui/icons-material";


const CustomTextField = styled(TextField)({
  width: "100%",
  backgroundColor: "white",
  // marginBottom: "20px",
  "& fieldset": { borderRadius: "30px" },
});

function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

const data = [];
Object.entries(countries).map(([a, b]) => {
  data.push(b);
  return data;
});

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
      <NaBar />
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "auto  ",
          bgcolor: "white",
          mt: 6,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: { xs: "100%", sm: "60%" },
            bgcolor: "",
            m: 0,
            fontFamily: "'Alegreya Sans', sans-serif",
          }}
        >
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

          <Grid
            container
            sx={{
              height: {sm:"50vh", xs:"43vh"},
              overflowY: "hidden",
  
            }}
          >
            {FORM_DATA.map(({id,label, question}, index) => (
              <Box  
              key={id + index}
                sx={{
                  backgroundColor: "inherit",
                  height: "100%",
                  width: "100%",
                  opacity: 1,
                  transform: "translateY(0)",
                  transition: "opacity 0.5s, transform 0.5s",
                  display: "flex",
                  flexDirection: "column",
                  gap:"10px"
                }}
              >
                <Typography variant="body1" component="p" fontSize={19} my={5}>
                  {question}
                </Typography>
                <CustomTextField
                  required
                  id={id}
                  label={label}
                  variant="standard"
                />
                
                <Button variant="contained" endIcon={<Send/>}  sx={{width:"15%", my:"13px", bgcolor: "#3c115f", ":hover":{bgcolor: "#3c115f"}}}>ok</Button>
              </Box>
            ))}
          </Grid>

          <Button>Select Country</Button>
          <Autocomplete
            id="asynchronous-demo"
            sx={{ width: " 100%", my: 5 }}
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
                      {loading ? (
                        <CircularProgress color="inherit" size={20} />
                      ) : null}
                      {params.InputProps.endAdornment}
                    </>
                  ),
                }}
              />
            )}
          />
          <Button variant="contained" color="primary">
            Create Account
          </Button>
        </Box>
      </Container>
    </form>
  );
}

export default CreateAccount;
