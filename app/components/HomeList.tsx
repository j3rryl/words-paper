"use client";
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

export default function HomeList() {
  return (
    <List sx={{ margin:"0 30px", bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start" sx={{
        border:1,
        borderRadius:5,
        borderColor:"gray",
        margin:"30px 0"
      }}>
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/images/kazuma.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary={
            <Typography sx={{
                color:"black",
                fontWeight:700
            }}>
                A Day At Disney Land
            </Typography>
          }
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
              {" It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ip..."}
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <ListItem alignItems="flex-start" sx={{
        border:1,
        borderRadius:5,
        borderColor:"gray",
        margin:"30px 0"
      }}>
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/images/NYU.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary={
            <Typography sx={{
                color:"black",
                fontWeight:700

            }}>
                A Day in NYU
            </Typography>
          }
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {" It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ip..."}

              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <ListItem alignItems="flex-start" sx={{
        border:1,
        borderRadius:5,
        borderColor:"gray",
        margin:"30px 0"
      }}>
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/images/bleach.png" />
        </ListItemAvatar>
        <ListItemText
          primary={
            <Typography sx={{
                color:"black",
                fontWeight:700

            }}>
                New Bleach Trailer
            </Typography>
          }
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {' It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ip...'}
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <ListItem alignItems="flex-start" sx={{
        border:1,
        borderRadius:5,
        borderColor:"gray",
        margin:"30px 0"
      }}>
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/images/nfs.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary={
            <Typography sx={{
                color:"black",
                fontWeight:700

            }}>
                NFS Most Wanted
            </Typography>
          }
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {' It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ip...'}
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}