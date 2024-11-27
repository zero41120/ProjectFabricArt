
import React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Stack,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Contact } from '../data/contact';

export const PrivacyPolicy = () => {
  return (
    <Stack padding={4}>
      <Typography variant="h3" sx={{ margin: 'auto', marginBottom: 2 }}>
        隱私權政策
      </Typography>
      <Accordion expanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="privacy-content" id="privacy-header">
          <Typography variant="h4">隱私權政策詳情</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" component="div">
            <strong>歡迎光臨「洗衣精大王批發」（以下簡稱「本網站」）。</strong> 為了讓您安心使用本網站的各項服務與資訊，我們特此說明隱私權保護政策，以保障您的權益。請詳細閱讀以下內容：
            <br />
            <br />
            <strong>一、隱私權保護政策的適用範圍</strong>
            <br />
            本政策適用於本網站處理您使用服務時所蒐集的個人資料，不適用於其他非本網站經營或未受委託管理的網站與人員。
            <br />
            <br />
            <strong>二、個人資料的蒐集、處理及利用方式</strong>
            <br />
            1. <strong>資料蒐集</strong>  
            您在使用本網站服務（如客服信箱、問卷調查等互動功能）時，可能需提供姓名、電子郵件、聯絡方式及使用時間等資料。
            一般瀏覽期間，伺服器會記錄IP位址、瀏覽器種類、使用時間及瀏覽行為等資訊，僅作內部分析以優化服務，不對外公開。
            <br />
            2. <strong>資料利用</strong>  
            您的個人資料僅在特定目的內使用，未經書面同意，本網站不會將您的資料用於其他用途。
            <br />
            3. <strong>統計與分析</strong>  
            問卷等資料將以匿名方式進行統計分析，相關結果僅供內部研究或必要時公開，但不涉及個人身分資訊。
            <br />
            <br />
            <strong>三、資料之保護</strong>
            <br />
            本網站採用防火牆、防毒系統等嚴密的安全措施，以保障您的個人資料安全。資料僅限授權人員接觸，所有相關人員均簽署保密協議，如有違規，將依法追究。
            若因業務需求委託第三方處理，本網站亦要求其履行保密義務並進行監督。
            <br />
            <br />
            <strong>四、網站對外連結</strong>
            <br />
            本網站可能包含其他網站的連結。請注意，該等網站不適用本網站隱私政策，您需參考該網站的相關政策。
            <br />
            <br />
            <strong>五、與第三方共享個人資料之政策</strong>
            <br />
            除法律規定或契約義務外，本網站不會將您的個人資料提供、出租、出售或交換給第三方。但以下情況不在此限：
            <br />
            1. 經您書面同意。  
            2. 符合法律規定或配合司法機關要求。  
            3. 為保護您或他人的生命、身體、財產安全。  
            4. 公務機關或學術研究機構為公共利益進行統計或學術研究，且資料已匿名化處理。  
            5. 您行為違反服務條款或可能損害網站或他人權益，為採取必要行動需揭露您的資料。  
            6. 本網站委外處理資料時，將確保委外單位遵守保密與安全義務。
            <br />
            <br />
            <strong>六、Cookie的使用</strong>
            <br />
            為提升服務品質，本網站可能於您的設備上放置並存取Cookie。若您不接受Cookie，可在瀏覽器設定中拒絕，但可能影響部分功能正常運作。
            <br />
            <br />
            <strong>七、隱私權保護政策的修訂</strong>
            <br />
            本政策將隨需求進行修訂，最新版本將刊登於本網站。
            <br />
            <br />
            <strong>八、帳號刪除</strong>
            <br />
            如需刪除帳號及所有個人資料，請來信聯絡我們：{Contact.email}。
            <br />
            <br />
            感謝您對「洗衣精大王批發」的支持與信任！
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Stack>
  );
};
