import { Item } from '@/type';
import React from 'react';
import Image from 'next/image';

const Products = ({productData}:any) => {
    console.log("productData 2021", productData);
  return (
    <div className='py-6 px-4 grid grid-cols-4 gap-4'>
      {productData.map((item:Item)=>(
        <div key={item._id} className='border-[1px] border-gray-200 mb-6 group'>
            <Image 
               width= {300}
               height={250}
               src={item.image}
               alt="itemImage"
            />
        </div>
      ))}
    </div>
  )
}

export default Products
