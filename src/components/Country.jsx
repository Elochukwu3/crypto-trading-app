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

const Country = () => {
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
    <div>
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
    </div>
  )
}

export default Country