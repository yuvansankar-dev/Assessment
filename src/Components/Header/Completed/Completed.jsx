import React from 'react'

export default function Completed({data}) {
  return (
    <div>
      <h2>Completed</h2>
{
    data.map((val)=><><h3>{val.question}</h3>{val.selectedAns.map((ans)=><h6>{ans}</h6>)}</> )
}
    </div>
  )
}
