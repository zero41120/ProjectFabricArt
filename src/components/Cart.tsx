import { Box, Button, Card, CardContent, CardMedia, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import Swal from 'sweetalert2';
import { Contact } from '../data/contact';
import products from '../data/product';

export const Cart = () => {
  const maybeJson = localStorage.getItem('shoppingCart');
  const cartItems = maybeJson ? JSON.parse(maybeJson) : {};
  const state = products.reduce((acc, product) => {
    if (cartItems[product.id]) {
      const quantity = parseInt(cartItems[product.id].quantity, 10);
      const price = quantity >= product.bulkAmount ? product.bulkPrice : product.price;
      acc.push({
        ...product,
        quantity: quantity,
        price: price,
        total: price * quantity,
      });
    }
    return acc;
  }, [] as any[]);

  const totalSum = state.reduce((acc, product) => acc + product.total, 0);

  const handleCheckout = () => {
    Swal.fire('金流系統尚為完成', `請截圖並聯絡客服E-Mail: ${Contact.email} 或電話: ${Contact.phone}`, 'info');
  };

  const handleReset = async () => {
    const result = await Swal.fire({
      title: '確定要清空購物車嗎?',
      icon: 'warning',
      showCancelButton: true,
      cancelButtonText: '取消',
      confirmButtonText: '清空',
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
    });
    if (result.value) {
      localStorage.removeItem('shoppingCart');
      window.location.reload();
    }
  };

  return (
    <Stack spacing={1} padding={2}>
      {state.length === 0 && <Typography variant="h3">購物車內無物品</Typography>}
      {state.map((product, index) => (
        <Card key={index}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <CardMedia
              sx={{ objectFit: 'contain', height: '50px', width: '50px' }}
              component="img"
              image={product.image}
            />
            <CardContent sx={{ width: '100%' }}>
              <Grid container>
                <Grid item xs={12} sm={5}>
                  <Typography>{product.name}</Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Typography>
                    單價 {product.price} x 數量 {product.quantity}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={3}>
                  <Typography color="secondary">總價 {product.total}元</Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Box>
        </Card>
      ))}
      <Typography variant="h5">總計: {totalSum} 元</Typography>
      <Button size="large" variant="contained" onClick={handleCheckout}>
        結帳
      </Button>

      <Button size="small" variant="outlined" color="error" onClick={handleReset}>
        清空購物車
      </Button>
    </Stack>
  );
};
