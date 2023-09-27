import React from 'react'
import "../../../node_modules/react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import product1 from "../images/image-product-1.jpg"
import product1thumb from "../images/image-product-1-thumbnail.jpg"
import product2 from "../images/image-product-2.jpg"
import product2thumb from "../images/image-product-2-thumbnail.jpg"
import product3 from "../images/image-product-3.jpg"
import product3thumb from "../images/image-product-3-thumbnail.jpg"
import product4 from "../images/image-product-4.jpg"
import product4thumb from "../images/image-product-4-thumbnail.jpg"

const images = [
  {
    original: product1,
    thumbnail: product1thumb,
  },
  {
    original: product2,
    thumbnail: product2thumb,
  },
  {
    original: product3,
    thumbnail: product3thumb,
  },
  {
    original: product4,
    thumbnail: product4thumb,
  },
];


export default function Carousel() {
  return (
    <div className=' '>
      <ImageGallery items={images} /></div>
  )
}
