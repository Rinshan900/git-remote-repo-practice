import { ProductsService } from '@/app/services/products-service';
import { Metadata } from 'next';
import React from 'react'

export async function generateMetadata(props:any) {
console.log(" generateMetadata:",props);
console.log(props);
const productId = props.params.productId;
var product;
if(productId) {
    product = await ProductsService.getProductById(productId);
    return{
      title:product.title
    }
}

return{
  title:"prod detail page"
}
}



export default async function ProductDetail(props:any) {
  console.log(props);
  const productId = props.params.productId;
  var product;
  if(productId) {
      product = await ProductsService.getProductById(productId);
  }
return (
  <div><h3>{product.title}</h3></div>
)
}
