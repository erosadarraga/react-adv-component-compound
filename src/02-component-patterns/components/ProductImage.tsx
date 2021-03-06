import { useContext } from 'react';
import { ProductContext } from './ProductCard';

import styles from '../styles/styles.module.css'
import noImage from '../assets/no-image.jpg';

interface customImgProps{
    customImg?:string
    img?:string
}

export const ProductImage = ({ img  ,customImg}:customImgProps) => {

    const { product } = useContext( ProductContext );
    let imgToShow: string;

    if ( img ) {
        imgToShow = img;
    } else if ( product.img ) {
        imgToShow = product.img
    } else {
        imgToShow = noImage;
    }


    return (
        <img className={ `${styles.productImg} ${customImg}` } src={ imgToShow } alt="Product" />
    );
}