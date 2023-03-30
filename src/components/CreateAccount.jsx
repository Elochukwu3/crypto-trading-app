import React, { useState } from "react";
import {
  Box,
  Container,
  TextField,
  Typography,
  Grid,
  Button,
  styled,
} from "@mui/material";
import NaBar from "./NaBar";
import { FORM_DATA } from "../asset/data/data1";
import { ArrowDownward, ArrowForwardOutlined, ChevronLeft, ChevronLeftTwoTone, Send } from "@mui/icons-material";
import zIndex from "@mui/material/styles/zIndex";

const CustomTextField = styled(TextField)({
  width: "100%",
  backgroundColor: "white",
  "& fieldset": { borderRadius: "30px" },
  ":focus": { borderBottom: "2px solid #3c115f" },
});



function CreateAccount() {
  const [valid, setValid] = useState("purple");
  const [move, setMove] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [value, setValue] = useState({
    firstName: "",
    lastName: "",
    password: "",
    email: "",
  });

  const onInputChange = (e) => {
    setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    valid === "red" && setValid("purple");
  };
  const enabled = (item) => Boolean(item);

  const nextSlide = (event, param) => {
    enabled(param) &&
      setCurrentIndex(
        currentIndex === FORM_DATA.length - 1 ?  currentIndex  : currentIndex + 1
      );
      enabled(param) && setMove(currentIndex)
    const parent = event.target.parentElement;
    const elem = parent.querySelector("input");

   elem.value.trim() === "" ? setValid("red") : setValid("purple");
   
  };
const outsideNext = ()=>{
  setCurrentIndex(
    move 
  );
}
  const prevSlide = () => {
    setCurrentIndex(
      currentIndex === 0 ? 0 : currentIndex - 1
    );
    console.log(currentIndex);
  };



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
          position:"relative",
          mt: 6,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
 
            width: { xs: "100%", sm: "60%" },
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
                 <Button
                    variant="contained"
                    sx={{
                      width: "fit",
                      my: "13px",
                      // bgcolor: "#3c115f",
                      // ":hover": { bgcolor: "#3c115f" },
                      position:"absolute",
                      right: "1%",
                      bottom: "0%",
                      zIndex: 1
                    }}
                   
                  >
                  <ChevronLeftTwoTone sx={{transform: "rotate(90deg)"}} onClick={outsideNext}/>
                  <ChevronLeftTwoTone sx={{transform: "rotate(-90deg)"}} onClick={prevSlide}/>
                  </Button>
          <Grid
            container
            sx={{
              height: { sm: "50vh", xs: "43vh" },
              overflowY: "hidden",
            }}
          >
            {FORM_DATA.map(({ id, label, question }, index) => (
              <Box
                key={id + index}
                sx={{
                  backgroundColor: "inherit",
                  height: "100%",
                  width: "100%",
                  opacity: 1,
                  transition: "opacity 0.5s, transform 0.5s",
                  display: "flex",
                  flexDirection: "column",
                  transform: `translateY(-${currentIndex * 100}%)`,
                }}
              >
                <Typography variant="body1" component="p" fontSize={19} my={2}>
                  {question}
                </Typography>
                <CustomTextField
                  required
                  id={id}
                  label={label}
                  variant="standard"
                  onChange={onInputChange}
                  name={id}
                  style={{ borderBottom: `2px solid ${valid}` }}
                  value={value[id]}
                />
                <Typography
                  variant="body1"
                  component="span"
                  fontSize={12}
                  my={2}
                  color={"red"}
                >
                  {valid === "red" && `invalid ${label} format`}
                </Typography>
                {
                  currentIndex !== FORM_DATA.length - 1 ? (
                    <Button
                    variant="contained"
                    endIcon={<Send />}
                    sx={{
                      width: "15%",
                      my: "13px",
                      bgcolor: "#3c115f",
                      ":hover": { bgcolor: "#3c115f" },
                    }}
                    onClick={(e) => nextSlide(e, value[id])}
                  >
                    ok
                  </Button>
                  ): (<Button variant="contained" color="primary"  sx={{ width: "40%", bgcolor: "#3c115f", ":hover": { bgcolor: "#3c115f" }, }}>
                  Submit
                </Button>)
                }
               
              </Box>
            ))}
          </Grid>

          
        </Box>
      </Container>
    </form>
  );
}

export default CreateAccount;
