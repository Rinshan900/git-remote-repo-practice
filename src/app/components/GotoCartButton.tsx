'use client'
import React from 'react';
import { useRouter } from 'next/navigation'

export default function GotoCartButton() {
    const router = useRouter();
  return (
    <div>
      <button onClick={() => {
      router.prefetch('/carts')
    }}>Go to Cart</button>
    </div>
  )
}
