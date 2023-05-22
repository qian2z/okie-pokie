export interface MyMenu {
  id: number;
  name: string;
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
    ingredients:
      "Soba 荞麦面, Tofu 豆腐, Cherry Tomato 圣女果, Cucumber 黄瓜丝, Carrot 萝卜丝, Boiled Egg 水煮蛋, Edamame 毛豆, Sesame 芝麻",
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
    ingredients:
      "Brown Rice 糙米, Chicken Breast 鸡胸肉, Cherry Tomato 圣女果, Cucumber 黄瓜丝, Pickle Radish 泡菜萝卜, Boiled Egg 水煮蛋, Edamame 毛豆, Sesame 芝麻",
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
    ingredients:
      "Brown Rice 糙米, Chicken Breast 鸡胸肉, Cherry Tomato 圣女果, Cucumber 黄瓜丝, Pickle Radish 泡菜萝卜, Boiled Egg 水煮蛋, Sesame 芝麻",
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
    ingredients:
      "Brown Rice 糙米, Chicken Breast 鸡胸肉, Tamago 玉子烧, Cherry Tomato 圣女果, Broccoli 西兰花, Carrot 萝卜丝, Corns 玉米粒, Cucumber 黄瓜丝, Sesame 芝麻",
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
    ingredients:
      "Brown Rice 糙米, Salmon 三文鱼, Cherry Tomato 圣女果, Broccoli 西兰花, Pickle Radish 泡菜萝卜, Corns 玉米粒, Sesame 芝麻",
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
    ingredients:
      "Brown Rice 糙米, Unagi 鳗鱼, Cherry Tomato 圣女果, Cucumber 黄瓜丝, Pickle Radish 泡菜萝卜, Edamame 毛豆, Tamago 玉子烧, Sesame 芝麻",
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
    ingredients:
      "Konjac Noodles 魔芋面, Prawn 虾, Mango 芒果, Cucumber 黄瓜丝, Carrot 萝卜丝, Cherry Tomato 圣女果, Coriander 香菜, Onion 洋葱丝, Peanut 花生碎",
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
    ingredients:
      "Pasta 意大利面, Prawn 虾, Cherry Tomato 圣女果, Cucumber 黄瓜丝, Pickle Radish 泡菜萝卜, Boiled Egg 水煮蛋, Edamame 毛豆, Sesame 芝麻",
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
    ingredients:
      "Brown Rice 糙米, Tofu 豆腐, Cherry Tomato 圣女果, Cucumber 黄瓜丝, Carrot 萝卜丝, Boiled Egg 水煮蛋, Edamame 毛豆, Sesame 芝麻",
    calories: "",
    carbs: "",
    protein: "",
    sauce: "Teriyaki Sauce 照烧酱",
    spicy: 0,
    color: "gray",
    price: "RM 14.90",
  },
  {
    id: 10,
    name: "Mango Salad",
    ingredients:
      "Konjac Noodles 魔芋面, Mango 芒果, Cherry Tomato 圣女果, Cucumber 黄瓜丝, Carrot 萝卜丝, Coriander 香菜, Onion 洋葱丝, Peanut 花生碎",
    calories: "",
    carbs: "",
    protein: "",
    sauce: "Thai Sauce 泰式辣酱",
    spicy: 2,
    color: "pink",
    price: "RM 9.90",
  },
];
