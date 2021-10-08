export interface ISpecification{
  imgUrl?: string,
  title: string,
  description?: string
}

export interface IProductMac{
  id: string,
  imgUrl: string,
  title: string,
  price: number,
  color: string,
  specification: ISpecification[]
}
