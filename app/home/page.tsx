"use client";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import HomeList from '../components/HomeList';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  borderRadius:20
}));

export default function Home() {
  return (
    <Box sx={{ flexGrow: 1, margin:"2% 1%" }}>
      <Grid container spacing={2} columns={16}>
        <Grid item xs={8} 
        sx={{
            height:"600px"
          }}>
          <Item sx={{
            height:"100%",
            display:"flex",
            justifyContent:"center",
            alignItems:"center"
          }} >
            <Box>
            <Typography sx={{
                fontSize:50,
                textAlign:"center",
                letterSpacing:3,
                color:"black"
            }}
            className='!font-grafitti'
            >
            Appear weak when you are strong, and strong when you are weak.
            </Typography>
            <Typography sx={{
                fontSize:40,
                textAlign:"center",
                letterSpacing:3,
                color:"black"
            }}
            className='!font-grafitti'
            >
            ~Sun Tzu
            </Typography>
            </Box>
            
          </Item>
        </Grid>
        <Grid item xs={8} 
        sx={{
            height:"600px"
          }}>
          <Item sx={{
            height:"100%"
          }}>
            <Typography sx={{
                textAlign:"center",
                color:"black",
                fontWeight:700,
                fontSize:20,
                letterSpacing:3
            }}>
            Latest
            </Typography>
            <HomeList />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}