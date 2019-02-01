export class Item {

  constructor (
    public gender: string,
    public category: string,
    public subcategories: string[],
    public name: string,
    public description: string,
    public price: number,
    public newArrival: boolean,
    public bestSeller: boolean,
    public outlet: boolean
  ) { }

}
