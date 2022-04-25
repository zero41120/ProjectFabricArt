import {
  Accordion,
  AccordionSummary,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material';
import React from 'react';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Contact } from '../data/contact';

const returnProduct = [
  '告知我們需要退貨的商品以及退貨的原因。',
  '與我們取得退貨的流程與地址。',
  '我們將派送宅配人員進行退貨取貨,消費者僅需等待貨物退回。',
  '我們收到退貨商品之後,檢查若無任何問題,及會以匯款的方式進行退貨處理。',
];

const trailPolicy = [
  '七天鑑賞期指的是猶豫期而非試用期喔！',
  '商品須在完整、未使用狀態且可還原狀態下才能進行退換貨。',
  '七天鑑賞期的算法是從收到商品的隔天開始算七天，且包含例假日。',
  '只要是商品完整,無需任何理由我們收到退貨商品之後保證消費者的權益 "無條件" 提供退貨服務!',
  '退貨運費由本商店全面承擔，消費者無須有任何的運費支出。',
];

const returnPolicy = [
  `請來信洗衣精大王客服信箱 Email: ${Contact.email} 或 洗衣精大王客服電話: ${Contact.phone}`,
  '請說明商品狀況，以利客服進行處理。',
  '退貨時請連同發票並保持包裝及商品整體完整，本公司將會通知宅配工人到貴退貨地址取貨送回本公司，經過檢查無缺之後，我們會儘速與您聯絡退換貨事宜。',
];

const exchangeRefundPolicy = [
  '關於退換貨，為了提供用戶更優質的購物環境與消費者體驗，依照消保法規範賣場所有售出商品皆有七天鑒賞期服務',
  '我們收到退換貨品後將拆封確認商品丶發票等相關附件是否完整，經審核後會由客服人員為您辦理換貨或退款事宜，經本公司收到退貨商品後,2個工作天內會將換或商品寄出，或在7個工作天將退款的費用匯至您指定的銀行帳戶。',
  '若您是使用信用卡付款，我們將於收到退貨商品12個工作天(不含例假日），為您完成刷退手續，請您留意下一期帳單。',
];

const notRefundable = [
  '個人使用上造成商品毀損的問題。未附上原包裝盒含外包裝或包裝不完整及破損無法辨識之商品及發票。',
  '使用過商品,造成商品汙損,我們將不提供退貨服務。',
];

const accordion = [
  { summary: '退換流程', details: returnProduct },
  { summary: '換貨退款資訊', details: exchangeRefundPolicy },
  { summary: '七天鑑賞期', details: trailPolicy },
  { summary: '退貨政策', details: returnPolicy },
  { summary: '不可退貨原因', details: notRefundable },
];

export const Support = () => {
  return (
    <Stack padding={4}>
      <Typography variant="h3" sx={{ margin: 'auto' }}>
        常見問答
      </Typography>
      {accordion.map((item, index) => (
        <Accordion expanded key={index}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
            <Typography variant="h4">{item.summary}</Typography>
          </AccordionSummary>
          <List dense>
            {item.details.map((item, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <ArrowRightIcon />
                </ListItemIcon>
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
        </Accordion>
      ))}
    </Stack>
  );
};
