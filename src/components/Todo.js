import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import CheckIcon from '@mui/icons-material/Check';
import IconButton from '@mui/material/IconButton';

export default function Todo(){

    return(
        <>
            <Card sx={{ minWidth: 275, background: "#283593" , color: "#ffffff", marginTop: 5}}>
        <CardContent>
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid size={8}>
        <Typography variant="h5" component="div">
        المهمة الأولى
        </Typography>
        </Grid>
        <Grid size={4} display="flex" justifyContent=" space-around" alignItems="center" >
        <IconButton aria-label="delete"
        style={{color: "#8bc34a",
            background: "#fff",
            border: "solid #8bc34c 3px"
        }}>
            
        <CheckIcon />
      </IconButton>
      <IconButton aria-label="delete"
        style={{color: "#8bc34a",
            background: "#fff",
            border: "solid #8bc34c 3px"
        }}>
            
        <CheckIcon />
      </IconButton>
      <IconButton aria-label="delete"
        style={{color: "#8bc34a",
            background: "#fff",
            border: "solid #8bc34c 3px"
        }}>
            
        <CheckIcon />
      </IconButton>
        </Grid>
      </Grid>
    </Box>
        </CardContent>
    </Card> 
        </>
    )
}