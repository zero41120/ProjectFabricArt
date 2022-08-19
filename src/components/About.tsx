import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import EmailIcon from '@mui/icons-material/Email';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import { Avatar, Card, CardContent, Container, Grid, Stack, Typography } from '@mui/material';

import { Contact } from '../data/contact';

export const About = () => {
  return (
    <Stack padding={4}>
      <Typography variant="h2" align="center" mb={10}>
        聯絡我們
      </Typography>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ height: 250 }}>
            <CardContent sx={{ display: 'grid', justifyContent: 'center', justifyItems: 'center' }}>
              <Avatar sx={{ width: '100px', height: '100px' }}>
                <PhoneInTalkIcon sx={{ width: '60px', height: '60px' }}></PhoneInTalkIcon>
              </Avatar>
              <Typography variant="h4" align="center">
                聯絡電話
              </Typography>
              <Typography align="center">對產品有問題? 撥打電話與我們的銷售團隊成員詢問</Typography>
              <Typography variant="h6" align="center">
                {Contact.phone}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ height: 250 }}>
            <CardContent sx={{ display: 'grid', justifyContent: 'center', justifyItems: 'center' }}>
              <Avatar sx={{ width: '100px', height: '100px' }}>
                <EmailIcon sx={{ width: '60px', height: '60px' }}></EmailIcon>
              </Avatar>
              <Typography variant="h4" align="center">
                電子郵件E-Mail
              </Typography>
              <Typography align="center">透過email聯絡服務人員</Typography>
              <Typography variant="h6" align="center">
                {Contact.email}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ height: 250 }}>
            <CardContent sx={{ display: 'grid', justifyContent: 'center', justifyItems: 'center' }}>
              <Avatar sx={{ width: '100px', height: '100px' }}>
                <SupportAgentIcon sx={{ width: '60px', height: '60px' }}></SupportAgentIcon>
              </Avatar>
              <Typography variant="h4" align="center">
                線上客服
              </Typography>
              <Typography align="center">系統尚未啟用</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Stack>
  );
};
