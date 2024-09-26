import React from 'react'

export default function DynamicSearch(props:any) {
    const myparams:String[] = props.params.myparams;
    const category = myparams[0];
    const group = myparams[1];
    const brand = myparams[2];
    const modelNo = myparams[3];

  return (
    <div>
       DynamicSearch: {category}
    </div>
  )
}
