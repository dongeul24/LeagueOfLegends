//.data
export interface Champions {
  [championName: string]: Champion;
}
export interface Champion {
  version: string;
  id: string;
  key: string;
  name: string;
  title: string;
  image: Image;
  blurb: string;
  info: Info;
  tags: string[];
  partype: string;
  stats: Stats;
}

interface Info {
  attack: number;
  defense: number;
  magic: number;
  difficulty: number;
}

export interface Image {
  full: string;
  sprite: string;
  group: string;
  x: number;
  y: number;
  w: number;
  h: number;
}

interface Stats {
  hp: number;
  hpperlevel: number;
  mp: number;
  mpperlevel: number;
  movespeed: number;
  armor: number;
  armorperlevel: number;
  spellblock: number;
  spellblockperlevel: number;
  attackrange: number;
  hpregen: number;
  hpregenperlevel: number;
  mpregen: number;
  mpregenperlevel: number;
  crit: number;
  critperlevel: number;
  attackdamage: number;
  attackdamageperlevel: number;
  attackspeedperlevel: number;
  attackspeed: number;
}
