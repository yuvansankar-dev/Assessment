import React from 'react'

export default function Header({completed}) {
  return (
    <div>
      <h1>{completed?"Answer for the below question":"Completed"}</h1>
    </div>
  )
}
