import { AiOutlineCheckCircle } from "react-icons/ai";
import { BiBowlRice } from "react-icons/bi";
import { CiBowlNoodles } from "react-icons/ci";
import { TbSalad } from "react-icons/tb";
import { MdLocalDrink } from "react-icons/md";
import { IconType } from "react-icons";

export interface MyMain {
  name: string;
  left_icon: IconType;
}

export const myMains: MyMain[] = [
  { name: "All", left_icon: AiOutlineCheckCircle },
  { name: "Rice", left_icon: BiBowlRice },
  { name: "Noodles", left_icon: CiBowlNoodles },
  { name: "Salad", left_icon: TbSalad },
  { name: "Drink", left_icon: MdLocalDrink },
];
