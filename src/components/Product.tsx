import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  List,
  ListItem,
  TextField,
  Typography,
} from '@mui/material';
import React from 'react';
import Swal from 'sweetalert2';
import products from '../data/product';
import { ShopState } from '../type/common';

export const Product = () => {
  const [state, setState] = React.useState(
    products.reduce((acc, product) => {
      acc[product.id] = { quantity: '' };
      return acc;
    }, {} as ShopState)
  );

  const handleChange = (event: any, id: string) => {
    const quantity = parseInt(event.target.value, 10);
    if (isNaN(quantity)) return;
    setState({ ...state, [id]: { quantity: event.target.value } });
  };

  const handleAddCart = () => {
    let cartItems: ShopState;
    try {
      const maybeJson = localStorage.getItem('shoppingCart');
      cartItems = maybeJson ? JSON.parse(maybeJson) : {};
    } catch (error) {
      cartItems = {};
    }
    const newState = { ...state };
    products.forEach((product) => {
      if (state[product.id].quantity) {
        const newAmount = parseInt(state[product.id].quantity ?? 0, 10);
        const oldAmount = parseInt(cartItems[product.id]?.quantity ?? 0, 10);
        const sum = `${newAmount + oldAmount}`;
        if (cartItems[product.id] == null) {
          cartItems[product.id] = { quantity: sum };
        } else {
          cartItems[product.id].quantity = sum;
        }
        newState[product.id].quantity = '';
      }
    });
    localStorage.setItem('shoppingCart', JSON.stringify(cartItems));
    setState(newState);
    Swal.fire('加入購物車', '', 'success');
  };

  return (
    <Grid container spacing={2} padding={2}>
      {products.map((product, index) => (
        <Grid xs={12} md={6} item key={index}>
          <Card>
            <CardMedia sx={{ objectFit: 'contain' }} height={200} component="img" image={product.image} />
            <Accordion square>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                <Typography>{product.name}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <List>
                  <ListItem>
                    <Grid container>
                      <Grid item xs={3}>
                        <Typography>品名</Typography>
                      </Grid>
                      <Grid item xs={9}>
                        <Typography>{product.name}</Typography>
                      </Grid>
                    </Grid>
                  </ListItem>
                  <Divider />

                  <ListItem>
                    <Grid container>
                      <Grid item xs={3}>
                        <Typography>內容量</Typography>
                      </Grid>
                      <Grid item xs={9}>
                        <Typography>{product.spec.size}</Typography>
                      </Grid>
                    </Grid>
                  </ListItem>
                  <Divider />

                  <ListItem>
                    <Grid container>
                      <Grid item xs={3}>
                        <Typography>有效期限</Typography>
                      </Grid>
                      <Grid item xs={9}>
                        <Typography>{product.spec.expireDate}</Typography>
                      </Grid>
                    </Grid>
                  </ListItem>
                  <Divider />

                  <ListItem>
                    <Grid container>
                      <Grid item xs={3}>
                        <Typography>原產地</Typography>
                      </Grid>
                      <Grid item xs={9}>
                        <Typography>{product.spec.location}</Typography>
                      </Grid>
                    </Grid>
                  </ListItem>
                  <Divider />
                  <ListItem>
                    <Grid container>
                      <Grid item xs={3}>
                        <Typography>保存方式</Typography>
                      </Grid>
                      <Grid item xs={9}>
                        {product.spec.storage.map((detail) => (
                          <ul>
                            <li>
                              <Typography>{detail}</Typography>
                            </li>
                          </ul>
                        ))}
                      </Grid>
                    </Grid>
                  </ListItem>
                  <Divider />

                  <ListItem>
                    <Grid container>
                      <Grid item xs={3}>
                        <Typography>使用方式</Typography>
                      </Grid>
                      <Grid item xs={9}>
                        {product.spec.usage.map((detail) => (
                          <ul>
                            <li>
                              <Typography>{detail}</Typography>
                            </li>
                          </ul>
                        ))}
                      </Grid>
                    </Grid>
                  </ListItem>
                  <Divider />

                  <ListItem>
                    <Grid container>
                      <Grid item xs={3}>
                        <Typography>注意事項</Typography>
                      </Grid>
                      <Grid item xs={9}>
                        {product.spec.note.map((detail) => (
                          <ul>
                            <li>
                              <Typography>{detail}</Typography>
                            </li>
                          </ul>
                        ))}
                      </Grid>
                    </Grid>
                  </ListItem>
                  <Divider />
                </List>
              </AccordionDetails>
            </Accordion>
            <CardContent>
              <Typography color="secondary.main">{`單價 新台幣 ${product.price}元 (${product.unit})`}</Typography>
              <Typography variant="caption">{`批發價新台幣 ${product.bulkPrice}元 (${product.bulkAmount}${product.unit}以上)`}</Typography>
            </CardContent>
            <CardActions>
              <TextField
                label="數量"
                type="number"
                value={state[product.id].quantity}
                fullWidth
                inputProps={{ min: 0 }}
                onChange={(event) => handleChange(event, product.id)}
              />
              <Button color="secondary" sx={{ padding: 2 }} variant="outlined" onClick={() => handleAddCart()}>
                <AddShoppingCartIcon />
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
