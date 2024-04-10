import React from 'react'

export default function Header({completed}) {
  return (
    <div>
      <h1>{completed?"Completed":"Answer for the below question"}</h1>
    </div>
  )
}
