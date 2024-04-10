import React from 'react'
import Completed from './Completed/Completed'

export default function Header({completed,data}) {
  return (
    <div>
      <h1>{completed?<Completed data={data}/>:"Answer for the below question"}</h1>
    </div>
  )
}
