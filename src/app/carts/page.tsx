import React from 'react';
import Link from 'next/link';

export default function Cart() {
  return (
    <div>
      Cart
      <Link href="/products#recommended">Goto Recommended Section</Link>
    </div>
  )
}
