import { useRouter } from 'next/router'
import React from 'react'

const ProductDetails = () => {
    const router = useRouter();
    console.log(router);
  return (
    <div>
      ProductDetails
    </div>
  )
}

export default ProductDetails
