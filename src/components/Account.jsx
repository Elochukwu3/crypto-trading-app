import { Box, Container, TextField, Typography } from '@mui/material'
import React from 'react'
import NaBar from './NaBar'

const Account = () => {
  return (
    <div>
        <NaBar position={"fixed"}/>
        <Container sx={{display: 'flex', flexDirection:"column", alignItems:'center', width: '100%', bgcolor:'snow', mt:6}}>
        <Box sx={{width:{xs:'100%', sm:"60%"}, bgcolor:'', m:0}}>
            <Typography variant='p' component={'div'} fontSize={21} sx={{my: 5, fontFamily:"'Alegreya Sans', sans-serif"}}>
            We provide a full range of forex trading services for you.
            </Typography>
            <Typography variant='h2'textAlign={'center'} component={'div'} fontWeight={'bold'} fontSize={'2.1rem'} sx={{my: 5, fontFamily:" 'Poppins', sans-serif;"}}>
            Sign Up
            </Typography>
        <div>
        <TextField type={"email"} variant="filled" label={'Email Address'} placeholder={"e.g elo@gmail.com"} sx={{width: "100%", bgcolor:'white'}}/>
        </div>
        <div>
        <TextField type={"password"}  variant="filled" label={'Password'} placeholder={"strong password"}  sx={{width: "100%", bgcolor:'white'}}/>
        </div>
        </Box>
        </Container>
    </div>
  )
}

export default Account