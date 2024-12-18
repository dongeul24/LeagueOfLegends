import { Champion, Image } from "./Champion";

// .data
export interface ChampionDetails {
  [championName: string]: ChampionDetail;
};


export interface ChampionDetail extends Omit<Champion, "version"> {
  skins: Skins[];
  lore: string;
  allytips: string[];
  enemytips: string[];
  spells: Spell[];
  passive: Passive;
  recommended: any[];
}

interface Skins {
  id: string;
  num: number;
  name: string;
  chromas: boolean;
}

interface Spell {
  id: string;
  name: string;
  description: string;
  tooltip: string;
  leveltip: { [leveltipCode: string]: string };
  maxrank: number;
  cooldown: number[];
  cooldownBurn: string;
  cost: number[];
  costBurn: string;

  datavalues: { [key: string]: any };
  effect: (null | number[])[];
  effectBurn: (null | string)[];
  vars: any[];
  costType: string;
  maxammo: string;
  range: number[];
  rangeBurn: string;
  image: Image;
  resource: string;
}

interface Passive {
  name: string;
  description: string;
  image: Image;
}