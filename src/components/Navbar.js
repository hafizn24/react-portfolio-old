import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

const pages = ['Home', 'Rick and Morty'];
const pagemap = new Map()
pagemap.set('Home', '/')
pagemap.set('Rick and Morty', '/rick-morty-api')


const Navbar = () => {
  
  
  const handleCloseNavMenu = (element) => {
    pagemap.forEach((value,key) => {
      if(element == key){
        window.location.href = value
      }
    })
  }

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2, 
              display: "flex",
              fontFamily: 'Lato',
              fontWeight: 900,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LEGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: "flex"}}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => handleCloseNavMenu(page)}
                sx={{ 
                  my: 2, 
                  color: '#f9fbe7', 
                  display: 'block',
                  fontFamily: 'Lato',
                  fontWeight: 700, 
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
