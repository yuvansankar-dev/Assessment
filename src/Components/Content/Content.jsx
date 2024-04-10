import React from 'react'
import QuesPart from './QuesPart/QuesPart'
import ButtonPart from './ButtonPart/ButtonPart'

export default function Content({data,setData,count,setCount}) {
  return (
    <div>
      <QuesPart data={data} setData={setData} count={count}/>
      <ButtonPart data={data} count={count} setCount={setCount}/>
    </div>
  )
}
