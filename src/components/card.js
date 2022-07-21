import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import "./card.css"

  const stile={
    padding: "5px",
    width: "100%"
  };

function Cards() {
  return (
    <div className=' py-5 '>
    <Card className="primo shadow p-3 mb-5 bg-body rounded"style={stile} sx={{ maxWidth: 240 }}>
      <CardActionArea>
        <CardMedia
          style={stile}
          component="img"
          image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeqIGbZGNYSwxnb3GN6Mj6p4znEpH7ohcDhQ&usqp=CAU"}
          alt="green iguana"
        />
        <CardContent className='text-center '>
          <Typography gutterBottom variant="h5" component="div">
            <strong> Lizard </strong>
          </Typography>
          <Typography variant="h7" color="text.secondary">
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
