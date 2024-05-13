
export enum Color {
  red = 'Red',
  black = 'Black',
  blue = 'Blue',
  green = 'Green',
  yellow = 'Yellow'
}

export interface Hero {
  name: string;
  canFly: boolean;
  color: Color;
}
