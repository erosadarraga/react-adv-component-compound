import { ReactElement } from 'react'
import { Props as ProductCardProps } from '../components/ProductCard'

export interface Product {
  id: string
  title: string
  img?: string
}

export interface ProductContextProps {
  counter: number
  increaseBy: (value: number) => void
  product: Product
}

export interface ProductCardHOCProps {
  ({ children, product }: ProductCardProps): JSX.Element
  Title: (Props: { title?: string,white?:string }) => JSX.Element
  Image: (Props: { img?: string,customImg?:string }) => JSX.Element
  Buttons: (Props: { className?: string }) => JSX.Element
}
