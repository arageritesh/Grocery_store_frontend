
import React, { useEffect } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import ProductItemDetails from './ProductItemDetails'

function ProductItem({product}) {
  
  console.log('ProductItem received:', product);
  return (
    <div className='p-2 md:p-6
    flex flex-col items-center 
    justify-center gap-3 border rounded-lg
    hover:scale-105 hover:shadow-lg
    transition-all ease-in-out cursor-pointer '>
<Image
  src={process.env.NEXT_PUBLIC_BACKEND_BASE_URL + (product.attributes.images.data[0]?.attributes?.url || '/fallback-image.jpg')}
  width={500}
  height={200}
 // layout="responsive"
  alt={product.attributes.name}
  className='h-[200px] w-[200px] object-contain'
/>
      <h2 className='font-bold text-lg'>{product.attributes.name}</h2>
      <div className='flex gap-3'>
      {product.attributes.selling_price &&
      <h2 className='font-bold text-lg'>{product.attributes.selling_price}</h2>
      }
      <h2 className={`font-bold text-lg ${product.attributes.selling_price && 'line-through text-gray-500'}`}>${product.attributes.mrp}</h2>
      </div>
      
      <Dialog>
  <DialogTrigger asChild><Button variant="outline" className='text-primary hover:text-white hover:bg-primary'>Add to Cart</Button></DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you absolutely sure?</DialogTitle>
      <DialogDescription>
        <ProductItemDetails product={product}/>
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>

    </div>
  )
}

export default ProductItem







