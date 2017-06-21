interface IGood {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  available: boolean;
  comments: Array<string>;
}

export class Good implements IGood {
  constructor(
    public id: number,
    public title: string,
    public description: string,
    public category: string,
    public price: number,
    public available: boolean,
    public comments: Array<string>
  ) { }
}
