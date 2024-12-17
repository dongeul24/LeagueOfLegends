import {Image} from "./Champion"

interface Gold {
  base: number;
  purchasable: boolean;
  total: number;
  sell: number;
}

interface Stats {
  [statsCode: string]: number;
}

type Maps = {
  "11": boolean;
  "12": boolean;
  "21": boolean;
  "22": boolean;
  "30": boolean;
  "33": boolean;
};


// .data.아이디(숫자)
export interface Item {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  into: string[];
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps;
  stats: Stats;
}


