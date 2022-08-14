import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const CharacterCard = ({name, image, gender, location, species, status }) =>{
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt={name}
        height="300px"
        image={image}
      />
      <CardContent>
        <Typography  variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Gender: {gender} <br />
          Location: {location} <br />
          Species: {species} <br />
          Status: {status} <br />
        </Typography>
      </CardContent>
    </Card>
  );
}
export default CharacterCard;