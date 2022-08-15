import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Grid } from '@mui/material';

import azure from './img/azure.jpg'
import excel from './img/excel.jpg'
import toolbox from './img/toolbox.jpg'

function Cert() {
    const azure_text = "azure"
    const excel_text = "excel"
    const toolbox_text = "toolbox"
  
    return (
        <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        p={2}
        >
            <Card sx={{ maxWidth: '95%', width: 1000}}>
                <CardContent>

                    <Splide aria-label="My Favorite Images">
                        <SplideSlide>
                            <CardMedia
                                component="img"
                                // sx={{ maxWidth: '80%', width: 300 }}
                                width="auto"
                                image={azure}
                                alt={azure_text}
                            />
                        </SplideSlide>
                        <SplideSlide>
                            <CardMedia
                                component="img"
                                width="auto"
                                image={excel}
                                alt={excel_text}
                            />
                        </SplideSlide>
                        <SplideSlide>
                            <CardMedia
                                component="img"
                                width="auto"
                                image={toolbox}
                                alt={toolbox_text}
                            />
                        </SplideSlide>
                    </Splide>
                </CardContent>
            </Card>
        </Grid>
    );
}

export default Cert