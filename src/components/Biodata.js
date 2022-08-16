import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { DiPython, DiHtml5, DiCss3, DiJavascript1, DiMysql, DiPhp, DiJava, DiMongodb } from "react-icons/di";
import { SiTensorflow, SiJupyter, SiRstudio } from "react-icons/si"
import { FaLinkedin } from "react-icons/fa"

import hafiz from './img/hafiz.jpg'

function Biodata() {
  const iconsize = 50
  return (
    <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        p={2}
    >
        <Card 
        sx={{ 
            display: 'flex', 
            // 550
            maxWidth: '95%',
            minheight: 300,
            maxheight: 400,
        }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h4">
                        Muhammad Hafiz Bin Mohd Nasarudin
                    </Typography>
                    <CardContent sx={{
                        textDecoration: "none"
                    }}>
                    <a style={{textDecoration:'none', color:'white'}} href="https://www.linkedin.com/in/muhammad-hafiz-bin-mohd-nasarudin-7a73171ab/" target="_blank"><FaLinkedin size={iconsize}/></a>
                    </CardContent>
                    <Typography variant="body1" color="text.secondary" component="div">
                        PROGRAMMING LANGUAGES & TOOLS
                    </Typography>
                    <DiPython size={iconsize}/>
                    <DiHtml5 size={iconsize}/>
                    <DiCss3 size={iconsize}/>
                    <DiJavascript1 size={iconsize}/>
                    <DiMysql size={iconsize}/>
                    <DiPhp size={iconsize}/>
                    <DiJava size={iconsize}/>
                    <SiTensorflow size={iconsize}/>
                    <SiJupyter size={iconsize}/>
                    <SiRstudio size={iconsize}/>
                    <DiMongodb size={iconsize}/>
                </CardContent>
            </Box>
            <CardMedia
                component="img"
                sx={{ maxWidth: '80%', width: 300 }}
                image={hafiz}
                alt="Muhammad Hafiz"
            />
        </Card>
    </Grid>
  );
}

export default Biodata