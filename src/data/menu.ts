import snowwhite from "../assets/snowwhite.png";
import oppa from "../assets/oppa.png";
import gsc from "../assets/gsc.png";
import hoolala from "../assets/hoolala.png";
import samurai from "../assets/samurai.png";
import unagi from "../assets/unagi.png";
import sawadeekap from "../assets/sawadeekap.png";
import prawnsta from "../assets/prawnsta.png";
import tofurice from "../assets/tofurice.png";
import mangosalad from "../assets/mangosalad.png";
import enzymes from "../assets/enzymes.png";

export interface MyMenu {
  id: number;
  name: string;
  image: string;
  ingredients: string;
  calories: string;
  carbs: string;
  protein: string;
  sauce: string;
  spicy: number;
  color: string;
  price: string;
}

export const myMenus: MyMenu[] = [
  {
    id: 1,
    name: "Snow White Bowl",
    image: snowwhite,
    ingredients:
      "Soba 荞麦面, Boiled Egg 水煮蛋, Tofu 豆腐, Lettuce 生菜, Broccoli 西兰花, Cherry Tomato 圣女果, Cucumber 黄瓜丝, Carrot 萝卜丝, Edamame 毛豆, Seaweed 紫菜丝, Sesame 芝麻",
    calories: "486 CALORIES",
    carbs: "38g",
    protein: "19g",
    sauce: "Peanut Sauce 花生酱",
    spicy: 1,
    color: "orange",
    price: "RM 14.90",
  },
  {
    id: 2,
    name: "Oppa Bowl",
    image: oppa,
    ingredients:
      "Brown Rice 糙米, Chicken Breast 鸡胸肉, Boiled Egg 水煮蛋, Lettuce 生菜, Cherry Tomato 圣女果, Cucumber 黄瓜丁, Pickle Radish 腌萝卜, Edamame 毛豆, Corn 玉米粒, Seaweed 紫菜丝, Sesame 芝麻",
    calories: "549 CALORIES",
    carbs: "54g",
    protein: "29g",
    sauce: "Bulgogi Sauce 韩式辣酱",
    spicy: 2,
    color: "red",
    price: "RM 16.90",
  },
  {
    id: 3,
    name: "GSC Bowl",
    image: gsc,
    ingredients:
      "Brown Rice 糙米, Chicken Breast 鸡胸肉, Boiled Egg 水煮蛋, Lettuce 生菜, Cherry Tomato 圣女果, Cucumber 黄瓜丁, Pickle Radish 腌萝卜, Corn 玉米粒, Edamame 毛豆, Seaweed 紫菜丝, Sesame 芝麻",
    calories: "463 CALORIES",
    carbs: "49g",
    protein: "25g",
    sauce: "Ginger Spice Sauce 姜香酱",
    spicy: 1,
    color: "yellow",
    price: "RM 16.90",
  },
  {
    id: 4,
    name: "Hoolala Bowl",
    image: hoolala,
    ingredients:
      "Brown Rice 糙米, Chicken Breast 鸡胸肉, Tamago 玉子烧, Lettuce 生菜, Broccoli 西兰花, Cherry Tomato 圣女果, Cucumber 黄瓜丁, Carrot 萝卜丝, Corn 玉米粒, Seaweed 紫菜丝, Sesame 芝麻",
    calories: "443 CALORIES",
    carbs: "60g",
    protein: "32g",
    sauce: "Black Pepper Sauce 黑胡椒酱",
    spicy: 2,
    color: "blue",
    price: "RM 17.90",
  },
  {
    id: 5,
    name: "Samurai Bowl",
    image: samurai,
    ingredients:
      "Brown Rice 糙米, Salmon 三文鱼, Lettuce 生菜, Broccoli 西兰花, Cherry Tomato 圣女果, Carrot 萝卜丝, Edamame 毛豆, Pickle Radish 腌萝卜, Corn 玉米粒, Seaweed 紫菜丝, Sesame 芝麻",
    calories: "660 CALORIES",
    carbs: "56g",
    protein: "53g",
    sauce: "Teriyaki Sauce 照烧酱",
    spicy: 0,
    color: "gray",
    price: "RM 28.90",
  },
  {
    id: 6,
    name: "Unagi Bowl",
    image: unagi,
    ingredients:
      "Brown Rice 糙米, Unagi 鳗鱼, Tamago 玉子烧, Lettuce 生菜, Cherry Tomato 圣女果, Pickle Radish 腌萝卜, Corn 玉米粒, Edamame 毛豆, Seaweed 紫菜丝, Sesame 芝麻",
    calories: "447 CALORIES",
    carbs: "58g",
    protein: "13g",
    sauce: "Teriyaki Sauce 照烧酱",
    spicy: 0,
    color: "gray",
    price: "RM 29.90",
  },
  {
    id: 7,
    name: "Sawadeekap Bowl",
    image: sawadeekap,
    ingredients:
      "Konjac Noodles 魔芋面, Prawn 虾, Lettuce 生菜, Mango 芒果丝, Cherry Tomato 圣女果, Cucumber 黄瓜丝, Carrot 萝卜丝, Coriander 香菜, Onion 洋葱丝, Peanut 花生碎",
    calories: "344 CALORIES",
    carbs: "21g",
    protein: "26g",
    sauce: "Thai Sauce 泰式辣酱",
    spicy: 2,
    color: "pink",
    price: "RM 19.90",
  },
  {
    id: 8,
    name: "Prawnsta (Pasta)",
    image: prawnsta,
    ingredients:
      "Pasta 意大利面, Prawn 虾, Lettuce 生菜, Cherry Tomato 圣女果, Carrot 萝卜丝, Cucumber 黄瓜丁, Onion 洋葱丝, Coriander 香菜, Sesame 芝麻, Peanut 花生碎",
    calories: "370 CALORIES",
    carbs: "37g",
    protein: "23g",
    sauce: "Ginger Spice Sauce 姜香酱",
    spicy: 1,
    color: "orange",
    price: "RM 18.90",
  },
  {
    id: 9,
    name: "Tofu on Rice",
    image: tofurice,
    ingredients:
      "Brown Rice 糙米, Boiled Egg 水煮蛋, Tofu 豆腐, Lettuce 生菜, Broccoli 西兰花, Cherry Tomato 圣女果, Cucumber 黄瓜丝, Carrot 萝卜丝, Edamame 毛豆, Seaweed 紫菜丝, Sesame 芝麻",
    calories: "486 CALORIES",
    carbs: "38g",
    protein: "19g",
    sauce: "Teriyaki Sauce 照烧酱",
    spicy: 0,
    color: "gray",
    price: "RM 14.90",
  },
  {
    id: 10,
    name: "Mango Salad",
    image: mangosalad,
    ingredients:
      "Konjac Noodles 魔芋面, Mango 芒果丝, Lettuce 生菜, Cherry Tomato 圣女果, Cucumber 黄瓜丝, Carrot 萝卜丝, Onion 洋葱丝, Coriander 香菜, Peanut 花生碎",
    calories: "",
    carbs: "",
    protein: "",
    sauce: "Thai Sauce 泰式辣酱",
    spicy: 2,
    color: "pink",
    price: "RM 9.90",
  },
  {
    id: 11,
    name: "Fun Enzymes",
    image: enzymes,
    ingredients:
      "Fruit enzyme frinks contain probiotics, antioxidants & enzymes. Improve gut health & to regulate our body's pH levels.",
    calories: "",
    carbs: "",
    protein: "",
    sauce: "",
    spicy: 0,
    color: "pink",
    price: "RM 6.90",
  },
];
