import blue1 from '../assets/blue.jpg';
import bottle0 from '../assets/bottle.jpg';
import cyan2 from '../assets/cyan.jpg';
import green3 from '../assets/green.jpg';
import pink5 from '../assets/pink.jpg';
import white4 from '../assets/white.jpg';

type ProductSpec = {
  size: string;
  usage: string[];
  storage: string[];
  expireDate: string;
  location: string;
  note: string[];
};

interface Product {
  id: string;
  name: string;
  price: number;
  bulkPrice: number;
  unit: string;
  image: string;
  bulkAmount: number;
  spec: ProductSpec;
}
const products: Product[] = [
  {
    id: 'bottle0',
    name: 'ARIEL深層抗菌除臭洗衣精',
    price: 100,
    bulkPrice: 70,
    unit: '罐',
    image: bottle0,
    bulkAmount: 100,
    spec: {
      size: '900g',
      usage: [
        '請依照商品標示建議用量使用。',
        '滾筒洗衣機衣物量5公斤、直立式洗衣機水量55公升，請使用55毫升洗衣精。',
        '滾筒洗衣機衣物量2公斤、直立式洗衣機水量30公升，請使用30毫升洗衣精。',
      ],
      storage: ['請置於陰暗處。', '請置於孩童無法取得之處，並注意儲藏位置，避免失智症患者誤食。'],
      expireDate: '2年 (依照商品標示建議使用期限)',
      location: '日本製造',
      note: [
        '請勿將本產品用於洗衣以外的其他用途。',
        '敏感性肌膚或長時間使用時，建議戴上手套。',
        '使用完畢請洗手，並建議使用護手霜護理。',
        '若洗衣精沾污洗衣機，用水擦拭乾淨即可。',
        '本產品採用軟質包裝，使用前請小心避免包裝損壞或洗衣精漏出。',
        '此液體不可飲用。',
        '洗衣建議：即使僅進行一次洗程，並搭配漂白劑或柔軟精一起使用，也不影響清潔效果。漂洗兩次以上時，建議在最後一次漂洗時使用自來水。請勿用於羊毛與纖細衣物，或有以下洗滌標示的衣物。深色或淺色衣物，若有標示「使用無螢光劑」洗劑時，建議不要使用本洗衣精。',
      ],
    },
  },
  {
    id: 'blue1',
    name: '藍-淨白抗菌 洗衣球',
    price: 100,
    bulkPrice: 70,
    unit: '盒',
    image: blue1,
    bulkAmount: 100,
    spec: {
      size: '17入',
      usage: [
        '在放衣物前將洗衣膠囊投入洗衣機中。',
        '添加衣物。',
        '正常洗量每次使用一顆；大洗量或較髒衣物，使用兩顆。',
        '產品直接放入洗衣槽內不需剪破。',
        '請依照商品標示建議用量使用。',
      ],
      storage: ['請置於陰暗處。', '請置於孩童無法取得之處，並注意儲藏位置，避免失智症患者誤食。'],
      expireDate: '18個月 (依照商品標示建議使用期限)',
      location: '日本製造',
      note: [
        '請勿將本產品用於洗衣以外的其他用途。',
        '請勿戳破或剪破本產品。',
        '若接觸皮膚，可能引起過敏，請立即用清水沖洗',
        '若洗衣精沾污洗衣機，用水擦拭乾淨即可。',
        '本產品採用軟質包裝，使用前請小心避免包裝損壞或洗衣精漏出。',
        '此液體不可飲用。',
        '若不慎誤食，請勿催吐，並盡速攜帶盒上標示診治。',
      ],
    },
  },
  {
    id: 'cyan2',
    name: '水藍-白夜花香 洗衣球',
    price: 100,
    bulkPrice: 70,
    unit: '盒',
    image: cyan2,
    bulkAmount: 100,
    spec: {
      size: '17入',
      usage: [
        '在放衣物前將洗衣膠囊投入洗衣機中。',
        '添加衣物。',
        '正常洗量每次使用一顆；大洗量或較髒衣物，使用兩顆。',
        '產品直接放入洗衣槽內不需剪破。',
        '請依照商品標示建議用量使用。',
      ],
      storage: ['請置於陰暗處。', '請置於孩童無法取得之處，並注意儲藏位置，避免失智症患者誤食。'],
      expireDate: '18個月 (依照商品標示建議使用期限)',
      location: '日本製造',
      note: [
        '請勿將本產品用於洗衣以外的其他用途。',
        '請勿戳破或剪破本產品。',
        '若接觸皮膚，可能引起過敏，請立即用清水沖洗',
        '若洗衣精沾污洗衣機，用水擦拭乾淨即可。',
        '本產品採用軟質包裝，使用前請小心避免包裝損壞或洗衣精漏出。',
        '此液體不可飲用。',
        '若不慎誤食，請勿催吐，並盡速攜帶盒上標示診治。',
      ],
    },
  },
  {
    id: 'green3',
    name: '綠-除臭抗菌 洗衣球',
    price: 100,
    bulkPrice: 70,
    unit: '盒',
    image: green3,
    bulkAmount: 100,
    spec: {
      size: '17入',
      usage: [
        '在放衣物前將洗衣膠囊投入洗衣機中。',
        '添加衣物。',
        '正常洗量每次使用一顆；大洗量或較髒衣物，使用兩顆。',
        '產品直接放入洗衣槽內不需剪破。',
        '請依照商品標示建議用量使用。',
      ],
      storage: ['請置於陰暗處。', '請置於孩童無法取得之處，並注意儲藏位置，避免失智症患者誤食。'],
      expireDate: '18個月 (依照商品標示建議使用期限)',
      location: '日本製造',
      note: [
        '請勿將本產品用於洗衣以外的其他用途。',
        '請勿戳破或剪破本產品。',
        '若接觸皮膚，可能引起過敏，請立即用清水沖洗',
        '若洗衣精沾污洗衣機，用水擦拭乾淨即可。',
        '本產品採用軟質包裝，使用前請小心避免包裝損壞或洗衣精漏出。',
        '此液體不可飲用。',
        '若不慎誤食，請勿催吐，並盡速攜帶盒上標示診治。',
      ],
    },
  },
  {
    id: 'white4',
    name: '白-植物花香 洗衣球',
    price: 100,
    bulkPrice: 70,
    unit: '盒',
    image: white4,
    bulkAmount: 100,
    spec: {
      size: '16入',
      usage: [
        '在放衣物前將洗衣膠囊投入洗衣機中。',
        '添加衣物。',
        '正常洗量每次使用一顆；大洗量或較髒衣物，使用兩顆。',
        '產品直接放入洗衣槽內不需剪破。',
        '請依照商品標示建議用量使用。',
      ],
      storage: ['請置於陰暗處。', '請置於孩童無法取得之處，並注意儲藏位置，避免失智症患者誤食。'],
      expireDate: '18個月 (依照商品標示建議使用期限)',
      location: '日本製造',
      note: [
        '請勿將本產品用於洗衣以外的其他用途。',
        '請勿戳破或剪破本產品。',
        '若接觸皮膚，可能引起過敏，請立即用清水沖洗',
        '若洗衣精沾污洗衣機，用水擦拭乾淨即可。',
        '本產品採用軟質包裝，使用前請小心避免包裝損壞或洗衣精漏出。',
        '此液體不可飲用。',
        '若不慎誤食，請勿催吐，並盡速攜帶盒上標示診治。',
      ],
    },
  },
  {
    id: 'pink5',
    name: '粉-牡丹花香 洗衣球',
    price: 100,
    bulkPrice: 70,
    unit: '盒',
    image: pink5,
    bulkAmount: 100,
    spec: {
      size: '17入',
      usage: [
        '在放衣物前將洗衣膠囊投入洗衣機中。',
        '添加衣物。',
        '正常洗量每次使用一顆；大洗量或較髒衣物，使用兩顆。',
        '產品直接放入洗衣槽內不需剪破。',
        '請依照商品標示建議用量使用。',
      ],
      storage: ['請置於陰暗處。', '請置於孩童無法取得之處，並注意儲藏位置，避免失智症患者誤食。'],
      expireDate: '18個月 (依照商品標示建議使用期限)',
      location: '日本製造',
      note: [
        '請勿將本產品用於洗衣以外的其他用途。',
        '請勿戳破或剪破本產品。',
        '若接觸皮膚，可能引起過敏，請立即用清水沖洗',
        '若洗衣精沾污洗衣機，用水擦拭乾淨即可。',
        '本產品採用軟質包裝，使用前請小心避免包裝損壞或洗衣精漏出。',
        '此液體不可飲用。',
        '若不慎誤食，請勿催吐，並盡速攜帶盒上標示診治。',
      ],
    },
  },
];

export default products;