import blue1 from '../assets/blue.jpg';
import bottle0 from '../assets/bottle.jpg';
import cyan2 from '../assets/cyan.jpg';
import green3 from '../assets/green.jpg';
import pink5 from '../assets/pink.jpg';
import white4 from '../assets/white.jpg';

interface Product {
  id: string;
  name: string;
  price: number;
  bulkPrice: number;
  unit: string;
  image: string;
  bulkAmount: number;
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
  },
  { id: 'blue1', name: '藍-淨白抗菌 洗衣球', price: 100, bulkPrice: 70, unit: '盒', image: blue1, bulkAmount: 100 },
  { id: 'cyan2', name: '水藍-白夜花香 洗衣球', price: 100, bulkPrice: 70, unit: '盒', image: cyan2, bulkAmount: 100 },
  { id: 'green3', name: '綠-除臭抗菌 洗衣球', price: 100, bulkPrice: 70, unit: '盒', image: green3, bulkAmount: 100 },
  { id: 'white4', name: '白-植物花香 洗衣球', price: 100, bulkPrice: 70, unit: '盒', image: white4, bulkAmount: 100 },
  { id: 'pink5', name: '粉-牡丹花香 洗衣球', price: 100, bulkPrice: 70, unit: '盒', image: pink5, bulkAmount: 100 },
];

export default products;
