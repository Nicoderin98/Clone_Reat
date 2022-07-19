import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


  const stile={
    padding: "5px",
    width: "100%"
  };

function Cards() {
  return (
    <div className='px-5 py-5'>
    <Card style={stile} sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          style={stile}
          component="img"
          height="140"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeqIGbZGNYSwxnb3GN6Mj6p4znEpH7ohcDhQ&usqp=CAU"
          alt="green iguana"
        />
        <CardContent className='text-center '>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
  );
}
export default Cards
