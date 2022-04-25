import { Button, Card, CardActions, CardContent, CardMedia, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import image1 from '../assets/Ariel_Infinity_LIQ_eCont_01.jpg';
import image2 from '../assets/Ariel_Infinity_LIQ_eCont_02.jpg';
import image3 from '../assets/Ariel_Infinity_LIQ_eCont_03.jpg';
import image4 from '../assets/Ariel_Infinity_LIQ_eCont_04.jpg';

const cards = [
  { image: image1, text: 'ARIEL超濃縮深層抗菌除臭洗衣精' },
  { image: image2, text: '日本連續7年No.1' },
  { image: image3, text: '日本最熱銷ARIEL超濃縮深層抗菌除臭洗衣精' },
  { image: image4, text: '日本最熱銷ARIEL超濃縮深層抗菌除臭洗衣精' },
];
export const Home = () => {
  return (
    <Stack padding={2} display="flex" spacing={2} justifyContent="center" alignItems="center">
      <Typography variant="body2" color="secondary.main">
        洗衣精大王批發
      </Typography>
      <Grid container spacing={2}>
        {cards.map((card, index) => (
          <Grid xs={12} sm={6} item>
            <Card>
              <CardMedia sx={{ objectFit: 'contain' }} height={400} component="img" image={card.image} />
              <CardContent>
                <Stack padding={2} display="flex" spacing={2} justifyContent="center" alignItems="center">
                  <CardActions>
                    <Link to="/product">
                      <Button size="large" variant="outlined" color="secondary">
                        產品一覽
                      </Button>
                    </Link>
                  </CardActions>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};
